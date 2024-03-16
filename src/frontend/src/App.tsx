import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Eula from "./components/Eula";
import Registration from "./components/Registration";
import SelectApps from "./components/SelectApps";

const App: React.FC = () => {
  const [sfAccoundId, setSfAccountId] = useState("");
  const [orgProducts, setOrgProducts] = useState([{}]);
  const [selectedProducts, setSelectedProducts] = useState([{}]);

  return (
    <div>
      <br />
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-welcome-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-welcome"
            type="button"
            role="tab"
            aria-controls="nav-welcome"
            aria-selected="true"
          >
            Welcome
          </button>
          <button
            className="nav-link"
            id="nav-eula-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-eula"
            type="button"
            role="tab"
            aria-controls="nav-eula"
            aria-selected="true"
          >
            UELA
          </button>
          <button
            className="nav-link"
            id="nav-registration-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-registration"
            type="button"
            role="tab"
            aria-controls="nav-registration"
            aria-selected="true"
          >
            Registration
          </button>
          <button
            className="nav-link"
            id="nav-select-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-select"
            type="button"
            role="tab"
            aria-controls="nav-select"
            aria-selected="false"
          >
            Select Apps
          </button>
          <button
            className="nav-link"
            id="nav-generate-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-generate"
            type="button"
            role="tab"
            aria-controls="nav-generate"
            aria-selected="false"
          >
            Generate
          </button>
          <button
            className="nav-link"
            id="nav-download-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-download"
            type="button"
            role="tab"
            aria-controls="nav-download"
            aria-selected="false"
          >
            Download
          </button>
          <button
            className="nav-link"
            id="nav-install-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-install"
            type="button"
            role="tab"
            aria-controls="nav-install"
            aria-selected="false"
          >
            Install
          </button>
        </div>
      </nav>
      <div
        className="tab-content"
        id="nav-tabContent"
        style={{ margin: "2% 2% 2% 2%" }}
      >
        <div
          className="tab-pane fade"
          id="nav-welcome"
          role="tabpanel"
          aria-labelledby="nav-welcome-tab"
        >
          <Welcome />
        </div>
        <div
          className="tab-pane fade"
          id="nav-eula"
          role="tabpanel"
          aria-labelledby="nav-eula-tab"
        >
          <Eula />
        </div>
        <div
          className="tab-pane fade"
          id="nav-registration"
          role="tabpanel"
          aria-labelledby="nav-registration-tab"
        >
          <div>
            <Registration />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-select"
          role="tabpanel"
          aria-labelledby="nav-select-tab"
        >
          <SelectApps />
        </div>
        <div
          className="tab-pane fade"
          id="nav-generate"
          role="tabpanel"
          aria-labelledby="nav-generate-tab"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="nav-download"
          role="tabpanel"
          aria-labelledby="nav-download-tab"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="nav-install"
          role="tabpanel"
          aria-labelledby="nav-install-tab"
        >
          ...
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{marginTop: '1%'}}>
          <button className="btn btn-primary me-md-2" type="button">
            Back
          </button>
          <button className="btn btn-primary" type="button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
