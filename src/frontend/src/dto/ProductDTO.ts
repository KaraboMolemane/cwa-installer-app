import LicenceDTO from "./LicenceDTO";
import VersionDTO from "./VersionDTO";

export default interface ProductDTO {
  productId: string;
  name: string;
  version: string;
  priority: number;
  description: string;
  type: string;
  notification: string;
  createdAt: string;
  updatedAt: string;
  licences: LicenceDTO[];
  versions: VersionDTO[];
  requiredProducts?: [];
}