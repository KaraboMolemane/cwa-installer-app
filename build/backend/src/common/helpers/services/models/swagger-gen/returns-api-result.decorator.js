"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsApiResult = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_result_dto_1 = require("../api-result.dto");
const ReturnsApiResult = (dataDto) => (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(() => api_result_dto_1.ApiResult, dataDto), (0, swagger_1.ApiOkResponse)({
    schema: {
        allOf: [{ $ref: (0, swagger_1.getSchemaPath)(api_result_dto_1.ApiResult) }],
    },
}));
exports.ReturnsApiResult = ReturnsApiResult;
