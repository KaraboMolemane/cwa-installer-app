"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenceProductsModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_model_1 = require("./product.model");
const classes_1 = require("@automapper/classes");
const licence_model_1 = require("./licence.model");
let LicenceProductsModel = class LicenceProductsModel extends sequelize_typescript_1.Model {
};
exports.LicenceProductsModel = LicenceProductsModel;
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: false, primaryKey: true, type: sequelize_typescript_1.DataType.UUID }),
    (0, sequelize_typescript_1.ForeignKey)(() => licence_model_1.LicenceModel)
], LicenceProductsModel.prototype, "sfLicenceId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: false, primaryKey: true, type: sequelize_typescript_1.DataType.UUID }),
    (0, sequelize_typescript_1.ForeignKey)(() => product_model_1.ProductModel)
], LicenceProductsModel.prototype, "productId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    sequelize_typescript_1.CreatedAt
], LicenceProductsModel.prototype, "createdAt", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    sequelize_typescript_1.UpdatedAt
], LicenceProductsModel.prototype, "updatedAt", void 0);
exports.LicenceProductsModel = LicenceProductsModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        tableName: 'LicenceProducts',
        indexes: [{ fields: ['sfLicenceId', 'productId'], unique: true }],
    })
], LicenceProductsModel);
