import ProductDTO from "./ProductDTO";

export default interface RequiredProductsDTO {
  productId?: string;
  requiredProductId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
