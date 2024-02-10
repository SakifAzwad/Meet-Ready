'use client'

import { UploadDropzone } from "@/utils/uploadthing"

const VideoUpload = () => {
  return (
    <div>
      <UploadDropzone
      className="ut-button:bg-slate-600"
      endpoint='videoUploader'
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

export default VideoUpload