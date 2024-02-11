"use client";

import { cartContext } from "@/utils/Cart/CartContext";
import { UploadDropzone } from "@/utils/uploadthing";
import { useContext, useState } from "react";

const ImageUpload = () => {
  const { setImage } = useContext(cartContext);
  return (
    <div>
      <UploadDropzone
        className="bg-purple-200 ut-label:text-purple-700 ut-allowed-content:ut-uploading:text-purple-900 ut-button:bg-purple-500 ut-button:text-white
      ut-upload-icon:text-purple-700
      
      "
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res[0].serverData.message === "Image Upload Complete") {
            setImage(res[0].url);
          }
        }}
        onUploadError={(error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default ImageUpload;
