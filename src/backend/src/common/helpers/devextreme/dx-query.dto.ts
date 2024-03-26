import { SortDescriptor, FilterDescriptor } from 'devextreme/data';
import { Allow } from 'class-validator';

export class DxQueryDto<T> {
  @Allow()
  filter?: FilterDescriptor | Array<FilterDescriptor>;
  @Allow()
  sort?: SortDescriptor<T> | Array<SortDescriptor<T>>;
  @Allow()
  take?: number;
  @Allow()
  skip?: number;
  @Allow()
  fields?: string[];
}
