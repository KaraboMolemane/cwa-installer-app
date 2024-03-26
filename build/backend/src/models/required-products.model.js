"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredProductsModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const classes_1 = require("@automapper/classes");
const product_model_1 = require("./product.model");
let RequiredProductsModel = class RequiredProductsModel extends sequelize_typescript_1.Model {
};
exports.RequiredProductsModel = RequiredProductsModel;
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: false, primaryKey: true, type: sequelize_typescript_1.DataType.UUID }),
    (0, sequelize_typescript_1.ForeignKey)(() => product_model_1.ProductModel)
], RequiredProductsModel.prototype, "productId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: false, primaryKey: true, type: sequelize_typescript_1.DataType.UUID }),
    (0, sequelize_typescript_1.ForeignKey)(() => product_model_1.ProductModel)
], RequiredProductsModel.prototype, "requiredProductId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    sequelize_typescript_1.CreatedAt
], RequiredProductsModel.prototype, "createdAt", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    sequelize_typescript_1.UpdatedAt
], RequiredProductsModel.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => product_model_1.ProductModel, {
        as: 'parentProduct',
        foreignKey: 'productId',
        sourceKey: 'productId',
    }),
    (0, sequelize_typescript_1.HasMany)(() => product_model_1.ProductModel, {
        as: 'requiredProduct',
        foreignKey: 'productId',
        sourceKey: 'requiredProductId',
    })
], RequiredProductsModel.prototype, "requiredProducts", void 0);
exports.RequiredProductsModel = RequiredProductsModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        tableName: 'RequiredProducts',
        indexes: [{ fields: ['productId', 'requiredProductId'], unique: true }],
    })
], RequiredProductsModel);
