import React from "react";
import GenerateProducts from "./GenerateProducts";

function Generate(props: any) {
  return (
    <div className="card">
      <div className="card-body">
      <div
                className="pull-right text-right btn btn-outline-dark disabled"
                style={{ float: "right", textAlign: "center" }}
              >
                <h2 className="ng-binding">
                  921.8 MB
                </h2>
                <h5>Download</h5>
              </div>
        <h5 className="card-title">Selected Products</h5>
        <GenerateProducts selectedProducts={props.selectedProducts} />
      </div>
    </div>
  );
}

export default Generate;
