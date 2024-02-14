'use client'

import { cartContext } from "@/utils/Cart/CartContext";
import { UploadButton } from "@/utils/uploadthing";
import { useContext } from "react";
import Swal from "sweetalert2";

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
          // toast.success("Resume upload successful")
          Swal.fire({
            title: "Congratulation",
            text: "Resume upload successful!",
            icon: "success",
            showConfirmButton: false,
            timer: 3000,
            position: "top-end",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            },
            background: 'rgb(216 180 254)',
            color: "white",
            timerProgressBar: true,
            iconColor: "rgb(126 34 206)",
            confirmButtonColor: "rgb(168 85 247)",
          });
          setPdf(res[0].url);
        }
      }}
      onUploadError={(error) => {
        Swal.fire({
          title: "Error",
          text: `error.message`,
          icon: "error",
          showConfirmButton: false,
          timer: 5000,
          position: "top-end",
          background: 'rgb(216 180 254)',
          color: "red",
          timerProgressBar: true,
          iconColor: "rgb(126 34 206)",
          confirmButtonColor: "rgb(168 85 247)",
        });
      }}
      />
 
    </div>
  )
}

export default PdfUpload