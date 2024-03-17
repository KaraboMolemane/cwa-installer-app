import React from "react";
import ProductDTO from "dto/ProductDTO";
import ProductLicenceTags from "./ProductLicenceTags";

interface ProductsProps {
  addRemoveProducts: (e: any, product: ProductDTO) => void;
  orgProducts: ProductDTO[];
}

const Products: React.FC<ProductsProps> = ({ addRemoveProducts, orgProducts }) => {

  const orgproductItems = orgProducts.map(
    (product: ProductDTO, index: number) => (
      <div
        key={index}
        style={{
          paddingBottom: "0.2rem !important",
          borderRight: "2px !important",
        }}
        className="accordion-item"
      >
        <h2 className="accordion-header" id={"flush-heading" + index}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#flush-collapse" + index}
            aria-expanded="false"
            aria-controls={"flush-collapse" + index}
            style={{
              paddingLeft: "0.5rem",
              paddingRight: "2rem",
              paddingTop: "0.5rem",
            }}
          >
            <div className="col-lg-6">
              <div className="info-box">
                {product.type === "cwi" && (
                  <span className="badge bg-primary">Caseware Application</span>
                )}
                {product.type === "tmpl" && (
                  <span className="badge bg-primary">Template</span>
                )}
                {product.type === "other" && (
                  <span className="badge bg-primary">Other</span>
                )}
                <span className="badge bg-danger">{product.notification}</span>
                <div
                  className="col-sm-12"
                  style={{ fontSize: "1rem !important", paddingLeft: "0.5rem" }}
                >
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={"gridCheck" + index}
                      onClick={(e) => addRemoveProducts(e, product)}
                    />
                    <label
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "revert",
                        paddingTop: "4px",
                      }}
                      className="form-check-label"
                      htmlFor={"gridCheck" + index}
                    >
                      {product.name}
                    </label>
                  </div>
                  <p style={{ color: "grey", fontSize: "smaller" }}>
                    {product.version}
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info-box">
                      <ProductLicenceTags productLicences={product.licences} />
                </div>
              </div>
            </div>
          </button>
        </h2>
        <div
          id={"flush-collapse" + index}
          className="accordion-collapse collapse"
          aria-labelledby={"flush-heading" + index}
          data-bs-parent="#accordionFlushExample"
        >
          <div
            className="accordion-body pt-2"
            style={{ color: "black", fontSize: "14px" }}
          >
            {product.description}
          </div>
        </div>
      </div>
    )
  );

  const handleProductSelectClick = (e: any, product: ProductDTO) => {
    addRemoveProducts(e, product);
  };

return (
    <div
      className="accordion accordion-flush"
      id="accordionFlushExample"
      style={{ paddingLeft: "40px", paddingRight: "40px" }}
    >
      {orgproductItems}
    </div>
  );
};


export default Products;
