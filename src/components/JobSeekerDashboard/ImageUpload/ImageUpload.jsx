"use client";
import { cartContext } from "@/utils/Cart/CartContext";
import { UploadDropzone } from "@/utils/uploadthing";
import { useContext } from "react";
import Swal from "sweetalert2";

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
            Swal.fire({
              title: "Congratulation",
              text: "Image upload successful!",
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
            // toast.success("Image upload successful")
            setImage(res[0].url);
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
          // toast.error(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default ImageUpload;
