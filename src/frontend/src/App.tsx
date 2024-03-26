import React, { useState } from "react";
import { toast } from "react-toastify";
import Registration from "./components/Registration";
import SelectApps from "./components/SelectApps";
import Generate from "./components/Generate";
import Download from "./components/Download";
import Install from "./components/Install";
import { ProductDto } from "dtos/product.dto";

type AddRemoveProductsFunction = (e: any, product: ProductDto) => void;

const App: React.FC = () => {
  const [sfAccoundId, setSfAccountId] = useState("");
  const [orgProducts, setOrgProducts] = useState([{}]);
  const [selectedProducts, setSelectedProducts] = useState<ProductDto[]>([]);

  const addRemoveProducts: AddRemoveProductsFunction = async (e, product) => {
    try {
      if (e.target.checked) {
        // toast("Adding product");
        setSelectedProducts((prevSelectedProducts) => [
          ...prevSelectedProducts,
          product,
        ]);
      } else {
        // toast("Removing product");
        setSelectedProducts((prevSelectedProducts) =>
          prevSelectedProducts.filter(
            (selectedProduct) => selectedProduct.productId !== product.productId
          )
        );
      }
    } catch (error: any) {
      console.error("addRemoveProducts Error", error);
      toast(error.message);
    }
  };

  return (
    <div>
      <br />
      <nav>
        <div className="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
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
            Download & Install
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
          <SelectApps
            addRemoveProducts={addRemoveProducts}
            selectedProducts={selectedProducts}
          />
        </div>
        <div
          className="tab-pane fade"
          id="nav-generate"
          role="tabpanel"
          aria-labelledby="nav-generate-tab"
        >
          <Generate selectedProducts={selectedProducts} />
        </div>
        <div
          className="tab-pane fade"
          id="nav-download"
          role="tabpanel"
          aria-labelledby="nav-download-tab"
        >
          <Download selectedProducts={selectedProducts} />
        </div>
        <div
          className="tab-pane fade"
          id="nav-install"
          role="tabpanel"
          aria-labelledby="nav-install-tab"
        >
          <Install />
        </div>
        <div
          className="d-grid gap-2 d-md-flex justify-content-md-end"
          style={{ marginTop: "1%" }}
        >
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
