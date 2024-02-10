'use client'

import { UploadDropzone } from "@/utils/uploadthing"
import { UploadButton } from "../utils/uploadthing"

const ImageUpload = () => {
  return (
    <div>
      <UploadDropzone
      className="ut-button:bg-slate-600"
      endpoint='imageUploader'
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

export default ImageUpload