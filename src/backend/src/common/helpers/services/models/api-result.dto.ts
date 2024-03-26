import { ApiProperty } from '@nestjs/swagger';

export class ApiResult<T> {
  data: T;
  @ApiProperty()
  success: boolean;
  @ApiProperty()
  message: string;

  constructor(
    data: T = undefined,
    message: string = undefined,
    success = false
  ) {
    this.message = message;
    this.data = data;
    this.success = success;
  }

  public static Failed<T>(message: string) {
    return new ApiResult<T>(undefined, message, false);
  }

  public static Success<T>(data: T, message: string = undefined) {
    return new ApiResult<T>(data, message, true);
  }
}
