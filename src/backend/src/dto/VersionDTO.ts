export  default interface VersionDTO {
  versionId: string;
  productId?: string;
  description: string;
  size: number;
  hash: string;
  md5: string;
  createdAt: string;
  updatedAt: string;
  }