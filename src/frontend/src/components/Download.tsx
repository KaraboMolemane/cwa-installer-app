import React from "react";
import CardHeader from "./CardHeader";

const Download = (props: any) => {
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
            cardText={"Please wait while applications are being downloaded..."}
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
                <h2 className="ng-binding">30%</h2>
                <h5>Overall download progress</h5>
              </div>
              <h5 className="card-title">Download</h5>
            </div>
          </div>
          <div className="card-text">test</div>
        </div>
      </div>
    </>
  );
};

export default Download;
