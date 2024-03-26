"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDto = void 0;
const class_validator_1 = require("class-validator");
const classes_1 = require("@automapper/classes");
const licence_dto_1 = require("./licence.dto");
const version_dto_1 = require("./version.dto");
const required_product_dto_1 = require("./required-product.dto");
class ProductDto {
}
exports.ProductDto = ProductDto;
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], ProductDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], ProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], ProductDto.prototype, "version", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], ProductDto.prototype, "priority", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], ProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], ProductDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], ProductDto.prototype, "notification", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)({ type: () => licence_dto_1.LicenceDto })
], ProductDto.prototype, "licences", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)({ type: () => version_dto_1.VersionDto })
], ProductDto.prototype, "versions", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)({ type: () => required_product_dto_1.RequiredProductDto })
], ProductDto.prototype, "requiredProducts", void 0);
__decorate([
    (0, classes_1.AutoMap)()
], ProductDto.prototype, "createdAt", void 0);
__decorate([
    (0, classes_1.AutoMap)()
], ProductDto.prototype, "updatedAt", void 0);
