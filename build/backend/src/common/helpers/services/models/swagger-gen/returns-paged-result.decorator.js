"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsPagedResult = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const paged_result_dto_1 = require("../paged-result.dto");
const ReturnsPagedResult = (dataDto) => (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(() => paged_result_dto_1.PagedResultDto, dataDto), (0, swagger_1.ApiOkResponse)({
    schema: {
        allOf: [
            { $ref: (0, swagger_1.getSchemaPath)(paged_result_dto_1.PagedResultDto) },
            {
                properties: {
                    rows: {
                        type: 'array',
                        items: { $ref: (0, swagger_1.getSchemaPath)(dataDto) },
                    },
                },
            },
        ],
    },
}));
exports.ReturnsPagedResult = ReturnsPagedResult;
