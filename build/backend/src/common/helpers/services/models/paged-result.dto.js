"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagedResultDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class PagedResultDto {
    constructor(data = [], totalCount = 0) {
        this.data = data;
        this.totalCount = totalCount;
    }
}
exports.PagedResultDto = PagedResultDto;
__decorate([
    (0, swagger_1.ApiProperty)()
], PagedResultDto.prototype, "totalCount", void 0);
