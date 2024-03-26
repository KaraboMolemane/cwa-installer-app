import { Allow } from 'class-validator';
import { AutoMap } from '@automapper/classes';
import { LicenceDto } from './licence.dto';
import { BundleDto } from './bundle.dto';
import { OrganisationProductTypeDto } from './organisation-product-type.dto';

export class OrganisationDto {
  @Allow()
  @AutoMap()
  public sfAccountId: string;
  @Allow()
  @AutoMap()
  public name: string;
  @Allow()
  @AutoMap()
  public downloadCode: string;
  @AutoMap()
  public createdAt: string;
  @AutoMap()
  public updatedAt: string;
  @AutoMap()
  public bundles: BundleDto[];
  @AutoMap()
  public licences: LicenceDto[];
  @AutoMap()
  public organisationProductType: OrganisationProductTypeDto[];
}
