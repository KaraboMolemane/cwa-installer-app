import { Inject, Injectable, Scope } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { ApiResult } from '../../common/helpers/services/models/api-result.dto';
import { PagedResultDto } from '../../common/helpers/services/models/paged-result.dto';
import { ServiceBase } from '../../common/helpers/services/service-base.service';
import { LicenceModel } from '../../models/licence.model';
import { LicenceProductsModel } from '../../models/licence-products.model';
import { ProductModel } from '../../models/product.model';

import { LicenceDto } from '../../dtos/licence.dto';
import { Transaction } from 'sequelize';
import { DxQueryDto } from '../../common/helpers/devextreme/dx-query.dto';

@Injectable({ scope: Scope.REQUEST })
export class LicencesService extends ServiceBase<LicenceModel> {
  public readonly licenceModelRepository =
    this.sequelize.getRepository<LicenceModel>(LicenceModel);

  public readonly productsRepository =
    this.sequelize.getRepository<ProductModel>(ProductModel);

  public readonly licenceProductModelRepository =
    this.sequelize.getRepository<LicenceProductsModel>(LicenceProductsModel);

  constructor(
    @Inject('SEQUELIZE')
    sequelize: Sequelize
  ) {
    super(LicenceModel, sequelize);
  }

  public async getLicences(
    query: DxQueryDto<LicenceModel>
  ): Promise<ApiResult<PagedResultDto<LicenceModel>>> {
    const options = this.dxHelper.buildSequelizeOptions(query);
    const result = await this.licenceModelRepository.findAndCountAll({
      ...options,
      include: {
        model: this.productsRepository,
        as: 'products',
        attributes: ['productId', 'name', 'type'],
      },
      distinct: true,
    });

    return ApiResult.Success(new PagedResultDto(result.rows, result.count));
  }

  public async getLicence(id: string): Promise<ApiResult<LicenceModel>> {
    const result = await this.licenceModelRepository.findByPk(id, {
      include: {
        model: this.productsRepository,
        as: 'products',
        attributes: ['productId', 'name', 'type'],
      },
    });

    return ApiResult.Success(result);
  }

  private async updateLinkedProducts(
    licenceDto: LicenceDto,
    updatedRecord: LicenceModel,
    transaction: Transaction
  ) {
    for (const product of updatedRecord.products) {
      const markedForDeletion = !licenceDto.products.some(
        (x) => x.productId == product.productId
      );
      if (markedForDeletion) {
        await product.LicenceProductsModel.destroy({
          transaction: transaction,
        });
      }
    }
    for (const upsert of licenceDto.products) {
      const existingProduct = await this.licenceProductModelRepository.findOne({
        where: {
          sfLicenceId: updatedRecord.sfLicenceId,
          productId: upsert.productId,
        },
        transaction: transaction,
      });
      if (!existingProduct) {
        await this.licenceProductModelRepository.upsert(
          {
            sfLicenceId: updatedRecord.sfLicenceId,
            productId: upsert.productId,
          },
          { transaction: transaction }
        );
      }
    }
  }

  public async upsertLicence(
    dto: LicenceDto
  ): Promise<ApiResult<LicenceModel>> {
    const transaction = await this.sequelize.transaction();
    try {
      if (!dto) {
        return ApiResult.Failed<LicenceModel>(
          'Can not update null or undefined.'
        );
      }

      // Ability to edit licence has been deactivated as the data is coming through Flow Gear
      // const result = await this.licenceModelRepository.upsert(
      //  {...dto},
      //   { transaction: transaction }
      // );
      // const updatedRecord = await this.licenceModelRepository.findByPk(results[0].sfLicenceId, {
      //   transaction: transaction,
      // });

      const updatedRecord = await this.licenceModelRepository.findByPk(
        dto.sfLicenceId,
        {
          include: [
            {
              model: this.productsRepository,
              as: 'products',
            },
          ],
          transaction: transaction,
        }
      );
      await this.updateLinkedProducts(dto, updatedRecord, transaction);
      await transaction.commit();
      return ApiResult.Success(updatedRecord);
    } catch (e) {
      await transaction.rollback();
      this.logger.error(
        'Failed to create or update',
        e.stack,
        e.context,
        e.message
      );
      return ApiResult.Failed('Failed to create or update');
    }
  }
}
