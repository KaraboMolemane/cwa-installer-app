import { Inject, Injectable, Scope } from '@nestjs/common';
import { ApiResult } from '../../common/helpers/services/models/api-result.dto';
import { PagedResultDto } from '../../common/helpers/services/models/paged-result.dto';
import { ServiceBase } from '../../common/helpers/services/service-base.service';
import { BundleLicencesModel } from '../../models/bundle-licences.model';
import { BundleModel } from '../../models/bundle.model';
import { LicenceModel } from '../../models/licence.model';
import { LicenceProductsModel } from '../../models/licence-products.model';
import { OrganisationBundleModel } from '../../models/organisation-bundle.model';
import { OrganisationModel } from '../../models/organisation.model';
import { OrganisationProductTypeModel } from '../../models/organisation-product-type.model';
import { ProductModel } from '../../models/product.model';
import { RequiredProductsModel } from '../../models/required-products.model';
import { VersionModel } from '../../models/version.model';

import { Sequelize } from 'sequelize-typescript';
import { Op, UUIDV4, Transaction } from 'sequelize';
import { ProductDto } from '../../dtos/product.dto';

@Injectable({ scope: Scope.REQUEST })
export class ProductsService extends ServiceBase<ProductModel> {
  public readonly organisationBundlesRepository =
    this.sequelize.getRepository<OrganisationBundleModel>(
      OrganisationBundleModel
    );
  public readonly productsRepository =
    this.sequelize.getRepository<ProductModel>(ProductModel);

  public readonly requiredProductsRepository =
    this.sequelize.getRepository<RequiredProductsModel>(RequiredProductsModel);

  public readonly versionModelRepository =
    this.sequelize.getRepository<VersionModel>(VersionModel);

  public readonly licenceModelRepository =
    this.sequelize.getRepository<LicenceModel>(LicenceModel);

  public readonly licenceProductRepository =
    this.sequelize.getRepository<LicenceProductsModel>(LicenceProductsModel);

  public readonly bundleModelRepository =
    this.sequelize.getRepository<BundleModel>(BundleModel);

  public readonly bundleLicenceRepository =
    this.sequelize.getRepository<BundleLicencesModel>(BundleLicencesModel);

  public readonly organisationRepository =
    this.sequelize.getRepository<OrganisationModel>(OrganisationModel);

  public readonly organisationProductTypeRepository =
    this.sequelize.getRepository<OrganisationProductTypeModel>(
      OrganisationProductTypeModel
    );

  constructor(
    @Inject('SEQUELIZE')
    sequelize: Sequelize
  ) {
    super(ProductModel, sequelize);
  }


  public async findProduct(id: string): Promise<ApiResult<ProductModel>> {
    const result = await this.productsRepository.findByPk(id, {
      include: [
        {
          model: this.licenceModelRepository,
          as: 'licences',
        },
        {
          model: this.versionModelRepository,
          as: 'versions',
        },
        {
          model: this.requiredProductsRepository,
          as: 'requiredProducts',
          attributes: ['requiredProductId'],
        },
      ],
    });

    return ApiResult.Success(result);
  }

  public async findAssociatedProductsByOrganisation(
    accountId: string
  ): Promise<ApiResult<OrganisationModel>> {
    const result = await this.organisationRepository.findByPk(accountId, {
      include: [
        {
          model: this.organisationProductTypeRepository,
          as: 'organisationProductType',
        },
        {
          model: this.bundleModelRepository,
          as: 'bundles',
          include: [
            {
              model: this.licenceModelRepository,
              as: 'licences',
              include: [
                {
                  model: this.productsRepository,
                  as: 'products',
                  include: [
                    {
                      model: this.versionModelRepository,
                      as: 'versions',
                    },
                    {
                      model: this.requiredProductsRepository,
                      as: 'requiredProducts',
                      attributes: ['requiredProductId'],
                    },
                  ],
                },
              ],
            },
          ],
          order: [['type', 'ASC']],
        },
        {
          model: this.licenceModelRepository,
          as: 'licences',
          include: [
            {
              model: this.productsRepository,
              as: 'products',
              include: [
                {
                  model: this.versionModelRepository,
                  as: 'versions',
                },
                {
                  model: this.requiredProductsRepository,
                  as: 'requiredProducts',
                  attributes: ['requiredProductId'],
                },
              ],
            },
          ],
          order: [['type', 'ASC']],
        },
      ],
    });

    return ApiResult.Success(result);
  }

  public async findLicenceProductsByOrgId(
    accountId: string
  ): Promise<ApiResult<ProductModel[]>> {
    const result = await this.productsRepository.findAll({
      include: [
        {
          model: this.licenceModelRepository,
          as: 'licences',
          required: true,
          include: [
            {
              model: this.organisationRepository,
              as: 'organisations',
              where: {
                sfAccountId: accountId,
              },
            },
          ],
          order: [['type', 'ASC']],
        },
        {
          model: this.requiredProductsRepository,
          as: 'requiredProducts',
          attributes: ['requiredProductId'],
        },
      ],
    });

    return ApiResult.Success(result);
  }

  public async findBundleProductsByOrgId(
    accountId: string
  ): Promise<ApiResult<ProductModel[]>> {
    const result = await this.productsRepository.findAll({
      include: [
        {
          model: this.licenceModelRepository,
          as: 'licences',
          required: true,
          include: [
            {
              model: this.bundleModelRepository,
              as: 'bundles',
              required: true,
              include: [
                {
                  model: this.organisationRepository,
                  as: 'organisations',
                  where: {
                    sfAccountId: accountId,
                  },
                },
              ],
            },
          ],
        },
        {
          model: this.requiredProductsRepository,
          as: 'requiredProducts',
          attributes: ['requiredProductId'],
        },
      ],
      order: [['type', 'ASC']],
    });

    return ApiResult.Success(result);
  }


}
