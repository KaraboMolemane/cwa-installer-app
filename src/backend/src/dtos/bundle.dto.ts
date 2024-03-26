import { Allow } from 'class-validator';
import { AutoMap } from '@automapper/classes';
import { LicenceDto } from './licence.dto';
import { OrganisationDto } from './organisation.dto';

export class BundleDto {
  @Allow()
  @AutoMap()
  public sfBundleId: string;

  @Allow()
  @AutoMap()
  public sfProductCode: string;

  @Allow()
  @AutoMap()
  public name: string;

  @Allow()
  @AutoMap()
  public createdAt: Date;

  @Allow()
  @AutoMap()
  public updatedAt: Date;

  @Allow()
  @AutoMap()
  public licences: LicenceDto[];

  @Allow()
  @AutoMap()
  public organisations: OrganisationDto[];
}
