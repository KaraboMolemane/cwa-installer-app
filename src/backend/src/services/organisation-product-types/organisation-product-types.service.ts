import { Inject, Injectable, Scope } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { OrganisationProductTypeModel } from '../../models/organisation-product-type.model';
import { ApiResult } from '../../common/helpers/services/models/api-result.dto';
import { PagedResultDto } from '../../common/helpers/services/models/paged-result.dto';
import { ServiceBase } from '../../common/helpers/services/service-base.service';
import { DxQueryDto } from '../../common/helpers/devextreme/dx-query.dto';

@Injectable({ scope: Scope.REQUEST })
export class OrganisationProductTypesService extends ServiceBase<OrganisationProductTypeModel> {
  public readonly organisationProductTypeModelRepository =
    this.sequelize.getRepository<OrganisationProductTypeModel>(
      OrganisationProductTypeModel
    );

  constructor(
    @Inject('SEQUELIZE')
    sequelize: Sequelize
  ) {
    super(OrganisationProductTypeModel, sequelize);
  }

  public async getOrganisationProductTypes(
    query: DxQueryDto<OrganisationProductTypeModel>
  ): Promise<ApiResult<PagedResultDto<OrganisationProductTypeModel>>> {
    const options = this.dxHelper.buildSequelizeOptions(query);
    const result =
      await this.organisationProductTypeModelRepository.findAndCountAll({
        ...options,
      });

    return ApiResult.Success(new PagedResultDto(result.rows, result.count));
  }

  public async getOrganisationProductType(
    id: string
  ): Promise<ApiResult<OrganisationProductTypeModel>> {
    const result = await this.organisationProductTypeModelRepository.findByPk(
      id
    );

    return ApiResult.Success(result);
  }
}
