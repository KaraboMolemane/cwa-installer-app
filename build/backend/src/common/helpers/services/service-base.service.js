"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceBase = void 0;
const common_1 = require("@nestjs/common");
const dx_helper_1 = require("../devextreme/dx-helper");
const deleted_dto_1 = require("./models/deleted.dto");
const api_result_dto_1 = require("./models/api-result.dto");
const paged_result_dto_1 = require("./models/paged-result.dto");
class ServiceBase {
    constructor(model, sequelize) {
        this.sequelize = sequelize;
        this.dxHelper = new dx_helper_1.DxHelper();
        this.logger = new common_1.Logger(ServiceBase.name);
        this.repository = this.sequelize.getRepository(model);
    }
    findAndCountAll(filter, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const dxOptions = this.dxHelper.buildSequelizeOptions(filter);
            // findAndCountAll returns the incorrect count when including linked tables
            // Work around is to add distinct:true
            // https://github.com/sequelize/sequelize/issues/10557
            const fieldsAttributes = (options === null || options === void 0 ? void 0 : options.attributes) || (filter === null || filter === void 0 ? void 0 : filter.fields) || undefined;
            const result = yield this.repository.findAndCountAll(Object.assign(Object.assign(Object.assign({}, options), { attributes: fieldsAttributes, distinct: true }), dxOptions));
            return api_result_dto_1.ApiResult.Success(new paged_result_dto_1.PagedResultDto(result.rows, result.count));
        });
    }
    findAll(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.repository.findAndCountAll(options);
            return api_result_dto_1.ApiResult.Success(new paged_result_dto_1.PagedResultDto(result.rows, result.count));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.repository.findByPk(id);
            return api_result_dto_1.ApiResult.Success(result);
        });
    }
    upsert(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield this.sequelize.transaction();
            try {
                if (!dto) {
                    return api_result_dto_1.ApiResult.Failed('Can not update null or undefined.');
                }
                const result = yield this.repository.upsert(Object.assign({}, dto), { transaction: transaction });
                const updatedRecord = yield this.repository.findByPk(result[0].id, {
                    transaction: transaction,
                });
                yield transaction.commit();
                return api_result_dto_1.ApiResult.Success(updatedRecord);
            }
            catch (e) {
                yield transaction.rollback();
                this.logger.error('Failed to create or update', e.stack, e.context, e.message);
                return api_result_dto_1.ApiResult.Failed('Failed to create or update');
            }
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield this.sequelize.transaction();
            try {
                if (!dto) {
                    return api_result_dto_1.ApiResult.Failed('Can not update null or undefined.');
                }
                const result = yield this.repository.upsert(Object.assign({}, dto), { transaction: transaction });
                const updatedRecord = yield this.repository.findByPk(result[0].id, {
                    transaction: transaction,
                });
                yield transaction.commit();
                return api_result_dto_1.ApiResult.Success(updatedRecord);
            }
            catch (e) {
                yield transaction.rollback();
                this.logger.error('Failed to create or update', e.stack, e.context, e.message);
                return api_result_dto_1.ApiResult.Failed('Failed to create or update');
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield this.sequelize.transaction();
            try {
                const deleted = yield this.repository.destroy({
                    where: {
                        id: id,
                    },
                    transaction: transaction,
                });
                yield transaction.commit();
                return api_result_dto_1.ApiResult.Success(new deleted_dto_1.DeletedDto({ deleted: deleted }), 'Deleted item');
            }
            catch (e) {
                yield transaction.rollback();
                this.logger.error('Failed to delete records', e.stack, e.context, e.message);
                return api_result_dto_1.ApiResult.Failed('Failed to delete records');
            }
        });
    }
}
exports.ServiceBase = ServiceBase;
