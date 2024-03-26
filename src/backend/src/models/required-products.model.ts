import {
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { AutoMap } from '@automapper/classes';
import { ProductModel } from './product.model';

@Table({
  timestamps: true,
  tableName: 'RequiredProducts',
  indexes: [{ fields: ['productId', 'requiredProductId'], unique: true }],
})
export class RequiredProductsModel extends Model {
  @AutoMap()
  @Column({ allowNull: false, primaryKey: true, type: DataType.UUID })
  @ForeignKey(() => ProductModel)
  public productId: string;

  @AutoMap()
  @Column({ allowNull: false, primaryKey: true, type: DataType.UUID })
  @ForeignKey(() => ProductModel)
  public requiredProductId: string;

  @AutoMap()
  @CreatedAt
  public createdAt: Date;

  @AutoMap()
  @UpdatedAt
  public updatedAt: Date;

  // @AutoMap()
  // @BelongsTo(() => ProductModel, 'requiredProductId')
  // public requiredProduct: ProductModel;

  @HasMany(() => ProductModel, {
    as: 'parentProduct',
    foreignKey: 'productId',
    sourceKey: 'productId',
  })
  @HasMany(() => ProductModel, {
    as: 'requiredProduct',
    foreignKey: 'productId',
    sourceKey: 'requiredProductId',
  })
  public requiredProducts: ProductModel[];
}
