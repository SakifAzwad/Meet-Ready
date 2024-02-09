import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";


const page = () => {
    return (
        <div className="bg-gradient-to-r from-[#E7F1FE] via-[#ECF0FE] to-[#F5EEFF]">
            <Navbar></Navbar>
            <AboutUs></AboutUs>
            <Footer></Footer>
          
        </div>
    );
};

export default page;