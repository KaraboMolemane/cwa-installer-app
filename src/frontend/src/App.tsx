import React from 'react';
import Welcome from './components/Welcome';
import Eula from 'components/Eula';

const App: React.FC = () => {
  return (
    <div>
        <br />
        <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <button className="nav-link active" id="nav-welcome-tab" data-bs-toggle="tab" data-bs-target="#nav-welcome" type="button" role="tab" aria-controls="nav-welcome" aria-selected="true">Welcome</button>
        <button className="nav-link" id="nav-eula-tab" data-bs-toggle="tab" data-bs-target="#nav-eula" type="button" role="tab" aria-controls="nav-eula" aria-selected="true">UELA</button>
        <button className="nav-link" id="nav-registration-tab" data-bs-toggle="tab" data-bs-target="#nav-registration" type="button" role="tab" aria-controls="nav-registration" aria-selected="true">Registration</button>
        <button className="nav-link" id="nav-products-tab" data-bs-toggle="tab" data-bs-target="#nav-products" type="button" role="tab" aria-controls="nav-products" aria-selected="false">Products</button>
        <button className="nav-link" id="nav-generate-tab" data-bs-toggle="tab" data-bs-target="#nav-generate" type="button" role="tab" aria-controls="nav-generate" aria-selected="false">Generate</button>
        <button className="nav-link" id="nav-download-tab" data-bs-toggle="tab" data-bs-target="#nav-download" type="button" role="tab" aria-controls="nav-download" aria-selected="false">Download</button>
        <button className="nav-link" id="nav-install-tab" data-bs-toggle="tab" data-bs-target="#nav-install" type="button" role="tab" aria-controls="nav-install" aria-selected="false">Install</button>
      </div>
    </nav>
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade" id="nav-welcome" role="tabpanel" aria-labelledby="nav-welcome-tab">
      <Welcome />     
      </div>
      <div className="tab-pane fade" id="nav-eula" role="tabpanel" aria-labelledby="nav-eula-tab">
        <Eula />
      </div>
      <div className="tab-pane fade" id="nav-registration" role="tabpanel" aria-labelledby="nav-registration-tab"><p>Test</p></div>
      <div className="tab-pane fade" id="nav-products" role="tabpanel" aria-labelledby="nav-products-tab">...</div>
      <div className="tab-pane fade" id="nav-generate" role="tabpanel" aria-labelledby="nav-generate-tab">...</div>
      <div className="tab-pane fade" id="nav-download" role="tabpanel" aria-labelledby="nav-download-tab">...</div>
      <div className="tab-pane fade" id="nav-install" role="tabpanel" aria-labelledby="nav-install-tab">...</div>
    </div>
    </div>
  );
};

export default App;