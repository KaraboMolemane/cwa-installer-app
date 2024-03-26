"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenceModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const classes_1 = require("@automapper/classes");
const product_model_1 = require("./product.model");
const organisation_bundle_model_1 = require("./organisation-bundle.model");
const bundle_licences_model_1 = require("./bundle-licences.model");
const bundle_model_1 = require("./bundle.model");
const licence_products_model_1 = require("./licence-products.model");
const organisation_model_1 = require("./organisation.model");
let LicenceModel = class LicenceModel extends sequelize_typescript_1.Model {
};
exports.LicenceModel = LicenceModel;
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        unique: true,
        primaryKey: true,
    })
], LicenceModel.prototype, "sfLicenceId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: false })
], LicenceModel.prototype, "sfProductCode", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: false })
], LicenceModel.prototype, "tagName", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: false })
], LicenceModel.prototype, "licenceKey", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    sequelize_typescript_1.CreatedAt
], LicenceModel.prototype, "createdAt", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    sequelize_typescript_1.UpdatedAt
], LicenceModel.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => bundle_model_1.BundleModel, {
        through: () => bundle_licences_model_1.BundleLicencesModel,
        foreignKey: 'sfLicenceId',
        sourceKey: 'sfLicenceId',
    }),
    (0, classes_1.AutoMap)()
], LicenceModel.prototype, "bundles", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => organisation_model_1.OrganisationModel, {
        through: () => organisation_bundle_model_1.OrganisationBundleModel,
        foreignKey: 'sfProduct2Id',
        sourceKey: 'sfLicenceId',
    }),
    (0, classes_1.AutoMap)()
], LicenceModel.prototype, "organisations", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => product_model_1.ProductModel, {
        through: () => licence_products_model_1.LicenceProductsModel,
        foreignKey: 'sfLicenceId',
        sourceKey: 'sfLicenceId',
    }),
    (0, classes_1.AutoMap)()
], LicenceModel.prototype, "products", void 0);
exports.LicenceModel = LicenceModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        tableName: 'Licences',
    })
], LicenceModel);
