import React from "react";

const CardHeader = (props: any) => {
  return (
    <div className="row">
      <div className="col-6">
        <img
          style={{ float: "left" }}
          src="https://install.cqscloud.com/images/cwa-2018.png"
        />
      </div>
      <div className="col-6">
        <img
          style={{ float: "right" }}
          src="https://install.cqscloud.com/images/adaptit-2018.png"
        />
      </div>
      <div className="col-12"> {/* Added this div to wrap the text */}
        <h6 className="card-title p-3 text-center">
          {props.cardText}
        </h6>
      </div>
    </div>
  );
};

export default CardHeader;
