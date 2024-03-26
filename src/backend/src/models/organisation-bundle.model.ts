import {
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { OrganisationModel } from './organisation.model';
import { AutoMap } from '@automapper/classes';
import { BundleModel } from './bundle.model';
import { LicenceModel } from './licence.model';

@Table({
  timestamps: true,
  tableName: 'OrganisationBundles',
  indexes: [{ fields: ['sfAccountId', 'sfProduct2Id'], unique: true }],
})
export class OrganisationBundleModel extends Model {
  @Column({ allowNull: false, primaryKey: true, type: DataType.UUID })
  @ForeignKey(() => OrganisationModel)
  public sfAccountId: string;

  @Column({ allowNull: false, primaryKey: true, type: DataType.UUID })
  @ForeignKey(() => BundleModel)
  @ForeignKey(() => LicenceModel)
  public sfProduct2Id: string;

  @AutoMap()
  @Column({ allowNull: true })
  public sfEntryId: string;

  @AutoMap()
  @Column({ allowNull: true })
  public sfProductCode: string;

  @CreatedAt
  public createdAt: Date;

  @UpdatedAt
  public updatedAt: Date;
}
