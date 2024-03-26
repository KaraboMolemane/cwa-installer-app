import { Allow } from 'class-validator';
import { AutoMap } from '@automapper/classes';
import { LicenceDto } from './licence.dto';
import { VersionDto } from './version.dto';
import { RequiredProductDto } from './required-product.dto';

export class ProductDto {
  
  @Allow()
  @AutoMap()
  public productId: string;
  @Allow()
  @AutoMap()
  public name: string;
  @Allow()
  @AutoMap()
  public version: string;
  @Allow()
  @AutoMap()
  public priority: number;
  @Allow()
  @AutoMap()
  public description: string;
  @Allow()
  @AutoMap()
  public type: string;
  @Allow()
  @AutoMap()
  public notification: string;
  @Allow()
  @AutoMap({ type: () => LicenceDto })
  public licences: LicenceDto[];
  @Allow()
  @AutoMap({ type: () => VersionDto })
  public versions: VersionDto[];
  @Allow()
  @AutoMap({ type: () => RequiredProductDto })
  public requiredProducts: RequiredProductDto[];
  @AutoMap()
  public createdAt: Date;
  @AutoMap()
  public updatedAt: Date;
}
