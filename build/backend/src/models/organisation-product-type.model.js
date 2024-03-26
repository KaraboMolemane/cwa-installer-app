"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisationProductTypeModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const organisation_model_1 = require("./organisation.model");
const classes_1 = require("@automapper/classes");
let OrganisationProductTypeModel = class OrganisationProductTypeModel extends sequelize_typescript_1.Model {
};
exports.OrganisationProductTypeModel = OrganisationProductTypeModel;
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, primaryKey: true })
    //   @ForeignKey(() => OrganisationModel)
], OrganisationProductTypeModel.prototype, "sfAccountId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: false, primaryKey: true })
], OrganisationProductTypeModel.prototype, "licenceType", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: true })
], OrganisationProductTypeModel.prototype, "status", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: true })
], OrganisationProductTypeModel.prototype, "provideSupport", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    sequelize_typescript_1.CreatedAt
], OrganisationProductTypeModel.prototype, "createdAt", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    sequelize_typescript_1.UpdatedAt
], OrganisationProductTypeModel.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => organisation_model_1.OrganisationModel, {
        foreignKeyConstraint: true,
        foreignKey: 'sfAccountId',
    })
], OrganisationProductTypeModel.prototype, "organisation", void 0);
exports.OrganisationProductTypeModel = OrganisationProductTypeModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        tableName: 'OrganisationProductType',
    })
], OrganisationProductTypeModel);
