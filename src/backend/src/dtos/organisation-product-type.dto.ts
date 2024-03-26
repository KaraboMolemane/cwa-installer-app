import { Allow } from 'class-validator';
import { AutoMap } from '@automapper/classes';
import { OrganisationDto } from './organisation.dto';

export class OrganisationProductTypeDto {
  @Allow()
  @AutoMap()
  public sfAccountId: string;
  @Allow()
  @AutoMap()
  public licenceType: string;
  @Allow()
  @AutoMap()
  public status: string;
  @AutoMap()
  public provideSupport: string;
  @AutoMap()
  public createdAt: Date;
  @AutoMap()
  public updatedAt: Date;
  @AutoMap()
  public organisations: OrganisationDto;
}
