import { Injectable, Logger } from '@nestjs/common';
import { Sequelize, Model, ModelCtor } from 'sequelize-typescript';
import { DxHelper } from '../devextreme/dx-helper';
import { DeletedDto } from './models/deleted.dto';
import { DxQueryDto } from '../devextreme/dx-query.dto';
import { ApiResult } from './models/api-result.dto';
import { FindAndCountOptions } from 'sequelize';
import { PagedResultDto } from './models/paged-result.dto';

export abstract class ServiceBase<M extends Model> {
  public dxHelper = new DxHelper<Model>();
  public readonly logger = new Logger(ServiceBase.name);
  public readonly repository;

  protected constructor(model: ModelCtor<M>, protected sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository<M>(model);
  }

  public async findAndCountAll(
    filter: DxQueryDto<M>,
    options?: FindAndCountOptions
  ): Promise<ApiResult<PagedResultDto<M>>> {
    const dxOptions = this.dxHelper.buildSequelizeOptions(filter);
    // findAndCountAll returns the incorrect count when including linked tables
    // Work around is to add distinct:true
    // https://github.com/sequelize/sequelize/issues/10557
    const fieldsAttributes = options?.attributes || filter?.fields || undefined;
    const result = await this.repository.findAndCountAll({
      ...options,
      attributes: fieldsAttributes,
      distinct: true,
      ...dxOptions,
    });
    return ApiResult.Success(new PagedResultDto(result.rows, result.count));
  }

  public async findAll(
    options?: FindAndCountOptions
  ): Promise<ApiResult<PagedResultDto<M>>> {
    const result = await this.repository.findAndCountAll(options);
    return ApiResult.Success(new PagedResultDto(result.rows, result.count));
  }

  public async findById(id: string): Promise<ApiResult<M>> {
    const result = await this.repository.findByPk(id);
    return ApiResult.Success(result);
  }

  public async upsert<Dto>(dto: Dto): Promise<ApiResult<M>> {
    const transaction = await this.sequelize.transaction();

    try {
      if (!dto) {
        return ApiResult.Failed<M>('Can not update null or undefined.');
      }
      const result = await this.repository.upsert(
        { ...dto },
        { transaction: transaction }
      );
      const updatedRecord = await this.repository.findByPk(result[0].id, {
        transaction: transaction,
      });
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

  public async update<Dto>(dto: Dto): Promise<ApiResult<M>> {
    const transaction = await this.sequelize.transaction();

    try {
      if (!dto) {
        return ApiResult.Failed<M>('Can not update null or undefined.');
      }
      const result = await this.repository.upsert(
        { ...dto },
        { transaction: transaction }
      );
      const updatedRecord = await this.repository.findByPk(result[0].id, {
        transaction: transaction,
      });
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

  public async deleteById(id: string): Promise<ApiResult<DeletedDto>> {
    const transaction = await this.sequelize.transaction();
    try {
      const deleted = await this.repository.destroy({
        where: {
          id: id,
        },
        transaction: transaction,
      });

      await transaction.commit();
      return ApiResult.Success(
        new DeletedDto({ deleted: deleted }),
        'Deleted item'
      );
    } catch (e) {
      await transaction.rollback();
      this.logger.error(
        'Failed to delete records',
        e.stack,
        e.context,
        e.message
      );
      return ApiResult.Failed('Failed to delete records');
    }
  }
}
