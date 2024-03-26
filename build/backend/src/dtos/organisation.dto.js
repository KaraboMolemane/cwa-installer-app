"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisationDto = void 0;
const class_validator_1 = require("class-validator");
const classes_1 = require("@automapper/classes");
class OrganisationDto {
}
exports.OrganisationDto = OrganisationDto;
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], OrganisationDto.prototype, "sfAccountId", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], OrganisationDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], OrganisationDto.prototype, "downloadCode", void 0);
__decorate([
    (0, classes_1.AutoMap)()
], OrganisationDto.prototype, "createdAt", void 0);
__decorate([
    (0, classes_1.AutoMap)()
], OrganisationDto.prototype, "updatedAt", void 0);
__decorate([
    (0, classes_1.AutoMap)()
], OrganisationDto.prototype, "bundles", void 0);
__decorate([
    (0, classes_1.AutoMap)()
], OrganisationDto.prototype, "licences", void 0);
__decorate([
    (0, classes_1.AutoMap)()
], OrganisationDto.prototype, "organisationProductType", void 0);
