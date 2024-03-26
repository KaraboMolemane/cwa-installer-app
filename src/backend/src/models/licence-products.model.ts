import {
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { ProductModel } from './product.model';
import { AutoMap } from '@automapper/classes';
import { LicenceModel } from './licence.model';

@Table({
  timestamps: true,
  tableName: 'LicenceProducts',
  indexes: [{ fields: ['sfLicenceId', 'productId'], unique: true }],
})
export class LicenceProductsModel extends Model {
  @AutoMap()
  @Column({ allowNull: false, primaryKey: true, type: DataType.UUID })
  @ForeignKey(() => LicenceModel)
  public sfLicenceId: string;

  @AutoMap()
  @Column({ allowNull: false, primaryKey: true, type: DataType.UUID })
  @ForeignKey(() => ProductModel)
  public productId: string;

  @AutoMap()
  @CreatedAt
  public createdAt: Date;

  @AutoMap()
  @UpdatedAt
  public updatedAt: Date;
}
