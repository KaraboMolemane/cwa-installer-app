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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoMapper = void 0;
const nestjs_1 = require("@automapper/nestjs");
const core_1 = require("@automapper/core");
const common_1 = require("@nestjs/common");
const bundle_model_1 = require("../models/bundle.model");
const licence_model_1 = require("../models/licence.model");
const organisation_model_1 = require("../models/organisation.model");
const organisation_product_type_model_1 = require("../models/organisation-product-type.model");
const product_model_1 = require("../models/product.model");
const version_model_1 = require("../models/version.model");
const product_dto_1 = require("../dtos/product.dto");
const organisation_dto_1 = require("../dtos/organisation.dto");
const licence_dto_1 = require("../dtos/licence.dto");
const version_dto_1 = require("../dtos/version.dto");
const organisation_product_type_dto_1 = require("../dtos/organisation-product-type.dto");
const bundle_dto_1 = require("../dtos/bundle.dto");
const required_product_dto_1 = require("../dtos/required-product.dto");
let DtoMapper = class DtoMapper extends nestjs_1.AutomapperProfile {
    constructor(mapper) {
        super(mapper);
    }
    get profile() {
        return (mapper) => {
            (0, core_1.createMap)(mapper, licence_model_1.LicenceModel, licence_dto_1.LicenceDto, (0, core_1.forMember)((destination) => destination.organisations, (0, core_1.mapFrom)((s) => {
                if (s.organisations) {
                    return mapper.mapArray(s.organisations, organisation_model_1.OrganisationModel, organisation_dto_1.OrganisationDto);
                }
                return undefined;
            })), (0, core_1.forMember)((destination) => destination.bundles, (0, core_1.mapFrom)((s) => {
                if (s.bundles) {
                    return mapper.mapArray(s.bundles, bundle_model_1.BundleModel, bundle_dto_1.BundleDto);
                }
                return undefined;
            })), (0, core_1.forMember)((destination) => destination.products, (0, core_1.mapFrom)((s) => {
                if (s.products) {
                    return mapper.mapArray(s.products, product_model_1.ProductModel, product_dto_1.ProductDto);
                }
                return undefined;
            })));
            (0, core_1.createMap)(mapper, version_model_1.VersionModel, version_dto_1.VersionDto, (0, core_1.forMember)((destination) => destination, (0, core_1.mapFrom)((source) => source)));
            (0, core_1.createMap)(mapper, product_model_1.ProductModel, product_dto_1.ProductDto, (0, core_1.forMember)((destination) => destination.licences, (0, core_1.mapFrom)((s) => {
                if (s.licences) {
                    return mapper.mapArray(s.licences, licence_model_1.LicenceModel, licence_dto_1.LicenceDto);
                }
                return undefined;
            })), (0, core_1.forMember)((destination) => destination.versions, (0, core_1.mapFrom)((source) => source.versions)), (0, core_1.forMember)((destination) => destination.requiredProducts, (0, core_1.mapFrom)((source) => source.requiredProducts)));
            (0, core_1.createMap)(mapper, bundle_model_1.BundleModel, bundle_dto_1.BundleDto, (0, core_1.forMember)((destination) => destination.organisations, (0, core_1.mapFrom)((s) => {
                if (s.organisations) {
                    return mapper.mapArray(s.organisations, organisation_model_1.OrganisationModel, organisation_dto_1.OrganisationDto);
                }
                return undefined;
            })), (0, core_1.forMember)((destination) => destination.licences, (0, core_1.mapFrom)((s) => {
                if (s.licences) {
                    return mapper.mapArray(s.licences, licence_model_1.LicenceModel, licence_dto_1.LicenceDto);
                }
                return undefined;
            })));
            (0, core_1.createMap)(mapper, organisation_model_1.OrganisationModel, organisation_dto_1.OrganisationDto, (0, core_1.forMember)((destination) => destination.bundles, (0, core_1.mapFrom)((s) => {
                if (s.bundles) {
                    return mapper.mapArray(s.bundles, bundle_model_1.BundleModel, bundle_dto_1.BundleDto);
                }
                return undefined;
            })), (0, core_1.forMember)((destination) => destination.licences, (0, core_1.mapFrom)((s) => {
                if (s.licences) {
                    return mapper.mapArray(s.licences, licence_model_1.LicenceModel, licence_dto_1.LicenceDto);
                }
                return undefined;
            })), (0, core_1.forMember)((destination) => destination.organisationProductType, (0, core_1.mapFrom)((orgProductType) => {
                if (orgProductType.organisationProductType) {
                    return mapper.mapArray(orgProductType.organisationProductType, organisation_product_type_model_1.OrganisationProductTypeModel, organisation_product_type_dto_1.OrganisationProductTypeDto);
                }
                return undefined;
            })));
            (0, core_1.createMap)(mapper, organisation_product_type_model_1.OrganisationProductTypeModel, organisation_product_type_dto_1.OrganisationProductTypeDto);
            (0, core_1.createMap)(mapper, organisation_product_type_dto_1.OrganisationProductTypeDto, organisation_product_type_model_1.OrganisationProductTypeModel);
            (0, core_1.createMap)(mapper, product_dto_1.ProductDto, product_model_1.ProductModel);
            (0, core_1.createMap)(mapper, required_product_dto_1.RequiredProductDto, product_model_1.ProductModel);
            (0, core_1.createMap)(mapper, product_model_1.ProductModel, required_product_dto_1.RequiredProductDto);
            (0, core_1.createMap)(mapper, organisation_model_1.OrganisationModel, organisation_dto_1.OrganisationDto);
            (0, core_1.createMap)(mapper, organisation_dto_1.OrganisationDto, organisation_model_1.OrganisationModel);
            (0, core_1.createMap)(mapper, version_model_1.VersionModel, version_dto_1.VersionDto);
            (0, core_1.createMap)(mapper, version_dto_1.VersionDto, version_model_1.VersionModel);
            (0, core_1.createMap)(mapper, bundle_dto_1.BundleDto, bundle_model_1.BundleModel);
        };
    }
};
exports.DtoMapper = DtoMapper;
exports.DtoMapper = DtoMapper = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_1.InjectMapper)())
], DtoMapper);
