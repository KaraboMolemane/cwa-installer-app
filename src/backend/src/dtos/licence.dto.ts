import { Allow } from 'class-validator';
import { AutoMap } from '@automapper/classes';
import { ProductDto } from './product.dto';
import { OrganisationDto } from './organisation.dto';
import { BundleDto } from './bundle.dto';

export class LicenceDto {
  @Allow()
  @AutoMap()
  public sfLicenceId: string;

  @Allow()
  @AutoMap()
  public sfProductCode: string;

  @Allow()
  @AutoMap()
  public tagName: string;

  @Allow()
  @AutoMap()
  public licenceKey: string;

  @AutoMap()
  public createdAt: Date;

  @AutoMap()
  public updatedAt: Date;

  @Allow()
  @AutoMap({ type: () => ProductDto, depth: 1 })
  public products: ProductDto[];

  @Allow()
  @AutoMap({ type: () => BundleDto, depth: 1 })
  public bundles: BundleDto[];

  @Allow()
  @AutoMap({ type: () => OrganisationDto, depth: 1 })
  public organisations: OrganisationDto[];
}
