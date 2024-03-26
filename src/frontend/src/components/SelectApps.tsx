import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import CardHeader from "./CardHeader";
import Products from "./Products";
import { ProductDto } from "dtos/product.dto";
import productData from "../data/products.json";

interface SelectAppProps {
  addRemoveProducts: (e: any, product: ProductDto) => void;
  selectedProducts: ProductDto[];
}

const SelectApps: React.FC<SelectAppProps> = ({
  addRemoveProducts,
  selectedProducts,
}) => {
  const [orgProducts, setOrgProducts] = useState<ProductDto[]>([]);

  useEffect(() => {
    fetchData();
    // setOrgProducts(productData);
  }, []);

  const fetchData = async () => {
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
      setOrgProducts(jsonData);
    } catch (error: any) {
      console.error("Error fetching data:", error);
      toast("Error fetching data:");
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
                {/* {{ (organisation$ | async)?.name }} */}
                Caseware Africa, A Division of Adapt IT (Pty) Ltd
              </h2>
            </div>
          </div>
          <div className="card-text">
            {/* Show organisation products */}
            <Products
              orgProducts={orgProducts}
              addRemoveProducts={addRemoveProducts}
            />
          </div>
        </div>
      </div>
      {/* toaster */}
      <ToastContainer />
    </>
  );
};

export default SelectApps;
