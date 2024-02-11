'use client'

import { cartContext } from "@/utils/Cart/CartContext";
import { UploadDropzone } from "@/utils/uploadthing"
import { useContext } from "react";

const VideoUpload = () => {
  const { setVideo } = useContext(cartContext);
  return (
    <div>
      <UploadDropzone
       className="bg-purple-200 ut-label:text-purple-700 ut-allowed-content:ut-uploading:text-purple-900 ut-button:bg-purple-500 ut-button:text-white
       ut-upload-icon:text-purple-700
       
       "
      endpoint='videoUploader'
      onClientUploadComplete={(res) => {
if (res[0].serverData.message === "Video Upload Complete") {
  setVideo(res[0].url);
}
      }}
      onUploadError={(error) => {
        alert(`ERROR! ${error.message}`);
      }}
      />
    </div>
  )
}

export default VideoUpload