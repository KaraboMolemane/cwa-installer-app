import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import CardHeader from "./CardHeader";
import Products from "./Products";
import { ProductDto } from "dtos/product.dto";
import productData from "../data/products.json";
import { LicenceDto } from "dtos/licence.dto";
import { OrganisationDto } from "dtos/organisation.dto";

interface SelectAppProps {
  addRemoveProducts: (e: any, product: ProductDto) => void;
  selectedProducts: ProductDto[];
  allOrgLicences: OrganisationDto;
  API_BASE_PATH: string;
  handleSelectAppNextButton: () => void;
  handleSelectAppBackButton: () => void;
}

const SelectApps: React.FC<SelectAppProps> = ({
  addRemoveProducts,
  selectedProducts,
  allOrgLicences,
  API_BASE_PATH,
  handleSelectAppNextButton,
  handleSelectAppBackButton,
}) => {
  const [organisationProducts, setOrganisationProducts] = useState<
    ProductDto[]
  >([]);

  useEffect(() => {
    if (allOrgLicences.sfAccountId != "") {
      // fetchJSONData();
      // setOrgProducts(productData);
      getOrganisationProducts();
    }
  }, [allOrgLicences]);

  const getOrganisationProducts = async () => {
    try {
      const licenceProducts = await fetchLicenceProducts();
      const bundleProducts = await fetchBundleProducts();
      let orgProducts: ProductDto[] = [];
      orgProducts = bundleProducts;

      // Merge licenceProducts and bundleProducts to get orgProducts
      // Where there are product duplicates, only take one and merge the licences
      licenceProducts.forEach((product: ProductDto) => {
        const index = orgProducts.findIndex(
          (orgProduct) => orgProduct.productId === product.productId
        );
        if (index > -1) {
          orgProducts[index].licences = [
            ...orgProducts[index].licences,
            ...product.licences,
          ];
        } else {
          orgProducts.push(product);
        }
      });

      // filter out products that the organisation does not own - PROBE
      orgProducts = orgProducts.filter((product) => {
        const probeLicences: LicenceDto[] = [];

        product.licences.forEach((licence) => {
          if (
            licence.licenceKey === "422DDW" ||
            licence.licenceKey === "79Z465" ||
            licence.licenceKey === "AR49PQ" ||
            licence.licenceKey === "DL1I7E" ||
            licence.licenceKey === "KN9N1Y" ||
            licence.licenceKey === "TR34CP"
          ) {
            probeLicences.push(licence);
          }
        });

        return (
          JSON.stringify(product.licences) !== JSON.stringify(probeLicences)
        );
      });

      const organisationAllProducts = allOrgLicences;

      // filter out products that the organisation does not own - CWWP
      orgProducts = orgProducts.filter((product) => {
        let keepProduct = false;
        if (product.name.includes("Caseware Working Papers")) {
          // Determine if client's CWWP is NRV or Standard
          for (const element of organisationAllProducts.organisationProductType) {
            keepProduct =
              (element.licenceType === "Standard Licence/s" &&
                product.name.includes("eLic")) ||
              (element.licenceType.includes("NRV") &&
                product.name.includes("NRV"));

            if (keepProduct) break;
          }

          // Determine if client's CWWP is SmartSync or non-SmartSync
          if (!product.name.includes("SmartSync")) {
            if (orgProducts.some((e) => e.name.includes("SmartSync"))) {
              keepProduct = false;
            }
          }
        } else {
          keepProduct = true;
        }

        return keepProduct;
      });

      // All orgs should have the default other products (pervasive and quickbooks)
      // https://cqsauditsoftware.atlassian.net/browse/GM-6664
      const quickBooksProductId = "2vxa9lcf-1v4pc5xf-1gc042p7-kl6h8bg0";
      orgProducts.push(await fetchProduct(quickBooksProductId));

      const pervesaiveExportUtProductId = "xt7j8pe4-kw2tft55-4a0rckxl-hxpxcz00";
      orgProducts.push(await fetchProduct(pervesaiveExportUtProductId));

      // EasyAdd-Ons is only shown if the client owns (any) IDEA
      const ideaNetworkProductId = "kha4x9mt-6o2y9g18-ao2ts25o-gktwn970";
      const ideaElicProductId = "3xtzv5c4-79e11tin-6a2vtz2o-2rmdkspx";
      const easyAddProductId = "1ku3e8rx-ye8139sg-xu8sf2hm-8zl508y0";
      for (const element of orgProducts) {
        if (
          element.productId === ideaNetworkProductId ||
          element.productId === ideaElicProductId
        ) {
          orgProducts.push(await fetchProduct(easyAddProductId));
          break;
        }
      }

      // DataStore is only shown if client owns (any) CWWP
      const dataStoreProductId = "a1m3f5dm-7vc6hbfz-qlx0i1by-6qyszyo0";
      const cwwpProductIds = [
        "d1ggrmcj-hb45xwwv-z67yso1r-3s4hmb9i",
        "1qkkwpj4-1uvq6o5u-gvfmtrxz-xhfrso00",
        "vwnefvpw-opyhxbve-7hlb2e6r-v7e7th00",
        "p5xixxpv-vrvpkqmy-4bki9kp2-rjql4600",
      ];

      for (const element of orgProducts) {
        if (
          element.name.includes("Caseware Working Papers") &&
          cwwpProductIds.includes(element.productId)
        ) {
          orgProducts.push(await fetchProduct(dataStoreProductId));
          break;
        }
      }

      // Sort products by type
      orgProducts.sort((a, b) => (a.type > b.type ? 1 : -1));

      setOrganisationProducts(orgProducts);
    } catch (error: any) {
      console.error("Error fetching data:", error);
      toast("Error fetching data:");
      toast(error.message);
      alert(error.message);
    }
  };

  const fetchJSONData = async () => {
    try {
      console.log("Fetching data...");
      toast("Fetching data...");
      const response = await fetch("http://localhost:3000/api/data");
      console.log("Response:", response);
      toast("Response:");

      if (!response.ok) {
        toast("Network response was not ok");
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      console.log("JSON Data:", jsonData);
      toast("JSON Data:");
      // setOrganisationProducts(jsonData);
      return response;
    } catch (error: any) {
      console.error("Error fetching data:", error);
      toast("Error fetching data:");
      toast(error.message);
      alert(error.message);
    }
  };

  const fetchLicenceProducts = async () => {
    try {
      console.log("fetchLicenceProducts - Fetching data...");
      toast("fetchLicenceProducts- Fetching data...");
      const response = await fetch(
        `${API_BASE_PATH}/api/organisations/${allOrgLicences.sfAccountId}/licenceProducts`
      );
      console.log("fetchLicenceProducts-Response:", response);
      toast("fetchLicenceProducts - Response:");

      if (!response.ok) {
        toast("fetchLicenceProducts - Network response was not ok");
        throw new Error("fetchLicenceProducts - Network response was not ok");
      }
      const jsonData = await response.json();
      console.log("fetchLicenceProducts - JSON Data:", jsonData);
      toast("fetchLicenceProducts -JSON Data:");
      // setOrganisationProducts(jsonData);
      return jsonData;
    } catch (error: any) {
      console.error("fetchLicenceProducts - Error fetching data:", error);
      toast("fetchLicenceProducts - Error fetching data:");
      toast(error.message);
      alert(error.message);
    }
  };

  const fetchBundleProducts = async () => {
    try {
      console.log("fetchBundleProducts - Fetching data...");
      toast("fetchBundleProducts- Fetching data...");
      const response = await fetch(
        `${API_BASE_PATH}/api/organisations/${allOrgLicences.sfAccountId}/bundleProducts`
      );
      console.log("fetchBundleProducts - Response:", response);
      toast("fetchBundleProducts - Response:");

      if (!response.ok) {
        toast("fetchBundleProducts - Network response was not ok");
        throw new Error("fetchBundleProducts - Network response was not ok");
      }
      const jsonData = await response.json();
      console.log("fetchBundleProducts - JSON Data:", jsonData);
      toast("fetchBundleProducts -JSON Data:");
      // setOrganisationProducts(jsonData);
      return jsonData;
    } catch (error: any) {
      console.error("fetchBundleProducts - Error fetching data:", error);
      toast("fetchBundleProducts - Error fetching data:");
      toast(error.message);
      alert(error.message);
    }
  };

  const fetchProduct = async (productId: string) => {
    try {
      console.log("fetchProduct - Fetching data...");
      toast("fetchProduct- Fetching data...");
      const response = await fetch(
        `${API_BASE_PATH}/api/products/${productId}`
      );
      console.log("fetchProduct - Response:", response);
      toast("fetchProduct - Response:");

      if (!response.ok) {
        toast("fetchProduct - Network response was not ok");
        throw new Error("fetchProduct - Network response was not ok");
      }
      const jsonData = await response.json();
      console.log("fetchProduct - JSON Data:", jsonData);
      toast("fetchProduct -JSON Data:");
      // setOrganisationProducts(jsonData);
      return jsonData;
    } catch (error: any) {
      console.error("fetchProduct - Error fetching data:", error);
      toast("fetchProduct - Error fetching data:");
      toast(error.message);
      alert(error.message);
    }
  };

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
            cardText={
              "Please select the applications you would like to package & download. Your current licence statement has been pre-populated for your convenience."
            }
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
                <h2 className="ng-binding">{selectedProducts.length}</h2>
                <h5>Selected</h5>
              </div>
              <h2
                style={{
                  color: "#428bca !important",
                  fontWeight: "100",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                {allOrgLicences.name}
              </h2>
            </div>
          </div>
          <div className="card-text">
            {/* Show organisation products */}
            <Products
              orgProducts={organisationProducts}
              addRemoveProducts={addRemoveProducts}
            />
          </div>
          <div
            className="d-grid gap-2 d-md-flex justify-content-md-end"
            style={{ marginTop: "1%" }}
          >
            <button
              className="btn btn-primary me-md-2"
              type="button"
              onClick={handleSelectAppBackButton}
            >
              Back
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSelectAppNextButton}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {/* toaster */}
      <ToastContainer />
    </>
  );
};

export default SelectApps;
