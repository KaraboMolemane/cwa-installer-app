import { Inject, Injectable, Scope } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { BundleLicencesModel } from '../../models/bundle-licences.model';
import { BundleModel } from '../../models/bundle.model';
import { LicenceModel } from '../../models/licence.model';
import { OrganisationBundleModel } from '../../models/organisation-bundle.model';
import { ProductModel } from '../../models/product.model';
import { VersionModel } from '../../models/version.model';
import { ApiResult } from '../../common/helpers/services/models/api-result.dto';
import { PagedResultDto } from '../../common/helpers/services/models/paged-result.dto';
import { ServiceBase } from '../../common/helpers/services/service-base.service';
import { Op } from 'sequelize';

@Injectable({ scope: Scope.REQUEST })
export class BundlesService extends ServiceBase<BundleModel> {
  public readonly organisationBundlesRepository =
    this.sequelize.getRepository<OrganisationBundleModel>(
      OrganisationBundleModel
    );
  public readonly productsRepository =
    this.sequelize.getRepository<ProductModel>(ProductModel);

  public readonly bundleModelRepository =
    this.sequelize.getRepository<BundleModel>(BundleModel);

  public readonly versionModelRepository =
    this.sequelize.getRepository<VersionModel>(VersionModel);

  public readonly licenceModelRepository =
    this.sequelize.getRepository<LicenceModel>(LicenceModel);

  // public readonly requiredProductModelRepository =
  //   this.sequelize.getRepository<RequiredProductsModel>(RequiredProductsModel);
  constructor(
    @Inject('SEQUELIZE')
    sequelize: Sequelize
  ) {
    super(BundleModel, sequelize);
  }

  public async findAssociatedProductsByBundle(): Promise<
    ApiResult<PagedResultDto<BundleModel>>
  > {
    const result = await this.bundleModelRepository.findAndCountAll({
      distinct: true,
    });

    return ApiResult.Success(new PagedResultDto(result.rows, result.count));
  }
}
