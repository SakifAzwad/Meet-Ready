/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/Banner/Banner";
import Banner2 from "@/components/Banner/Banner2";
import Banner3 from "@/components/Banner/Banner3";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {


  return (
    <main className="bg-gradient-to-r from-[#E7F1FE] via-[#ECF0FE] to-[#F5EEFF]">
      <Banner data-testid="banner" />
      <Banner2 />
      <Banner3 />
      <Footer />
    </main>
  );
}
