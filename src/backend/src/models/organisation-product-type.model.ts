import {
  BelongsTo,
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { OrganisationModel } from './organisation.model';
import { AutoMap } from '@automapper/classes';

@Table({
  timestamps: true,
  tableName: 'OrganisationProductType',
})
export class OrganisationProductTypeModel extends Model {
  @Column({ allowNull: false, primaryKey: true })
  //   @ForeignKey(() => OrganisationModel)
  public sfAccountId: string;

  @AutoMap()
  @Column({ allowNull: false, primaryKey: true })
  public licenceType: string;

  @AutoMap()
  @Column({ allowNull: true })
  public status: string;

  @AutoMap()
  @Column({ allowNull: true })
  public provideSupport: string;

  @AutoMap()
  @CreatedAt
  public createdAt: string;

  @AutoMap()
  @UpdatedAt
  public updatedAt: string;

  @BelongsTo(() => OrganisationModel, {
    foreignKeyConstraint: true,
    foreignKey: 'sfAccountId',
  })
  public organisation: OrganisationModel;
}
