"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisationBundleModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const organisation_model_1 = require("./organisation.model");
const classes_1 = require("@automapper/classes");
const bundle_model_1 = require("./bundle.model");
const licence_model_1 = require("./licence.model");
let OrganisationBundleModel = class OrganisationBundleModel extends sequelize_typescript_1.Model {
};
exports.OrganisationBundleModel = OrganisationBundleModel;
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, primaryKey: true, type: sequelize_typescript_1.DataType.UUID }),
    (0, sequelize_typescript_1.ForeignKey)(() => organisation_model_1.OrganisationModel)
], OrganisationBundleModel.prototype, "sfAccountId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, primaryKey: true, type: sequelize_typescript_1.DataType.UUID }),
    (0, sequelize_typescript_1.ForeignKey)(() => bundle_model_1.BundleModel),
    (0, sequelize_typescript_1.ForeignKey)(() => licence_model_1.LicenceModel)
], OrganisationBundleModel.prototype, "sfProduct2Id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: true })
], OrganisationBundleModel.prototype, "sfEntryId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: true })
], OrganisationBundleModel.prototype, "sfProductCode", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt
], OrganisationBundleModel.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt
], OrganisationBundleModel.prototype, "updatedAt", void 0);
exports.OrganisationBundleModel = OrganisationBundleModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        tableName: 'OrganisationBundles',
        indexes: [{ fields: ['sfAccountId', 'sfProduct2Id'], unique: true }],
    })
], OrganisationBundleModel);
