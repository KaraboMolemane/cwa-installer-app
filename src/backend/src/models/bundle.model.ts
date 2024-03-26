import {
  BelongsToMany,
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { AutoMap } from '@automapper/classes';
import { OrganisationModel } from './organisation.model';
import { OrganisationBundleModel } from './organisation-bundle.model';
import { BundleLicencesModel } from './bundle-licences.model';
import { LicenceModel } from './licence.model';

@Table({
  timestamps: true,
  tableName: 'Bundles',
})
export class BundleModel extends Model {
  @AutoMap()
  @Column({
    allowNull: false,
    unique: true,
    primaryKey: true,
  })
  public sfBundleId: string;

  @AutoMap()
  @Column({ allowNull: false })
  public sfProductCode: string;

  @AutoMap()
  @Column({ allowNull: false })
  public name: string;

  @AutoMap()
  @CreatedAt
  public createdAt: Date;

  @AutoMap()
  @UpdatedAt
  public updatedAt: Date;

  @BelongsToMany(() => OrganisationModel, {
    through: () => OrganisationBundleModel,
    foreignKey: 'sfProduct2Id',
    sourceKey: 'sfBundleId',
  })
  public organisations: OrganisationModel[];

  @BelongsToMany(() => LicenceModel, {
    through: () => BundleLicencesModel,
    foreignKey: 'sfBundleId',
    sourceKey: 'sfBundleId',
  })
  @AutoMap()
  public licences: LicenceModel[];
}
