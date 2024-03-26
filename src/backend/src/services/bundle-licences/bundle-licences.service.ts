import { Inject, Injectable, Scope } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { ApiResult } from '../../common/helpers/services/models/api-result.dto';
import { PagedResultDto } from '../../common/helpers/services/models/paged-result.dto';
import { ServiceBase } from '../../common/helpers/services/service-base.service';
import { BundleLicencesModel } from '../../models/bundle-licences.model';
import { DxQueryDto } from '../../common/helpers/devextreme/dx-query.dto';

@Injectable({ scope: Scope.REQUEST })
export class BundleLicencesService extends ServiceBase<BundleLicencesModel> {
  public readonly bundleLicenceModelRepository =
    this.sequelize.getRepository<BundleLicencesModel>(BundleLicencesModel);

  constructor(
    @Inject('SEQUELIZE')
    sequelize: Sequelize
  ) {
    super(BundleLicencesModel, sequelize);
  }

  public async getBundleLicences(
    query: DxQueryDto<BundleLicencesModel>
  ): Promise<ApiResult<PagedResultDto<BundleLicencesModel>>> {
    const options = this.dxHelper.buildSequelizeOptions(query);
    const result = await this.bundleLicenceModelRepository.findAndCountAll({
      ...options,
    });

    return ApiResult.Success(new PagedResultDto(result.rows, result.count));
  }
}
