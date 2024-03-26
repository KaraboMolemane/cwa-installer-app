"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const classes_1 = require("@automapper/classes");
const licence_products_model_1 = require("./licence-products.model");
const licence_model_1 = require("./licence.model");
const version_model_1 = require("./version.model");
const required_products_model_1 = require("./required-products.model");
let ProductModel = class ProductModel extends sequelize_typescript_1.Model {
};
exports.ProductModel = ProductModel;
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_1.Sequelize.literal('gen_random_uuid()'),
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => version_model_1.VersionModel)
], ProductModel.prototype, "productId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: false, unique: true })
], ProductModel.prototype, "name", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: true })
], ProductModel.prototype, "version", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.INTEGER })
], ProductModel.prototype, "priority", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: true, type: sequelize_typescript_1.DataType.TEXT })
], ProductModel.prototype, "description", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: true, type: sequelize_typescript_1.DataType.TEXT })
], ProductModel.prototype, "type", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: true })
], ProductModel.prototype, "notification", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    sequelize_typescript_1.CreatedAt
], ProductModel.prototype, "createdAt", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    sequelize_typescript_1.UpdatedAt
], ProductModel.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => licence_model_1.LicenceModel, {
        through: () => licence_products_model_1.LicenceProductsModel,
        foreignKey: 'productId',
        sourceKey: 'productId',
    })
], ProductModel.prototype, "licences", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.HasMany)(() => version_model_1.VersionModel, {
        foreignKey: 'productId',
        sourceKey: 'productId',
        foreignKeyConstraint: true,
    })
], ProductModel.prototype, "versions", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.HasMany)(() => required_products_model_1.RequiredProductsModel, {
        foreignKey: 'productId',
        sourceKey: 'productId',
        foreignKeyConstraint: true,
    })
], ProductModel.prototype, "requiredProducts", void 0);
exports.ProductModel = ProductModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        tableName: 'Products',
        indexes: [{ fields: ['name'], unique: true }],
    })
], ProductModel);
