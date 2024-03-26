export class DeletedDto {
  constructor(values: { [key: string]: number }) {
    Object.assign(this, values);
  }
  [key: string]: number;
}
