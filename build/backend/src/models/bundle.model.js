"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const classes_1 = require("@automapper/classes");
const organisation_model_1 = require("./organisation.model");
const organisation_bundle_model_1 = require("./organisation-bundle.model");
const bundle_licences_model_1 = require("./bundle-licences.model");
const licence_model_1 = require("./licence.model");
let BundleModel = class BundleModel extends sequelize_typescript_1.Model {
};
exports.BundleModel = BundleModel;
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        unique: true,
        primaryKey: true,
    })
], BundleModel.prototype, "sfBundleId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: false })
], BundleModel.prototype, "sfProductCode", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: false })
], BundleModel.prototype, "name", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    sequelize_typescript_1.CreatedAt
], BundleModel.prototype, "createdAt", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    sequelize_typescript_1.UpdatedAt
], BundleModel.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => organisation_model_1.OrganisationModel, {
        through: () => organisation_bundle_model_1.OrganisationBundleModel,
        foreignKey: 'sfProduct2Id',
        sourceKey: 'sfBundleId',
    })
], BundleModel.prototype, "organisations", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => licence_model_1.LicenceModel, {
        through: () => bundle_licences_model_1.BundleLicencesModel,
        foreignKey: 'sfBundleId',
        sourceKey: 'sfBundleId',
    }),
    (0, classes_1.AutoMap)()
], BundleModel.prototype, "licences", void 0);
exports.BundleModel = BundleModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        tableName: 'Bundles',
    })
], BundleModel);
