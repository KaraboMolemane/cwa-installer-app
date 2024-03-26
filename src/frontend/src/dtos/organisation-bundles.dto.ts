import { Allow } from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class OrganisationBundleDto {
  @Allow()
  @AutoMap()
  public sfAccountId: string;
  @Allow()
  @AutoMap()
  public sfProduct2Id: string;
  @Allow()
  @AutoMap()
  public sfEntryId: string;
  @AutoMap()
  public sfProductCode: string;
  @AutoMap()
  public createdAt: Date;
  @AutoMap()
  public updatedAt: Date;
}
