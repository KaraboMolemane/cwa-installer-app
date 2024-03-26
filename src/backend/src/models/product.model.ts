import {
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
  HasMany,
} from 'sequelize-typescript';
import { Sequelize } from 'sequelize';
import { AutoMap } from '@automapper/classes';
import { LicenceProductsModel } from './licence-products.model';
import { LicenceModel } from './licence.model';
import { VersionModel } from './version.model';
import { RequiredProductsModel } from './required-products.model';

@Table({
  timestamps: true,
  tableName: 'Products',
  indexes: [{ fields: ['name'], unique: true }],
})
export class ProductModel extends Model {
  @AutoMap()
  @Column({
    allowNull: false,
    unique: true,
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: Sequelize.literal('gen_random_uuid()'),
  })
  @ForeignKey(() => VersionModel)
  public productId: string;

  @AutoMap()
  @Column({ allowNull: false, unique: true })
  public name: string;

  @AutoMap()
  @Column({ allowNull: true })
  public version: string;

  @AutoMap()
  @Column({ allowNull: false, type: DataType.INTEGER })
  public priority: number;

  @AutoMap()
  @Column({ allowNull: true, type: DataType.TEXT })
  public description: string;

  @AutoMap()
  @Column({ allowNull: true, type: DataType.TEXT })
  public type: string;

  @AutoMap()
  @Column({ allowNull: true })
  public notification: string;

  @AutoMap()
  @CreatedAt
  public createdAt: Date;

  @AutoMap()
  @UpdatedAt
  public updatedAt: Date;

  @BelongsToMany(() => LicenceModel, {
    through: () => LicenceProductsModel,
    foreignKey: 'productId',
    sourceKey: 'productId',
  })
  public licences: LicenceModel[];

  public LicenceProductsModel: LicenceProductsModel;

  @AutoMap()
  @HasMany(() => VersionModel, {
    foreignKey: 'productId',
    sourceKey: 'productId',
    foreignKeyConstraint: true,
  })
  public versions: VersionModel[];

  @AutoMap()
  @HasMany(() => RequiredProductsModel, {
    foreignKey: 'productId',
    sourceKey: 'productId',
    foreignKeyConstraint: true,
  })
  public requiredProducts: RequiredProductsModel[];
}
