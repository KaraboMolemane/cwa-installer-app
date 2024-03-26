import {
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Sequelize } from 'sequelize';
import { AutoMap } from '@automapper/classes';
import { ProductModel } from './product.model';

@Table({
  timestamps: true,
  tableName: 'Versions',
})
export class VersionModel extends Model {
  @Column({
    allowNull: false,
    unique: true,
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: Sequelize.literal('gen_random_uuid()'),
  })
  public versionId: string;

  @AutoMap()
  @Column({ allowNull: false })
  @ForeignKey(() => ProductModel)
  public productId: string;

  @Column({ allowNull: true, type: DataType.TEXT })
  public description: string;

  @Column({ allowNull: false, type: DataType.BIGINT })
  public size: number;

  @Column({ allowNull: true })
  public hash: string;

  @Column({ allowNull: true })
  public md5: string;

  @CreatedAt
  public createdAt: Date;

  @UpdatedAt
  public updatedAt: Date;
}
