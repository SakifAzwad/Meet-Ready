/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/Banner/Banner";
import Banner2 from "@/components/Banner/Banner2";
import Banner3 from "@/components/Banner/Banner3";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";




export default function Home() {
  return (
    

<main className="bg-gradient-to-r from-[#E7F1FE] via-[#ECF0FE] to-[#F5EEFF]">
<div>
  <h1>Docs</h1>

</div>
<Navbar></Navbar>
<Banner></Banner>
<Banner2></Banner2>
<Banner3></Banner3>
<Footer></Footer>
</main>
  );
}
