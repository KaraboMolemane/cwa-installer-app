import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import CardHeader from "./CardHeader";
const fs = window.require("fs");
const path = window.require("path");

const Download = (props: any) => {
  const [downloadProgress, setDownloadProgress] = useState<number[]>([]);

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
        const fileName = `file${index + 1}.zip`;
        const downloadUrl =
          "https://cwa-installer-assets-test.s3.eu-west-1.amazonaws.com/combinations/4320515af08e67230d58f349b40f2515516229a2/CWA-Installer.zip";
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
              updatedProgress[index] = 100;
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
            updatedProgress[index] = parseFloat(progress.toFixed(2));
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
              <h5 className="card-title">Download</h5>
            </div>
          </div>
          <div className="card-text">
            <button onClick={handleDownload}>Download Files</button>
            <div>
              {downloadProgress.map((progress: any, index: number) => (
                <p key={index}>
                  File {index + 1} Download Progress: {progress}%
                </p>
              ))}
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
