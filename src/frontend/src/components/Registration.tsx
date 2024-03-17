import React from "react";
import CardHeader from "./CardHeader";

function Registration(props: any) {
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
          cardText={[
            "Please enter your email address & download code below. Your code is available in ",
            <a
              href="#"
              className="green-link"
              onClick={() => window.open("https://success.casewareafrica.com/")}
            >
              The Community&nbsp;
            </a>,
            "on the My Software page. If you are not sure about this process, watch this ",
            <a
              href="#"
              target="_blank"
              className="green-link underline"
              onClick={() => window.open("https://success.casewareafrica.com/articles/Video/CaseWare-2016-Getting-Started-How-to-download-install-and-register-CaseWare-2016")}
            >
              Quick Video.
            </a>,
          ]}
        />
        <div className="row"></div>
      </div>
      <div className="card-body">
        <div className="card-title">
          <div>
            <h2
              style={{
                color: "#428bca !important",
                fontWeight: "100",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              Registration
            </h2>
          </div>
        </div>
        <div className="card-text">
          {/* Show organisation products */}
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Download Code / Salesforce Account ID
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter Download Code or Salesforce Account ID"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              User Email
            </label>
            <input
              type="email"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter User Email"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
