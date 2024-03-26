"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DxHelper = void 0;
const _ = __importStar(require("lodash"));
const sequelize_1 = require("sequelize");
class DxHelper {
    buildSequelizeOptions(dxQuery) {
        return {
            where: this.buildFilter(dxQuery.filter),
            order: this.buildSortOrder(dxQuery.sort),
            limit: dxQuery.take,
            offset: dxQuery.skip,
        };
    }
    /** Builds a filter for use with Sequelize from a dxExpression
     * @param {Object<Array>} dxExpression entity ID's to check (optional)
     * @returns {Object} sequelize where expression
     */
    buildFilter(dxExpression) {
        if (!dxExpression) {
            return {};
        }
        const filter = this.Parse({}, dxExpression);
        const result = this.mapFilterValues(_.omit(filter, 'not'));
        if (_.hasIn(filter, 'not')) {
            result[sequelize_1.Op.not] = this.mapFilterValues(filter.not);
        }
        return result;
    }
    /** Builds a sort for use with Sequelize from a dxSort
     * @param {Object<Array>} dxExpression entity ID's to check (optional)
     * @returns {Object} sequelize sort expression
     */
    buildSortOrder(dxExpression) {
        return _.map(dxExpression, (sortItem) => {
            if (sortItem.desc) {
                return [sortItem.selector, 'DESC'];
            }
            return [sortItem.selector, 'ASC'];
        });
    }
    mapFilterValues(filter) {
        return _.mapValues(filter, (operators) => {
            const result = { [sequelize_1.Op.and]: [] };
            if (operators.and) {
                result[sequelize_1.Op.and].push({ [sequelize_1.Op.and]: operators.and });
            }
            if (operators.or) {
                result[sequelize_1.Op.and].push({ [sequelize_1.Op.or]: operators.or });
            }
            return result;
        });
    }
    /** Parses a dxExpression into a sequelize filter
     * @param {Object} filters base sequelize filter
     * @param {Object<Array>} dxExpression to transform
     * @param {String} logicalOperator which branch to add filter onto (and/or)
     * @param negated
     * @returns {Object} sequelize where expression
     */
    Parse(filters, dxExpression, logicalOperator = 'and', negated = false) {
        const field = dxExpression[0];
        let operator = dxExpression[1];
        let value = dxExpression[2];
        if (field === '!') {
            return this.negatedDxParse(filters, dxExpression, logicalOperator, negated);
        }
        if (['and', 'or'].includes(operator)) {
            return this._chainOperator(filters, dxExpression, operator, negated);
        }
        const DIRECT_OPERATOR_MAPPING = {
            '=': sequelize_1.Op.eq,
            '<>': sequelize_1.Op.ne,
            '<': sequelize_1.Op.lt,
            '<=': sequelize_1.Op.lte,
            '>': sequelize_1.Op.gt,
            '>=': sequelize_1.Op.gte,
        };
        switch (operator) {
            case 'contains':
                operator = sequelize_1.Op.iLike;
                value = `%${value}%`;
                break;
            default:
                if (DIRECT_OPERATOR_MAPPING[operator]) {
                    operator = DIRECT_OPERATOR_MAPPING[operator];
                }
                break;
        }
        const result = _.cloneDeep(filters);
        const path = [field, logicalOperator];
        if (negated) {
            path.unshift('not');
        }
        const newFilter = _.get(result, path, []);
        if (value === '**null**') {
            value = null;
        }
        newFilter.push({ [operator]: value });
        return _.set(result, path, newFilter);
    }
    /** Parses a chained dxExpression into a sequelize filter
     * @param {Object} filters base sequelize filter
     * @param {Object<Array>} dxExpression to transform
     * @param {String} logicalOperator to apply to the chain
     * @returns {Object} sequelize where expression
     */
    _chainOperator(filters, expression, logicalOperator = 'and', negated = false) {
        const firstFilter = this.Parse(filters, expression[0], logicalOperator, negated);
        if (expression.length > 3) {
            return this.Parse(firstFilter, expression.slice(2), logicalOperator, negated);
        }
        return this.Parse(firstFilter, expression[2], logicalOperator, negated);
    }
    /** Parses a dxExpression with a negated element into a sequelize filter
     * @param {Object} filters base sequelize filter
     * @param {Object<Array>} dxExpression to transform
     * @param {String} logicalOperator to apply to the chain
     * @returns {Object} sequelize where expression
     */
    negatedDxParse(filters, expression, logicalOperator = 'and', negated = false) {
        const negatedFilters = this.Parse(filters, expression[1], logicalOperator, !negated);
        if (expression.length > 2) {
            const combinedFilters = this.Parse(negatedFilters, expression.slice(2), logicalOperator, negated);
            return combinedFilters;
        }
        return negatedFilters;
    }
}
exports.DxHelper = DxHelper;
