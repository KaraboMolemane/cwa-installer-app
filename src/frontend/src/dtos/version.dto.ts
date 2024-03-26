import { AutoMap } from '@automapper/classes';
import { Allow } from 'class-validator';

export class VersionDto {
  @Allow()
  @AutoMap()
  public versionId: string;

  @Allow()
  @AutoMap()
  public productId: string;

  @Allow()
  @AutoMap()
  public description: string;

  @Allow()
  @AutoMap()
  public size: number;

  @Allow()
  @AutoMap()
  public hash: string;

  @Allow()
  @AutoMap()
  public md5: string;

  @AutoMap()
  public createdAt: Date;

  @AutoMap()
  public updatedAt: Date;
}
