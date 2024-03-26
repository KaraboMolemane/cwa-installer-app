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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const api_result_dto_1 = require("../../common/helpers/services/models/api-result.dto");
const service_base_service_1 = require("../../common/helpers/services/service-base.service");
const bundle_licences_model_1 = require("../../models/bundle-licences.model");
const bundle_model_1 = require("../../models/bundle.model");
const licence_model_1 = require("../../models/licence.model");
const licence_products_model_1 = require("../../models/licence-products.model");
const organisation_bundle_model_1 = require("../../models/organisation-bundle.model");
const organisation_model_1 = require("../../models/organisation.model");
const organisation_product_type_model_1 = require("../../models/organisation-product-type.model");
const product_model_1 = require("../../models/product.model");
const required_products_model_1 = require("../../models/required-products.model");
const version_model_1 = require("../../models/version.model");
let ProductsService = class ProductsService extends service_base_service_1.ServiceBase {
    constructor(sequelize) {
        super(product_model_1.ProductModel, sequelize);
        this.organisationBundlesRepository = this.sequelize.getRepository(organisation_bundle_model_1.OrganisationBundleModel);
        this.productsRepository = this.sequelize.getRepository(product_model_1.ProductModel);
        this.requiredProductsRepository = this.sequelize.getRepository(required_products_model_1.RequiredProductsModel);
        this.versionModelRepository = this.sequelize.getRepository(version_model_1.VersionModel);
        this.licenceModelRepository = this.sequelize.getRepository(licence_model_1.LicenceModel);
        this.licenceProductRepository = this.sequelize.getRepository(licence_products_model_1.LicenceProductsModel);
        this.bundleModelRepository = this.sequelize.getRepository(bundle_model_1.BundleModel);
        this.bundleLicenceRepository = this.sequelize.getRepository(bundle_licences_model_1.BundleLicencesModel);
        this.organisationRepository = this.sequelize.getRepository(organisation_model_1.OrganisationModel);
        this.organisationProductTypeRepository = this.sequelize.getRepository(organisation_product_type_model_1.OrganisationProductTypeModel);
    }
    findProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.productsRepository.findByPk(id, {
                include: [
                    {
                        model: this.licenceModelRepository,
                        as: 'licences',
                    },
                    {
                        model: this.versionModelRepository,
                        as: 'versions',
                    },
                    {
                        model: this.requiredProductsRepository,
                        as: 'requiredProducts',
                        attributes: ['requiredProductId'],
                    },
                ],
            });
            return api_result_dto_1.ApiResult.Success(result);
        });
    }
    findAssociatedProductsByOrganisation(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.organisationRepository.findByPk(accountId, {
                include: [
                    {
                        model: this.organisationProductTypeRepository,
                        as: 'organisationProductType',
                    },
                    {
                        model: this.bundleModelRepository,
                        as: 'bundles',
                        include: [
                            {
                                model: this.licenceModelRepository,
                                as: 'licences',
                                include: [
                                    {
                                        model: this.productsRepository,
                                        as: 'products',
                                        include: [
                                            {
                                                model: this.versionModelRepository,
                                                as: 'versions',
                                            },
                                            {
                                                model: this.requiredProductsRepository,
                                                as: 'requiredProducts',
                                                attributes: ['requiredProductId'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                        order: [['type', 'ASC']],
                    },
                    {
                        model: this.licenceModelRepository,
                        as: 'licences',
                        include: [
                            {
                                model: this.productsRepository,
                                as: 'products',
                                include: [
                                    {
                                        model: this.versionModelRepository,
                                        as: 'versions',
                                    },
                                    {
                                        model: this.requiredProductsRepository,
                                        as: 'requiredProducts',
                                        attributes: ['requiredProductId'],
                                    },
                                ],
                            },
                        ],
                        order: [['type', 'ASC']],
                    },
                ],
            });
            return api_result_dto_1.ApiResult.Success(result);
        });
    }
    findLicenceProductsByOrgId(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.productsRepository.findAll({
                include: [
                    {
                        model: this.licenceModelRepository,
                        as: 'licences',
                        required: true,
                        include: [
                            {
                                model: this.organisationRepository,
                                as: 'organisations',
                                where: {
                                    sfAccountId: accountId,
                                },
                            },
                        ],
                        order: [['type', 'ASC']],
                    },
                    {
                        model: this.requiredProductsRepository,
                        as: 'requiredProducts',
                        attributes: ['requiredProductId'],
                    },
                ],
            });
            return api_result_dto_1.ApiResult.Success(result);
        });
    }
    findBundleProductsByOrgId(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.productsRepository.findAll({
                include: [
                    {
                        model: this.licenceModelRepository,
                        as: 'licences',
                        required: true,
                        include: [
                            {
                                model: this.bundleModelRepository,
                                as: 'bundles',
                                required: true,
                                include: [
                                    {
                                        model: this.organisationRepository,
                                        as: 'organisations',
                                        where: {
                                            sfAccountId: accountId,
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        model: this.requiredProductsRepository,
                        as: 'requiredProducts',
                        attributes: ['requiredProductId'],
                    },
                ],
                order: [['type', 'ASC']],
            });
            return api_result_dto_1.ApiResult.Success(result);
        });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)('SEQUELIZE'))
], ProductsService);
