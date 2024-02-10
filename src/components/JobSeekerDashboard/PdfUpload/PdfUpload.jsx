'use client'

import { UploadButton } from "../utils/uploadthing"



const PdfUpload = () => {
  return (
    <div>
      <UploadButton 
      className="ut-button:bg-slate-600"
      
      endpoint='pdfUploader'
      onClientUploadComplete={(res) => {
console.log(res)
      }}
      onUploadError={(error) => {
        alert(`ERROR! ${error.message}`);
      }}
      />

    </div>
  )
}

export default PdfUpload