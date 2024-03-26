import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { ApiResult } from '../api-result.dto';

export const ReturnsApiResult = <DataDto extends Type<unknown>>(
  dataDto: DataDto
) =>
  applyDecorators(
    ApiExtraModels(() => ApiResult, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [{ $ref: getSchemaPath(ApiResult) }],
      },
    })
  );
