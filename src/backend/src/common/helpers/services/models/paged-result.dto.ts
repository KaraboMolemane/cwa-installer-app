import { ApiProperty } from '@nestjs/swagger';

export class PagedResultDto<T> {
  data: T[];
  @ApiProperty()
  totalCount: number;
  constructor(data: T[] = [], totalCount = 0) {
    this.data = data;
    this.totalCount = totalCount;
  }
}
