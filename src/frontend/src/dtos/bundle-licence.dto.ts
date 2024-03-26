import { Allow } from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class BundleLicenceDto {
  @Allow()
  @AutoMap()
  public sfBundleId: string;

  @Allow()
  @AutoMap()
  public sfLicenceId: string;

  @Allow()
  @AutoMap()
  public sfProductCode: string;

  @AutoMap()
  public createdAt: Date;

  @AutoMap()
  public updatedAt: Date;
}
