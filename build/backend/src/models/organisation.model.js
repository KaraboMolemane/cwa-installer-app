"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisationModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const classes_1 = require("@automapper/classes");
const organisation_bundle_model_1 = require("./organisation-bundle.model");
const bundle_model_1 = require("./bundle.model");
const licence_model_1 = require("./licence.model");
const organisation_product_type_model_1 = require("./organisation-product-type.model");
let OrganisationModel = class OrganisationModel extends sequelize_typescript_1.Model {
};
exports.OrganisationModel = OrganisationModel;
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        unique: true,
        primaryKey: true,
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => organisation_product_type_model_1.OrganisationProductTypeModel)
], OrganisationModel.prototype, "sfAccountId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: true })
], OrganisationModel.prototype, "name", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: true })
], OrganisationModel.prototype, "downloadCode", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    sequelize_typescript_1.CreatedAt
], OrganisationModel.prototype, "createdAt", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    sequelize_typescript_1.UpdatedAt
], OrganisationModel.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => bundle_model_1.BundleModel, {
        through: () => organisation_bundle_model_1.OrganisationBundleModel,
        foreignKey: 'sfAccountId',
        sourceKey: 'sfAccountId',
    })
], OrganisationModel.prototype, "bundles", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => licence_model_1.LicenceModel, {
        through: () => organisation_bundle_model_1.OrganisationBundleModel,
        foreignKey: 'sfAccountId',
        sourceKey: 'sfAccountId',
    })
], OrganisationModel.prototype, "licences", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => organisation_product_type_model_1.OrganisationProductTypeModel, {
        foreignKey: 'sfAccountId',
        sourceKey: 'sfAccountId',
        foreignKeyConstraint: true,
    })
], OrganisationModel.prototype, "organisationProductType", void 0);
exports.OrganisationModel = OrganisationModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        tableName: 'Organisations',
    })
], OrganisationModel);
