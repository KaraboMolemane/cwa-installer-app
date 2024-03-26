import * as _ from 'lodash';
import { Op } from 'sequelize';
import { DxQueryDto } from './dx-query.dto';

export class DxHelper<T> {
  public buildSequelizeOptions(dxQuery: DxQueryDto<T>) {
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
  public buildFilter(dxExpression: Array<any>) {
    if (!dxExpression) {
      return {};
    }
    const filter = this.Parse({}, dxExpression);

    const result: any = this.mapFilterValues(_.omit(filter, 'not'));

    if (_.hasIn(filter, 'not')) {
      result[Op.not] = this.mapFilterValues(filter.not);
    }

    return result;
  }

  /** Builds a sort for use with Sequelize from a dxSort
   * @param {Object<Array>} dxExpression entity ID's to check (optional)
   * @returns {Object} sequelize sort expression
   */
  public buildSortOrder(dxExpression: any): any {
    return _.map(dxExpression, (sortItem) => {
      if (sortItem.desc) {
        return [sortItem.selector, 'DESC'];
      }
      return [sortItem.selector, 'ASC'];
    });
  }

  private mapFilterValues(filter) {
    return _.mapValues(filter, (operators) => {
      const result = { [Op.and]: [] };
      if (operators.and) {
        result[Op.and].push({ [Op.and]: operators.and });
      }
      if (operators.or) {
        result[Op.and].push({ [Op.or]: operators.or });
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
  private Parse(
    filters,
    dxExpression,
    logicalOperator = 'and',
    negated = false
  ) {
    const field = dxExpression[0];
    let operator = dxExpression[1];
    let value = dxExpression[2];

    if (field === '!') {
      return this.negatedDxParse(
        filters,
        dxExpression,
        logicalOperator,
        negated
      );
    }

    if (['and', 'or'].includes(operator)) {
      return this._chainOperator(filters, dxExpression, operator, negated);
    }

    const DIRECT_OPERATOR_MAPPING = {
      '=': Op.eq,
      '<>': Op.ne,
      '<': Op.lt,
      '<=': Op.lte,
      '>': Op.gt,
      '>=': Op.gte,
    };

    switch (operator) {
      case 'contains':
        operator = Op.iLike;
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
  private _chainOperator(
    filters,
    expression,
    logicalOperator = 'and',
    negated = false
  ) {
    const firstFilter = this.Parse(
      filters,
      expression[0],
      logicalOperator,
      negated
    );
    if (expression.length > 3) {
      return this.Parse(
        firstFilter,
        expression.slice(2),
        logicalOperator,
        negated
      );
    }
    return this.Parse(firstFilter, expression[2], logicalOperator, negated);
  }

  /** Parses a dxExpression with a negated element into a sequelize filter
   * @param {Object} filters base sequelize filter
   * @param {Object<Array>} dxExpression to transform
   * @param {String} logicalOperator to apply to the chain
   * @returns {Object} sequelize where expression
   */
  private negatedDxParse(
    filters,
    expression,
    logicalOperator = 'and',
    negated = false
  ) {
    const negatedFilters = this.Parse(
      filters,
      expression[1],
      logicalOperator,
      !negated
    );
    if (expression.length > 2) {
      const combinedFilters = this.Parse(
        negatedFilters,
        expression.slice(2),
        logicalOperator,
        negated
      );
      return combinedFilters;
    }
    return negatedFilters;
  }
}
