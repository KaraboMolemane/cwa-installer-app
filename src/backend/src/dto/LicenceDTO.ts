import ProductDTO from "./ProductDTO";

export default interface LicencetDTO {
  sfLicenceId: string;
  sfProductCode: string;
  tagName: string;
  licenceKey: string;
  createdAt: string;
  updatedAt: string;
  existsInSF?: boolean,
  products?: ProductDTO[];
}
