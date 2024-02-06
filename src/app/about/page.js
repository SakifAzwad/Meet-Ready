import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";


const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default page;