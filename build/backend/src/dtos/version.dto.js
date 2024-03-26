"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionDto = void 0;
const classes_1 = require("@automapper/classes");
const class_validator_1 = require("class-validator");
class VersionDto {
}
exports.VersionDto = VersionDto;
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], VersionDto.prototype, "versionId", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], VersionDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], VersionDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], VersionDto.prototype, "size", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], VersionDto.prototype, "hash", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    (0, classes_1.AutoMap)()
], VersionDto.prototype, "md5", void 0);
__decorate([
    (0, classes_1.AutoMap)()
], VersionDto.prototype, "createdAt", void 0);
__decorate([
    (0, classes_1.AutoMap)()
], VersionDto.prototype, "updatedAt", void 0);
