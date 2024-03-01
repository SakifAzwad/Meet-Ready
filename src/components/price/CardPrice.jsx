'use client'
import { CartProvider, cartContext } from "@/utils/Cart/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa6";


const CardPrice = ({dolar, popularity, learn, amount, time, svg}) => {

    const{ cart, setCart,setPrice} = useContext(cartContext)

    return (
      <div className="md:w-[300px] mx-auto rounded-lg space-y-8 shadow-xl my-20 relative p-8 bg-purple-400 hover:bg-purple-500 text-white ease-in duration-300">
        
          {/* top part  */}
          <div>
              
              {/* Price Ribbon SVG  */}
              <div className="absolute -top-4 -right-[20px] ">
                  <div className="w-full h-full relative">
                      {/* svg  */}
                      {svg}
                      {/* Price  */}
                      <div className="absolute top-8 left-7 text-white text-xl font-semibold flex flex-col">
                          <span>
                              <sub className="font-normal text-xl hover:text-white">{dolar}</sub>
                              <span className="text-2xl">{amount}</span>
                          </span>
                          <span className="text-sm font-normal hover:text-white">/{time}</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="space-y-4">
              <div className="flex flex-row">
                <p className=" text-3xl capitalize text-white">{popularity}</p>
              <button className="btn-primary ">{learn}</button>
              </div>
              <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm hover:cursor-pointer text-black font-semibold hover:text-white">
                      <FaCheck/>
                      Custom profile an more
                  </li>
                  <li className="flex items-center gap-2 text-sm text-black hover:cursor-pointer font-semibold hover:text-white">
                  <FaCheck/>
                      Custom emoji anywhere
                  </li>
                  <li className="flex items-center gap-2 text-sm text-black hover:cursor-pointer font-semibold hover:text-white">
                  <FaCheck/>
                      
                      HD video streaming
                  </li>
              </ul>
              <div className="pt-4 flex flex-col justify-center">
                  <Link href={`/cart`}>
                  <button 
                  onClick={() => {setCart(popularity),setPrice(amount)}}
                  className="w-full animate-pulse  h-16 border-2 border-sky-300 text-black font-black rounded-full hover:text-white duration-300 relative group">
                      <span className="absolute w-12 group-hover:w-[93%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
                      Buy This Plan
                  </button>
                  
                  </Link>
                  <p className="text-center text-white italic mt-2">(No credit card required)</p>
              </div>
          </div>
      </div>
    );
};
export default CardPrice;