"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleLicencesModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const classes_1 = require("@automapper/classes");
const bundle_model_1 = require("./bundle.model");
const licence_model_1 = require("./licence.model");
let BundleLicencesModel = class BundleLicencesModel extends sequelize_typescript_1.Model {
};
exports.BundleLicencesModel = BundleLicencesModel;
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    (0, sequelize_typescript_1.ForeignKey)(() => bundle_model_1.BundleModel)
], BundleLicencesModel.prototype, "sfBundleId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    (0, sequelize_typescript_1.ForeignKey)(() => licence_model_1.LicenceModel)
], BundleLicencesModel.prototype, "sfLicenceId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: true })
], BundleLicencesModel.prototype, "sfProductCode", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt
], BundleLicencesModel.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt
], BundleLicencesModel.prototype, "updatedAt", void 0);
exports.BundleLicencesModel = BundleLicencesModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        tableName: 'BundleLicences',
        indexes: [{ fields: ['sfBundleId', 'sfLicenceId'], unique: true }],
    })
], BundleLicencesModel);
