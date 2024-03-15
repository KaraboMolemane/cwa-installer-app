import React from "react";

function Registration() {
  return (
    <>
      <p>
        Please enter your email address & download code below. Your download
        code is available from your firm champion.
      </p>

      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Download Code
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Enter Download Code"
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
    </>
  );
}

export default Registration;
