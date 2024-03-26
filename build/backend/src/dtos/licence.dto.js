"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenceDto = void 0;
const class_validator_1 = require("class-validator");
const classes_1 = require("@automapper/classes");
const product_dto_1 = require("./product.dto");
const organisation_dto_1 = require("./organisation.dto");
const bundle_dto_1 = require("./bundle.dto");
class LicenceDto {
}
exports.LicenceDto = LicenceDto;
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], LicenceDto.prototype, "sfLicenceId", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], LicenceDto.prototype, "sfProductCode", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], LicenceDto.prototype, "tagName", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], LicenceDto.prototype, "licenceKey", void 0);
__decorate([
    (0, classes_1.AutoMap)()
], LicenceDto.prototype, "createdAt", void 0);
__decorate([
    (0, classes_1.AutoMap)()
], LicenceDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)({ type: () => product_dto_1.ProductDto, depth: 1 })
], LicenceDto.prototype, "products", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)({ type: () => bundle_dto_1.BundleDto, depth: 1 })
], LicenceDto.prototype, "bundles", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)({ type: () => organisation_dto_1.OrganisationDto, depth: 1 })
], LicenceDto.prototype, "organisations", void 0);
