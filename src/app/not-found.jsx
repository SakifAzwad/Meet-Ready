'use client';
import Lottie from "lottie-react";
import ErrorAnimation from "../../public/404.json";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", maxHeight: "100vh" }}>
      <div>
        <Lottie
          animationData={ErrorAnimation}
          style={{
            maxWidth: "600px",
            maxHeight: "600px",
            margin: "0 auto",
          }}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            marginTop: "20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
                router.push("/");
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
