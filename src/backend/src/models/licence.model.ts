import {
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
  BelongsToMany,
} from 'sequelize-typescript';
import { AutoMap } from '@automapper/classes';
import { ProductModel } from './product.model';
import { OrganisationBundleModel } from './organisation-bundle.model';
import { BundleLicencesModel } from './bundle-licences.model';
import { BundleModel } from './bundle.model';
import { LicenceProductsModel } from './licence-products.model';
import { OrganisationModel } from './organisation.model';

@Table({
  timestamps: true,
  tableName: 'Licences',
})
export class LicenceModel extends Model {
  @AutoMap()
  @Column({
    allowNull: false,
    unique: true,
    primaryKey: true,
  })
  public sfLicenceId: string;

  @AutoMap()
  @Column({ allowNull: false })
  public sfProductCode: string;

  @AutoMap()
  @Column({ allowNull: false })
  public tagName: string;

  @AutoMap()
  @Column({ allowNull: false })
  public licenceKey: string;

  @AutoMap()
  @CreatedAt
  public createdAt: Date;

  @AutoMap()
  @UpdatedAt
  public updatedAt: Date;

  @BelongsToMany(() => BundleModel, {
    through: () => BundleLicencesModel,
    foreignKey: 'sfLicenceId',
    sourceKey: 'sfLicenceId',
  })
  @AutoMap()
  public bundles: BundleModel[];

  @BelongsToMany(() => OrganisationModel, {
    through: () => OrganisationBundleModel,
    foreignKey: 'sfProduct2Id',
    sourceKey: 'sfLicenceId',
  })
  @AutoMap()
  public organisations: OrganisationModel[];

  @BelongsToMany(() => ProductModel, {
    through: () => LicenceProductsModel,
    foreignKey: 'sfLicenceId',
    sourceKey: 'sfLicenceId',
  })
  @AutoMap()
  public products: ProductModel[];
}
