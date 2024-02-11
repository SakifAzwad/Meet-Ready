'use client'

import { cartContext } from "@/utils/Cart/CartContext";
import { UploadButton } from "@/utils/uploadthing";
import { useContext } from "react";

const PdfUpload = () => {
  const {pdf, setPdf} = useContext(cartContext)
  return (
    <div>
      <UploadButton 
       className="ut-label:text-purple-700 ut-allowed-content:ut-uploading:text-purple-900 ut-button:bg-purple-500 
       hover:ut-button:bg-purple-700 ut-button:text-white
       ut-upload-icon:text-purple-700
       "
      endpoint='pdfUploader'
      onClientUploadComplete={(res) => {
        if (res[0].serverData.message === "Pdf Upload Complete") {
          setPdf(res[0].url);
        }
      }}
      onUploadError={(error) => {
        alert(`ERROR! ${error.message}`);
      }}
      />

    </div>
  )
}

export default PdfUpload