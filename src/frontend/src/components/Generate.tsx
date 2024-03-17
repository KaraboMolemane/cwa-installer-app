import React from "react";
import GenerateProducts from "./GenerateProducts";
import CardHeader from "./CardHeader";


const Generate = (props: any) => {
  return (
    <>
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
                <h2 className="ng-binding">
                  921.8 MB
                </h2>
                <h5>Download</h5>
              </div>
        <h5 className="card-title">Selected Products</h5>
            </div>
          </div>
          <div className="card-text">
          <GenerateProducts selectedProducts={props.selectedProducts} />
          </div>
        </div>
      </div>
    </>
  );
};


export default Generate;
