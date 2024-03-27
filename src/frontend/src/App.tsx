import React, { useState } from "react";
import { Tab } from "bootstrap";
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
type handleSelectAppNextButtonFunction = () => void;
type handleSelectAppBackButtonFunction = () => void;
type handleGenerateNextButtonFunction = () => void;
type handleGenerateBackButtonFunction = () => void;
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

  const fetchProductsByOrganisation = async (sfAccountId: string) => {
    try {
      console.log("fetchProductsByOrganisation - Fetching data...");
      toast("fetchProductsByOrganisation- Fetching data...");
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

  const handleRegistrationNextButton: handleRegistrationNextButtonFunction =
    async (sfAccountIdInput, userEmail) => {
      const organisationAllProducts: OrganisationDto =
        await fetchProductsByOrganisation(sfAccountIdInput);

      if (!organisationAllProducts) {
        // TODO: Replace with a proper bootsrap alert above the 'Next Button'
        alert(
          "Error loading organisation details. Please ensure that the account ID correct."
        );
      } else {
        setAllOrgLicences(organisationAllProducts);
        // Show next page
        try {
          const selectAppTabTrigger = document.querySelector("#nav-select-tab");
          if (selectAppTabTrigger) {
            const selectAppTab = new Tab(selectAppTabTrigger);
            selectAppTab.show();
          }
        } catch (error) {
          console.log(error);
          alert(`cannot go to tab: ${error}`);
        }
      }
    };

  const handleSelectAppNextButton: handleSelectAppNextButtonFunction =
    async () => {
      if (selectedProducts.length === 0) {
        // TODO: Replace with a proper bootsrap alert above the 'Next Button'
        alert("Please make selections before proceeding.");
      } else {
        // Show next page
        try {
          const tabTrigger = document.querySelector("#nav-generate-tab");
          if (tabTrigger) {
            const tab = new Tab(tabTrigger);
            tab.show();
          }
        } catch (error) {
          console.log(error);
          alert(`cannot go to tab: ${error}`);
        }
      }
    };

  const handleSelectAppBackButton: handleSelectAppBackButtonFunction =
    async () => {
      // Show next page
      try {
        const tabTrigger = document.querySelector("#nav-registration-tab");
        if (tabTrigger) {
          const tab = new Tab(tabTrigger);
          tab.show();
        }
      } catch (error) {
        console.log(error);
        alert(`cannot go to tab: ${error}`);
      }
    };

  const handleGenerateNextButton: handleGenerateNextButtonFunction =
    async () => {
      if (selectedProducts.length === 0) {
        // TODO: Replace with a proper bootsrap alert above the 'Next Button'
        alert("Please make selections before proceeding.");
      } else {
        // Show next page
        try {
          const tabTrigger = document.querySelector("#nav-download");
          if (tabTrigger) {
            const tab = new Tab(tabTrigger);
            tab.show();
          }
        } catch (error) {
          console.log(error);
          alert(`cannot go to tab: ${error}`);
        }
      }
    };

  const handleGenerateBackButton: handleGenerateBackButtonFunction =
    async () => {
      // Show next page
      try {
        const tabTrigger = document.querySelector("#nav-selectn-tab");
        if (tabTrigger) {
          const tab = new Tab(tabTrigger);
          tab.show();
        }
      } catch (error) {
        console.log(error);
        alert(`cannot go to tab: ${error}`);
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
            handleSelectAppNextButton={handleSelectAppNextButton}
            handleSelectAppBackButton={handleSelectAppBackButton}
          />
        </div>
        <div
          className="tab-pane fade"
          id="nav-generate"
          role="tabpanel"
          aria-labelledby="nav-generate-tab"
        >
          <Generate
            selectedProducts={selectedProducts}
            handleGenerateNextButton={handleGenerateNextButton}
            handleGenerateBackButton={handleGenerateBackButton}
          />
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
      </div>
    </div>
  );
};

export default App;
