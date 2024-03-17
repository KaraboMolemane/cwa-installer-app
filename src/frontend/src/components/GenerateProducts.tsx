import ProductDTO from "dto/ProductDTO";
import React from "react";

function GenerateProducts(props: any) {
  const selectedProducts = props.selectedProducts;
  const productItems = selectedProducts.map(
    (product: ProductDTO, index: number) => (
      <tr key={index}>
        <td>{product.name}</td>
        <td>{product.version}</td>
        <td>{product.createdAt}</td>
        <td></td>
      </tr>
    )
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Product name</th>
          <th scope="col">Version</th>
          <th scope="col">Date Added</th>
          <th scope="col">Size</th>
        </tr>
      </thead>
      <tbody>
      {productItems}
      </tbody>
    </table>
    
  );
}

export default GenerateProducts;
