"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.LicencesService = void 0;
const common_1 = require("@nestjs/common");
const api_result_dto_1 = require("../../common/helpers/services/models/api-result.dto");
const paged_result_dto_1 = require("../../common/helpers/services/models/paged-result.dto");
const service_base_service_1 = require("../../common/helpers/services/service-base.service");
const licence_model_1 = require("../../models/licence.model");
const licence_products_model_1 = require("../../models/licence-products.model");
const product_model_1 = require("../../models/product.model");
let LicencesService = class LicencesService extends service_base_service_1.ServiceBase {
    constructor(sequelize) {
        super(licence_model_1.LicenceModel, sequelize);
        this.licenceModelRepository = this.sequelize.getRepository(licence_model_1.LicenceModel);
        this.productsRepository = this.sequelize.getRepository(product_model_1.ProductModel);
        this.licenceProductModelRepository = this.sequelize.getRepository(licence_products_model_1.LicenceProductsModel);
    }
    getLicences(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.dxHelper.buildSequelizeOptions(query);
            const result = yield this.licenceModelRepository.findAndCountAll(Object.assign(Object.assign({}, options), { include: {
                    model: this.productsRepository,
                    as: 'products',
                    attributes: ['productId', 'name', 'type'],
                }, distinct: true }));
            return api_result_dto_1.ApiResult.Success(new paged_result_dto_1.PagedResultDto(result.rows, result.count));
        });
    }
    getLicence(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.licenceModelRepository.findByPk(id, {
                include: {
                    model: this.productsRepository,
                    as: 'products',
                    attributes: ['productId', 'name', 'type'],
                },
            });
            return api_result_dto_1.ApiResult.Success(result);
        });
    }
    updateLinkedProducts(licenceDto, updatedRecord, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const product of updatedRecord.products) {
                const markedForDeletion = !licenceDto.products.some((x) => x.productId == product.productId);
                if (markedForDeletion) {
                    yield product.LicenceProductsModel.destroy({
                        transaction: transaction,
                    });
                }
            }
            for (const upsert of licenceDto.products) {
                const existingProduct = yield this.licenceProductModelRepository.findOne({
                    where: {
                        sfLicenceId: updatedRecord.sfLicenceId,
                        productId: upsert.productId,
                    },
                    transaction: transaction,
                });
                if (!existingProduct) {
                    yield this.licenceProductModelRepository.upsert({
                        sfLicenceId: updatedRecord.sfLicenceId,
                        productId: upsert.productId,
                    }, { transaction: transaction });
                }
            }
        });
    }
    upsertLicence(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield this.sequelize.transaction();
            try {
                if (!dto) {
                    return api_result_dto_1.ApiResult.Failed('Can not update null or undefined.');
                }
                // Ability to edit licence has been deactivated as the data is coming through Flow Gear
                // const result = await this.licenceModelRepository.upsert(
                //  {...dto},
                //   { transaction: transaction }
                // );
                // const updatedRecord = await this.licenceModelRepository.findByPk(results[0].sfLicenceId, {
                //   transaction: transaction,
                // });
                const updatedRecord = yield this.licenceModelRepository.findByPk(dto.sfLicenceId, {
                    include: [
                        {
                            model: this.productsRepository,
                            as: 'products',
                        },
                    ],
                    transaction: transaction,
                });
                yield this.updateLinkedProducts(dto, updatedRecord, transaction);
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
};
exports.LicencesService = LicencesService;
exports.LicencesService = LicencesService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)('SEQUELIZE'))
], LicencesService);
