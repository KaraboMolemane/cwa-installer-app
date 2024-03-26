import { Allow } from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class RequiredProductDto {
  @Allow()
  @AutoMap()
  public productId: string;
  @Allow()
  @AutoMap()
  public requiredProductId: string;
  @AutoMap()
  public createdAt: Date;
  @AutoMap()
  public updatedAt: Date;
}
