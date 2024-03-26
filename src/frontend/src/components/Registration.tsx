import React, { useState } from "react";
import CardHeader from "./CardHeader";

interface RegistrationProps {
  handleRegistrationNextButton: (
    sfAccountId: string,
    userEmail: string
  ) => void;
  API_BASE_PATH: string;
}

const Registration: React.FC<RegistrationProps> = ({
  handleRegistrationNextButton,
  API_BASE_PATH,
}) => {
  const [sfAccountIdInput, setSfAccountIdInput] = useState<string>("");
  const [userEmailInput, setUserEmailInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    handleRegistrationNextButton(sfAccountIdInput, userEmailInput);
  };

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
              className="green-link underline"
              onClick={() =>
                window.open(
                  "https://success.casewareafrica.com/articles/Video/CaseWare-2016-Getting-Started-How-to-download-install-and-register-CaseWare-2016"
                )
              }
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
          <form
            id="registrationFrom"
            className="row g-3"
            onSubmit={handleSubmit}
          >
            <div className="col-md-12">
              <label htmlFor="sfAccountIdInput" className="form-label">
                Download Code / Salesforce Account ID
              </label>
              <input
                type="text"
                className="form-control"
                id="sfAccountIdInput"
                value={sfAccountIdInput}
                onChange={(e) => setSfAccountIdInput(e.target.value)}
                required
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="userEmailInput" className="form-label">
                User Email
              </label>
              <input
                type="email"
                className="form-control"
                id="userEmailInput"
                value={userEmailInput}
                onChange={(e) => setUserEmailInput(e.target.value)}
                required
              />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="eula"
                  required
                />
                <label className="form-check-label" htmlFor="eula">
                  <a
                    href="#"
                    className="green-link underline"
                    onClick={() =>
                      window.open("https://success.casewareafrica.com")
                    }
                  >
                    Agree to the EULA terms and conditions
                  </a>
                </label>
              </div>
            </div>
          </form>
        </div>
        <div
          className="d-grid gap-2 d-md-flex justify-content-md-end"
          style={{ marginTop: "1%" }}
        >
          <button
            className="btn btn-primary"
            type="submit"
            form="registrationFrom"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
