import ProductDTO from "dto/ProductDTO";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import CardHeader from "./CardHeader";
const fs = window.require("fs");
const path = window.require("path");

const Download = (props: any) => {
  const [downloadProgress, setDownloadProgress] = useState<
    { productName: string; progress: number }[]
  >([]);

  const combinations = [
    "4320515af08e67230d58f349b40f2515516229a2",
    "b60f57c2926d3006d7c01e925c073121cc9d8ff8",
    "a3dd46265201cd065d95c7ee70dc88cc8a243e57",
    "6dbb9e3667d8ed9e82df23fdc39350e4bd6fc928",
  ];

  const handleDownload = async () => {
    console.log("Starting download...");
    toast("Starting download...");

    const downloadFolder = path.join(
      process.env.HOME || "",
      "Downloads",
      "CWA-Installer",
      "components"
    );

    try {
      // Create the directory if it doesn't exist
      if (!fs.existsSync(downloadFolder)) {
        fs.mkdirSync(downloadFolder, { recursive: true });
      }

      for (let index = 0; index < props.selectedProducts.length; index++) {
        const product = props.selectedProducts[index];
        const fileName = `${product.productId}.zip`; // Generate file name
        const productLink =
          combinations[Math.floor(Math.random() * (4 - 0 + 1)) + 0];
        const downloadUrl = `https://cwa-installer-assets-test.s3.eu-west-1.amazonaws.com/combinations/${productLink}/CWA-Installer.zip`;
        const filePath = path.join(downloadFolder, fileName);

        console.log(`Downloading ${fileName} from ${downloadUrl}`);
        toast(`Downloading ${fileName} from ${downloadUrl}`);
        toast(`filePath ${filePath}`);
        toast(`process.env.HOME: ${process.env.HOME}`);

        const response = await fetch(downloadUrl);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch ${downloadUrl}. Status: ${response.status}`
          );
        }

        const totalSize = parseInt(
          response.headers.get("content-length") || "0",
          10
        );
        let downloaded = 0;

        // Check if response body is null
        if (response.body === null) {
          throw new Error("Response body is null");
        }

        const fileStream = fs.createWriteStream(filePath);

        // Create a ReadableStreamDefaultReader
        const reader = response.body.getReader();

        const readChunk = async () => {
          const { done, value } = await reader.read();

          if (done) {
            fileStream.end(); // Close the file stream when download is complete
            setDownloadProgress((prevProgress) => {
              const updatedProgress = [...prevProgress];
              updatedProgress[index].progress = 100; // Update progress to 100
              return updatedProgress;
            });
            console.log(`File ${fileName} downloaded successfully`);
            toast(`File ${fileName} downloaded successfully`);
            return;
          }

          downloaded += value.length;
          const progress = (downloaded / totalSize) * 100;

          setDownloadProgress((prevProgress) => {
            const updatedProgress = [...prevProgress];
            updatedProgress[index].progress = parseFloat(progress.toFixed(2)); // Update progress
            return updatedProgress;
          });

          fileStream.write(value); // Write the chunk to the file stream

          // Read the next chunk
          readChunk();
        };

        // Start reading the chunks
        readChunk();
      }

      console.log("All files downloaded successfully");
      toast("All files downloaded successfully");
    } catch (error: any) {
      console.error("Error downloading files:", error);
      toast.error("Error downloading files:", error.message || error);
    }
  };

  useEffect(() => {
    // Initialize downloadProgress state with file names
    const initialProgress = props.selectedProducts.map(
      (product: ProductDTO, index: number) => {
        return { productName: product.name, progress: 0 };
      }
    );
    setDownloadProgress(initialProgress);
  }, [props.selectedProducts]);

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
            cardText={"Please wait while applications are being downloaded..."}
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
                <h2 className="ng-binding">30%</h2>
                <h5>Overall download progress</h5>
              </div>
              <h2
                style={{
                  color: "#428bca !important",
                  fontWeight: "100",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                Download
              </h2>
            </div>
          </div>
          <div className="card-text">
            <button className="btn btn-primary" onClick={handleDownload}>
              Start download process
            </button>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Download progress</th>
                  </tr>
                </thead>
                <tbody>
                  {downloadProgress.map((progressData, index) => (
                    <tr key={index}>
                      <td>{progressData.productName}</td>
                      <td>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Default striped example"
                          aria-valuenow={progressData.progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar progress-bar-striped"
                            style={{ width: `${progressData.progress}%` }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* toaster */}
      <ToastContainer />
    </>
  );
};

export default Download;
