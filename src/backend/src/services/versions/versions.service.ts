import { Inject, Injectable, Scope } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { VersionModel } from '../../models/version.model';
import { ApiResult } from '../../common/helpers/services/models/api-result.dto';
import { PagedResultDto } from '../../common/helpers/services/models/paged-result.dto';
import { ServiceBase } from '../../common/helpers/services/service-base.service';
import { DxQueryDto } from '../../common/helpers/devextreme/dx-query.dto';

@Injectable({ scope: Scope.REQUEST })
export class VersionsService extends ServiceBase<VersionModel> {
  public readonly versionsRepository =
    this.sequelize.getRepository<VersionModel>(VersionModel);

  constructor(
    @Inject('SEQUELIZE')
    sequelize: Sequelize
  ) {
    super(VersionModel, sequelize);
  }

  public async findVersions(
    query: DxQueryDto<VersionModel>
  ): Promise<ApiResult<PagedResultDto<VersionModel>>> {
    const options = this.dxHelper.buildSequelizeOptions(query);
    const result = await this.versionsRepository.findAndCountAll({
      ...options,
    });

    return ApiResult.Success(new PagedResultDto(result.rows, result.count));
  }
}
