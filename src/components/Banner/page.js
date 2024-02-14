"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import Image from "next/image";

const imageList = [
  'https://i.ibb.co/19mXW8C/laptops-593296-1280.jpg',
  'https://i.ibb.co/YTV9VX3/austin-distel-g-UIJ0-Ysz-Pig-unsplash.jpg',
  'https://i.ibb.co/YTV9VX3/austin-distel-g-UIJ0-Ysz-Pig-unsplash.jpg'
]


const page = () => {
  return (
  
      <>
        <section data-testid='bannerPage'>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          {
            imageList.map(image => (
              <SwiperSlide key={image}>
              <Image
              loading = 'lazy'
              quality={100}
                src={image}
                width={1200}
                height={500}
                alt="logo"
                className="w-full"
              />
            </SwiperSlide>
            ))
          }
        
          
        </Swiper>
      </section>
      </>
      

  );
};

export default page;

