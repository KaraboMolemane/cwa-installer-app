"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const classes_1 = require("@automapper/classes");
const product_model_1 = require("./product.model");
let VersionModel = class VersionModel extends sequelize_typescript_1.Model {
};
exports.VersionModel = VersionModel;
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_1.Sequelize.literal('gen_random_uuid()'),
    })
], VersionModel.prototype, "versionId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    (0, sequelize_typescript_1.ForeignKey)(() => product_model_1.ProductModel)
], VersionModel.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: true, type: sequelize_typescript_1.DataType.TEXT })
], VersionModel.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.BIGINT })
], VersionModel.prototype, "size", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: true })
], VersionModel.prototype, "hash", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: true })
], VersionModel.prototype, "md5", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt
], VersionModel.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt
], VersionModel.prototype, "updatedAt", void 0);
exports.VersionModel = VersionModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        tableName: 'Versions',
    })
], VersionModel);
