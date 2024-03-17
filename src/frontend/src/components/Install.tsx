import React from "react";
import CardHeader from "./CardHeader";

const Install = (props: any) => {
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
            cardText={"Please wait while applications are being installed..."}
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
                <h2 className="ng-binding">55%</h2>
                <h5>Overall install progress</h5>
              </div>
              <h5 className="card-title">Instalation</h5>
            </div>
          </div>
          <div className="card-text">test</div>
        </div>
      </div>
    </>
  );
};

export default Install;
