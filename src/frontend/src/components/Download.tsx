import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
const fs = window.require("fs");
const path = window.require("path");

const Download = (props: any) => {
  const [downloadProgress, setDownloadProgress] = useState<number[]>([]);

  const handleDownload = async () => {
    console.log("Starting download...");
    toast("Starting download...");

    const downloadFolder = path.join(process.env.HOME || "", "Downloads", "CWA-Installer", "components");

    try {
      for (let index = 0; index < props.selectedProducts.length; index++) {
        const product = props.selectedProducts[index];
        const fileName = `file${index + 1}.zip`;
        const downloadUrl = "https://cwa-installer-assets-test.s3.eu-west-1.amazonaws.com/combinations/4320515af08e67230d58f349b40f2515516229a2/CWA-Installer.zip";
        const filePath = path.join(downloadFolder, fileName);

        console.log(`Downloading ${fileName} from ${downloadUrl}`);
        toast(`Downloading ${fileName} from ${downloadUrl}`);
        toast(`filePath ${filePath}`);
        toast(`process.env.HOME: ${process.env.HOME}`)

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
      <button onClick={handleDownload}>Download Files</button>
      <div>
        {downloadProgress.map((progress: any, index: number) => (
          <p key={index}>
            File {index + 1} Download Progress: {progress}%
          </p>
        ))}
      </div>
      {/* toaster */}
      <ToastContainer />
    </>
  );
};

export default Download;
