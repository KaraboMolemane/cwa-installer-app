import {
    BelongsToMany,
    Column,
    CreatedAt,
    ForeignKey,
    HasMany,
    Model,
    Table,
    UpdatedAt,
  } from 'sequelize-typescript';
  import { AutoMap } from '@automapper/classes';
  import { OrganisationBundleModel } from './organisation-bundle.model';
  import { BundleModel } from './bundle.model';
  import { LicenceModel } from './licence.model';
  import { OrganisationProductTypeModel } from './organisation-product-type.model';
  
  @Table({
    timestamps: true,
    tableName: 'Organisations',
  })
  export class OrganisationModel extends Model {
    @AutoMap()
    @Column({
      allowNull: false,
      unique: true,
      primaryKey: true,
    })
    @ForeignKey(() => OrganisationProductTypeModel)
    public sfAccountId: string;
  
    @AutoMap()
    @Column({ allowNull: true })
    public name: string;
  
    @AutoMap()
    @Column({ allowNull: true })
    public downloadCode: string;
  
    @AutoMap()
    @CreatedAt
    public createdAt: Date;
  
    @AutoMap()
    @UpdatedAt
    public updatedAt: Date;
  
    @BelongsToMany(() => BundleModel, {
      through: () => OrganisationBundleModel,
      foreignKey: 'sfAccountId',
      sourceKey: 'sfAccountId',
    })
    public bundles: BundleModel[];
  
    @BelongsToMany(() => LicenceModel, {
      through: () => OrganisationBundleModel,
      foreignKey: 'sfAccountId',
      sourceKey: 'sfAccountId',
    })
    public licences: LicenceModel[];
  
    @HasMany(() => OrganisationProductTypeModel, {
      foreignKey: 'sfAccountId',
      sourceKey: 'sfAccountId',
      foreignKeyConstraint: true,
    })
    public organisationProductType: OrganisationProductTypeModel[];
  }
  