"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResult = void 0;
const swagger_1 = require("@nestjs/swagger");
class ApiResult {
    constructor(data = undefined, message = undefined, success = false) {
        this.message = message;
        this.data = data;
        this.success = success;
    }
    static Failed(message) {
        return new ApiResult(undefined, message, false);
    }
    static Success(data, message = undefined) {
        return new ApiResult(data, message, true);
    }
}
exports.ApiResult = ApiResult;
__decorate([
    (0, swagger_1.ApiProperty)()
], ApiResult.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)()
], ApiResult.prototype, "message", void 0);
