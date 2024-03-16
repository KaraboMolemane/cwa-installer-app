import React, { useState, useEffect } from "react";
import Products from "./Products";
import ProductDTO from "dto/ProductDTO";

function SelectApps() {
  const [orgProducts, setOrgProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
  // Hard coded data
  setOrgProducts([
    {
      "productId": "7f69pus0-i5w2br6c-yv0no35e-v30fe5i0",
      "name": "SME (English) incl. XBRL",
      "version": "2023_1 [Probe]nl",
      "priority": 6,
      "description": "**International Financial Reporting Standards for small and medium-sized entities (IFRS for SMEs)**\n\nThe SME product enables companies to prepare an automated set of statutory financial statements that is SME compliant.  It also includes iXBRL to enable users to produce CIPC compliant iXBRL reports.\n\nAdditional solutions available in the product is Consolidations.",
      "type": "tmpl",
      "notification": "New!",
      "createdAt": "2023-12-13T05:59:17.978Z",
      "updatedAt": "2024-03-07T12:34:17.250Z",
      "licences": [
          {
              "sfLicenceId": "01t20000001rZmEAAU",
              "sfProductCode": "ATSMCCAN",
              "tagName": "Close Corporation",
              "licenceKey": "451364",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:37.081Z",
              "updatedAt": "2024-03-14T05:42:55.957Z"
          },
          {
              "sfLicenceId": "01t5I000000kslfQAA",
              "sfProductCode": "ATPRRPUN",
              "tagName": "Probe MMX Review",
              "licenceKey": "422DDW",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:37.102Z",
              "updatedAt": "2024-03-14T05:42:55.902Z"
          },
          {
              "sfLicenceId": "01t5I000002oF3UQAU",
              "sfProductCode": "ASSMECBN",
              "tagName": "Caseware SME Bundle",
              "licenceKey": "454BCD",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:37.110Z",
              "updatedAt": "2024-03-14T05:42:55.442Z"
          },
          {
              "sfLicenceId": "01t20000001rZppAAE",
              "sfProductCode": "AKCWWPAN",
              "tagName": "SAIPA",
              "licenceKey": "Supplied Separately",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:36.957Z",
              "updatedAt": "2024-03-14T05:42:55.448Z"
          },
          {
              "sfLicenceId": "01t20000001rZlvAAE",
              "sfProductCode": "ATPROBAN",
              "tagName": "Probe MMX",
              "licenceKey": "TR34CP",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:37.071Z",
              "updatedAt": "2024-03-14T05:42:55.960Z"
          },
          {
              "sfLicenceId": "01t20000003BuCFAA0",
              "sfProductCode": "ATPRRVAN",
              "tagName": "Probe MMX Review",
              "licenceKey": "422DDW",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:36.999Z",
              "updatedAt": "2024-03-14T05:42:55.966Z"
          },
          {
              "sfLicenceId": "01t20000001sDa0AAE",
              "sfProductCode": "ATPRRUAN",
              "tagName": "Probe MMX Review",
              "licenceKey": "422DDW",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:36.968Z",
              "updatedAt": "2024-03-14T05:42:55.968Z"
          },
          {
              "sfLicenceId": "01t20000001rZmGAAU",
              "sfProductCode": "ATSMPBAN",
              "tagName": "Body Corporate",
              "licenceKey": "454335",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:37.080Z",
              "updatedAt": "2024-03-14T05:42:55.869Z"
          },
          {
              "sfLicenceId": "01t5I000000kslkQAA",
              "sfProductCode": "ATPRRPUR",
              "tagName": "Probe MMX Review",
              "licenceKey": "422DDW",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:37.103Z",
              "updatedAt": "2024-03-14T05:42:55.902Z"
          },
          {
              "sfLicenceId": "01t20000001rZwlAAE",
              "sfProductCode": "ATPRPRAN",
              "tagName": "Probe MMX Premium",
              "licenceKey": "28Q59I",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:36.961Z",
              "updatedAt": "2024-03-14T05:42:55.963Z"
          },
          {
              "sfLicenceId": "01t20000003BmNOAA0",
              "sfProductCode": "ATPRMSAN",
              "tagName": "Probe MMX IFRS-SME",
              "licenceKey": "KN9N1Y",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:36.996Z",
              "updatedAt": "2024-03-14T05:42:55.961Z"
          },
          {
              "sfLicenceId": "01t200000051HjVAAU",
              "sfProductCode": "ATPRRVAR",
              "tagName": "Probe MMX Review",
              "licenceKey": "422DDW",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:37.014Z",
              "updatedAt": "2024-03-14T05:42:55.966Z"
          },
          {
              "sfLicenceId": "01t20000001rZxFAAU",
              "sfProductCode": "ATPRRMAN",
              "tagName": "Probe MMX IFRS",
              "licenceKey": "DL1I7E",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:36.962Z",
              "updatedAt": "2024-03-14T05:42:55.961Z"
          },
          {
              "sfLicenceId": "01t20000001sIcJAAU",
              "sfProductCode": "ATSMSOAN",
              "tagName": "Sole",
              "licenceKey": "443251",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:36.972Z",
              "updatedAt": "2024-03-14T05:42:55.481Z"
          },
          {
              "sfLicenceId": "01t20000001t9fWAAQ",
              "sfProductCode": "ATPRRTCN",
              "tagName": "Probe Compilation",
              "licenceKey": "79Z465",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:36.990Z",
              "updatedAt": "2024-03-14T05:42:55.885Z"
          },
          {
              "sfLicenceId": "01t20000001sDZgAAM",
              "sfProductCode": "ATPRRU5N",
              "tagName": "Probe MMX Review",
              "licenceKey": "422DDW",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:36.967Z",
              "updatedAt": "2024-03-14T05:42:55.967Z"
          },
          {
              "sfLicenceId": "01t20000001t9fMAAQ",
              "sfProductCode": "TBD-COMP5-N",
              "tagName": "Probe MMX Compilation",
              "licenceKey": "79Z465",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:36.989Z",
              "updatedAt": "2024-03-14T05:42:55.461Z"
          },
          {
              "sfLicenceId": "01t20000001rZpzAAE",
              "sfProductCode": "AKSSOLAN",
              "tagName": "Sole",
              "licenceKey": "443251",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:36.958Z",
              "updatedAt": "2024-03-14T05:42:55.451Z"
          },
          {
              "sfLicenceId": "01t20000001sIbGAAU",
              "sfProductCode": "ATSMPRAN",
              "tagName": "Partnership",
              "licenceKey": "443251",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:36.970Z",
              "updatedAt": "2024-03-14T05:42:55.876Z"
          },
          {
              "sfLicenceId": "01t20000001rZmNAAU",
              "sfProductCode": "ATSMTRAN",
              "tagName": "Trust",
              "licenceKey": "477583",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:37.083Z",
              "updatedAt": "2024-03-14T05:42:55.958Z"
          },
          {
              "sfLicenceId": "01t20000001rZpuAAE",
              "sfProductCode": "AKSCCPAN",
              "tagName": "Close Corporation",
              "licenceKey": "451364",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:36.958Z",
              "updatedAt": "2024-03-14T05:42:55.450Z"
          },
          {
              "sfLicenceId": "01t20000001rZmIAAU",
              "sfProductCode": "ATSMPTON",
              "tagName": "Company",
              "licenceKey": "455785",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:37.081Z",
              "updatedAt": "2024-03-14T05:42:55.870Z"
          },
          {
              "sfLicenceId": "01t20000001rZmJAAU",
              "sfProductCode": "ATSCRPAN",
              "tagName": "Company",
              "licenceKey": "455785",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:37.082Z",
              "updatedAt": "2024-03-14T05:42:55.957Z"
          },
          {
              "sfLicenceId": "01t5I000000kCzHQAU",
              "sfProductCode": "AKSACSBN",
              "tagName": "Caseware SME Bundle (Excluding Cloud)",
              "licenceKey": "454BCD",
              "existsInSF": true,
              "createdAt": "2024-01-16T11:44:37.099Z",
              "updatedAt": "2024-03-14T05:42:55.411Z"
          }
      ],
      "versions": [
          {
              "versionId": "bd07e21e-ebc3-4d07-a9ee-7d914b50097a",
              "productId": "7f69pus0-i5w2br6c-yv0no35e-v30fe5i0",
              "description": "2023_1 [Probe]nl",
              "size": 359444246,
              "hash": "005f2165cbe796445fbe7b9840b0c374ae8f16b9",
              "md5": "b085aa4badd674f94cc11e4a40abc3e2",
              "createdAt": "2024-01-12T10:10:14.840Z",
              "updatedAt": "2024-01-12T10:10:14.840Z"
          }
      ],
      "requiredProducts": []
  },
  {
    "productId": "p5xixxpv-vrvpkqmy-4bki9kp2-rjql4600",
    "name": "Caseware Working Papers SmartSync (NRV)",
    "version": "2023.00.056R2",
    "priority": 1,
    "description": "**Caseware Working Papers** \n\nA highly flexible engagement software that provides you with everything you would expect from an assurance and reporting tool plus much, much more! Engagements are planned, performed and reviewed entirely on screen, completely eliminating paper.",
    "type": "cwi",
    "notification": "New!",
    "createdAt": "2023-12-13T05:59:17.978Z",
    "updatedAt": "2024-03-07T12:34:17.250Z",
    "licences": [
        {
            "sfLicenceId": "01t5I000000kCzRQAU",
            "sfProductCode": "AKCSMOBN",
            "tagName": "Caseware SME Bundle (Afrikaans)",
            "licenceKey": "454BCD",
            "existsInSF": true,
            "createdAt": "2024-01-16T11:44:36.956Z",
            "updatedAt": "2024-03-14T05:42:55.247Z"
        },
        {
            "sfLicenceId": "01t2000000BXjVLAA1",
            "sfProductCode": "ASSMSBAN",
            "tagName": "SmartSync",
            "licenceKey": "SmartSync version of Caseware supplied",
            "existsInSF": true,
            "createdAt": "2024-01-16T11:44:36.977Z",
            "updatedAt": "2024-03-14T05:42:55.980Z"
        },
        {
            "sfLicenceId": "01t20000001rhcfAAA",
            "sfProductCode": "ASSMSYAN",
            "tagName": "SmartSync",
            "licenceKey": "SmartSync version of Caseware supplied",
            "existsInSF": true,
            "createdAt": "2024-01-16T11:44:36.966Z",
            "updatedAt": "2024-03-14T05:42:55.930Z"
        }
    ],
    "versions": [
        {
            "versionId": "132c6436-78db-4467-8214-f8843b3b4ec9",
            "productId": "p5xixxpv-vrvpkqmy-4bki9kp2-rjql4600",
            "description": "2023.00.056R2",
            "size": 360802626,
            "hash": "b3129dca4e0af940fa03ae6739a58674ad6d4f90",
            "md5": "399882c87b7882f2dd8eff497fdbeeb0",
            "createdAt": "2024-02-29T11:08:28.994Z",
            "updatedAt": "2024-02-29T11:08:28.994Z"
        }
    ],
    "requiredProducts": []
},
{
  "productId": "flsujki1-sshfylsp-fqjh11qm-lb91sn00",
  "name": "ITM - Individual Tax Module",
  "version": '',
  "priority": 2,
  "description": "The built-in tax calculator allows you to easily complete individual tax returns (ITR12) and then submit in bulk directly to eFiling.",
  "type": "cwi",
  "notification": "New!",
  "createdAt": "2024-02-01T08:56:07.930Z",
  "updatedAt": "2024-02-01T08:56:07.930Z",
  "licences": [
      {
          "sfLicenceId": "01t20000003Bn5pAAC",
          "sfProductCode": "ABITFNAN",
          "tagName": "Individual Tax Module",
          "licenceKey": "3ABF60",
          "existsInSF": true,
          "createdAt": "2024-01-16T11:44:36.998Z",
          "updatedAt": "2024-03-14T05:42:55.894Z"
      },
      {
          "sfLicenceId": "01t20000003Bn5lAAC",
          "sfProductCode": "ABITLNAN",
          "tagName": "Individual Tax Module",
          "licenceKey": "3ABF60",
          "existsInSF": true,
          "createdAt": "2024-01-16T11:44:36.997Z",
          "updatedAt": "2024-03-14T05:42:55.894Z"
      },
      {
          "sfLicenceId": "01t20000003Bn5kAAC",
          "sfProductCode": "ABITSUAN",
          "tagName": "Individual Tax Module",
          "licenceKey": "3ABF60",
          "existsInSF": true,
          "createdAt": "2024-01-16T11:44:36.996Z",
          "updatedAt": "2024-03-14T05:42:55.886Z"
      }
  ],
  "versions": [],
  "requiredProducts": []
},


  ]);
},[])

  return (
    <>
      <div
        style={{
          paddingLeft: "17rem !important",
          paddingRight: "17rem !important",
        }}
      >
        <div className="card-body">
          <div className="image-header">
            <img
              style={{ float: "left" }}
              src="https://install.cqscloud.com/images/cwa-2018.png"
            />
            <img
              style={{ float: "right" }}
              src="https://install.cqscloud.com/images/adaptit-2018.png"
            />
          </div>
        </div>
        <div>
          <h3
            className="card-title p-3 text-center"
            style={{ backgroundColor: "#51626f", color: "white" }}
          >
            Select Apps
          </h3>
          <div className="card custom-card-border">
            <h6
              className="card-title p-3 text-center"
              style={{
                backgroundColor: "#51626f",
                color: "white",
                fontSize: "15px",
              }}
            >
              Please select the applications you would like to package &
              download. Your current licence statement has been pre-populated
              for your convenience.
            </h6>
            <div className="card-body">
              <div>
                <div
                  className="pull-right text-right info-popup"
                  style={{ float: "right", textAlign: "center" }}
                >
                  <h2 className="ng-binding">
                    {/* {{ selectedProductsCount$ | async }} */}
                  </h2>
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
              {/* Show organisation products */}
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
                style={{ paddingLeft: "40px", paddingRight: "40px" }}
              ></div>
              <Products orgProducts={orgProducts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectApps;
