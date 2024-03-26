import {
  Column,
  CreatedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { AutoMap } from '@automapper/classes';
import { BundleModel } from './bundle.model';
import { LicenceModel } from './licence.model';

@Table({
  timestamps: true,
  tableName: 'BundleLicences',
  indexes: [{ fields: ['sfBundleId', 'sfLicenceId'], unique: true }],
})
export class BundleLicencesModel extends Model {
  @Column({ allowNull: false })
  @ForeignKey(() => BundleModel)
  public sfBundleId: string;

  @Column({ allowNull: false })
  @ForeignKey(() => LicenceModel)
  public sfLicenceId: string;

  @AutoMap()
  @Column({ allowNull: true })
  public sfProductCode: string;

  @CreatedAt
  public createdAt: Date;

  @UpdatedAt
  public updatedAt: Date;
}
