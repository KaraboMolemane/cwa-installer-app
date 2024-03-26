import React, { useState } from "react";
import { toast } from "react-toastify";
import Registration from "./components/Registration";
import SelectApps from "./components/SelectApps";
import Generate from "./components/Generate";
import Download from "./components/Download";
import Install from "./components/Install";
import { ProductDto } from "dtos/product.dto";
import { OrganisationDto } from "dtos/organisation.dto";

type handleRegistrationNextButtonFunction = (
  sfAccountIdInput: string,
  userEmail: string
) => void;
type AddRemoveProductsFunction = (e: any, product: ProductDto) => void;

const App: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<ProductDto[]>([]);
  const [allOrgLicences, setAllOrgLicences] = useState<OrganisationDto>({
    sfAccountId: "",
    name: "",
    downloadCode: "",
    createdAt: "",
    updatedAt: "",
    bundles: [],
    licences: [],
    organisationProductType: [],
  });
  //const  API_BASE_PATH = 'http://localhost:3333/'
  const API_BASE_PATH = "https://api.test.casewareafrica.com/";

  const handleRegistrationNextButton: handleRegistrationNextButtonFunction =
    async (sfAccountIdInput, userEmail) => {
      alert(`sfAccountIdInput:${sfAccountIdInput}`);
      const organisationAllProducts: OrganisationDto =
        await fetchProductsByOrganisation(sfAccountIdInput);
      

      if (!organisationAllProducts) {
        alert(
          "Error loading organisation details. Ensure that the account ID is typed in correctly"
        );
      } else {
        setAllOrgLicences(organisationAllProducts);
        // Show next page
      }
    };

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

  const fetchProductsByOrganisation = async (sfAccountId: string) => {
    try {
      console.log("fetchProductsByOrganisation - Fetching data...");
      toast("fetchProductsByOrganisation- Fetching data...");
      alert(`${API_BASE_PATH}/api/organisations/${sfAccountId}/products`);
      const response = await fetch(
        `${API_BASE_PATH}api/organisations/${sfAccountId}/products`
      );
      console.log("fetchProductsByOrganisation - Response:", response);
      toast("fetchProductsByOrganisation - Response:");

      if (!response.ok) {
        toast("fetchProductsByOrganisation - Network response was not ok");
        throw new Error(
          "fetchProductsByOrganisation - Network response was not ok"
        );
      }
      const jsonData = await response.json();
      console.log("fetchProductsByOrganisation - JSON Data:", jsonData);
      toast("fetchProductsByOrganisation -JSON Data:");
      // setOrganisationProducts(jsonData);
      return jsonData;
    } catch (error: any) {
      console.error(
        "fetchProductsByOrganisation - Error fetching data:",
        error
      );
      toast("fetchProductsByOrganisation - Error fetching data:");
      toast(error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <br />
      <nav>
        <div
          className="nav nav-tabs d-flex justify-content-center"
          id="nav-tab"
          role="tablist"
        >
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
            <Registration
              handleRegistrationNextButton={handleRegistrationNextButton}
              API_BASE_PATH={API_BASE_PATH}
            />
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
            allOrgLicences={allOrgLicences}
            API_BASE_PATH={API_BASE_PATH}
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
