"use client"
import Banner from "@/components/Banner/page";
import { useEffect, useState } from "react";

const Container = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();   // Set initial state

    window.addEventListener('resize', handleResize); // Add event listener for window resize


    return () => {
      window.removeEventListener('resize', handleResize);   // Clean up the event listener when the component is unmounted
    };
  }, []); 

  return (
    // <div className='max-w-7xl mx-auto xl:px-40' style={{ width: 'calc(100% - 300px)' }}>
    //     <Banner />
    // </div>
    <div className='max-w-7xl mx-auto xl:px-40' style={{ width: isSmallScreen ? '100%' : 'calc(100% - 300px)' }}>
      <Banner />
      
    </div>
  );
};

export default Container;
