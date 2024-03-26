import { Inject, Injectable, Scope } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { OrganisationBundleModel } from '../../models/organisation-bundle.model';
import { ApiResult } from '../../common/helpers/services/models/api-result.dto';
import { PagedResultDto } from '../../common/helpers/services/models/paged-result.dto';
import { ServiceBase } from '../../common/helpers/services/service-base.service';
import { DxQueryDto } from '../../common/helpers/devextreme/dx-query.dto';

@Injectable({ scope: Scope.REQUEST })
export class OrganisationBundlesService extends ServiceBase<OrganisationBundleModel> {
  public readonly organisationBundleModelRepository =
    this.sequelize.getRepository<OrganisationBundleModel>(
      OrganisationBundleModel
    );

  constructor(
    @Inject('SEQUELIZE')
    sequelize: Sequelize
  ) {
    super(OrganisationBundleModel, sequelize);
  }

  public async getOrganisationBundles(
    query: DxQueryDto<OrganisationBundleModel>
  ): Promise<ApiResult<PagedResultDto<OrganisationBundleModel>>> {
    const options = this.dxHelper.buildSequelizeOptions(query);
    const result = await this.organisationBundleModelRepository.findAndCountAll(
      {
        ...options,
      }
    );

    return ApiResult.Success(new PagedResultDto(result.rows, result.count));
  }
}
