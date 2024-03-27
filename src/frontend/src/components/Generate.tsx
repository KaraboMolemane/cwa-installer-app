import React from "react";
import GenerateProducts from "./GenerateProducts";
import CardHeader from "./CardHeader";
import { ProductDto } from "dtos/product.dto";

interface GenerateProps {
  selectedProducts: ProductDto[];
  handleGenerateNextButton: () => void;
  handleGenerateBackButton: () => void;
}

const Generate: React.FC<GenerateProps> = ({
  selectedProducts,
  handleGenerateNextButton,
  handleGenerateBackButton,
}) => {
  return (
    <div
      className="card"
      style={{
        paddingLeft: "17rem !important",
        paddingRight: "17rem !important",
      }}
    >
      <div className="card-header">
        <CardHeader
          cardText={
            "Ensure the correct applications have been selected and then proceed download the products."
          }
        />
        <div className="row"></div>
      </div>
      <div className="card-body">
        <div className="card-title">
          <div>
            <div
              className="pull-right text-right btn btn-outline-dark disabled"
              style={{ float: "right", textAlign: "center" }}
            >
              <h2 className="ng-binding">921.8 MB</h2>
              <h5>Download</h5>
            </div>
            <h5 className="card-title">Selected Products</h5>
          </div>
        </div>
        <div className="card-text">
          <GenerateProducts selectedProducts={selectedProducts} />
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          {/* <span
            className="d-inline-block"
            tabIndex={0}
            data-bs-toggle="popover"
            data-bs-trigger="hover focus"
            data-bs-content="Disabled popover"
          >
            <button className="btn btn-primary" type="button" disabled>
              Popover test
            </button>
          </span> */}
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="lnstallCheck"
            />
            <label
              className="form-check-label"
              htmlFor="lnstallCheck"
              data-bs-toggle="popover"
              data-bs-trigger="hover focus"
              data-bs-content="Create an offline installer package to share with your colleagues. \nThe installer package will be placed in you 'Downloads' folder."
            >
              Install applications
            </label>
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="localZipCheck"
            />
            <label
              className="form-check-label"
              htmlFor="localZipCheck"
              data-bs-toggle="popover"
              data-bs-trigger="hover focus"
              data-bs-content="Create an offline installer package to share with your colleagues. \nThe installer package will be placed in you 'Downloads' folder."
            >
              Create an offline installer package
            </label>
          </div>
        </div>
        <div
          className="d-grid gap-2 d-md-flex justify-content-md-end"
          style={{ marginTop: "1%" }}
        >
          <button
            className="btn btn-primary me-md-2"
            type="button"
            onClick={handleGenerateBackButton}
          >
            Back
          </button>
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleGenerateNextButton}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Generate;
