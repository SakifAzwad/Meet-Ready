"use client";
import { cartContext } from "@/utils/Cart/CartContext";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

const Cart = () => {
  const { cart, setPrice, price } = useContext(cartContext);
  console.log(price);

  return (
    <div className="text-center mx-auto justify-center items-center h-screen  bg-gradient-to-r from-[#E7F1FE] via-[#ECF0FE] to-[#F5EEFF]">
      <p className="text-purple-800 text-5xl lg:pt-36 pb-12 ">
        {" "}
        {cart} Package
      </p>
      <p className="text-purple-800 text-3xl pb-12">Price: ${price}</p>
      {cart.length ? (
        <Link href={`/payment/${price}`}>
          <button className="text-xl w-60 rounded-lg font-bold h-16 text-white bg-purple-700 overflow-hidden relative z-10 group hover:text-black transition duration-500 ease-in-out">
            Proceed to Pay
            <span className="bg-purple-700 group-hover:scale-125 scale-0  delay-50 w-36 h-36 rounded-full absolute mx-auto my-auto inset-0 -z-10 transition duration-500 ease-in-out"></span>
            <span className="bg-purple-600 group-hover:scale-125 scale-0  delay-100 w-32 h-32 rounded-full absolute mx-auto my-auto inset-0 -z-10 transition duration-500 ease-in-out"></span>
            <span className="bg-purple-500 group-hover:scale-125 scale-0  delay-200 w-28 h-28 rounded-full absolute mx-auto my-auto inset-0 -z-10 transition duration-500 ease-in-out"></span>
            <span className="bg-purple-400 group-hover:scale-125 scale-0  delay-300 w-24 h-24 rounded-full absolute mx-auto my-auto inset-0 -z-10 transition duration-500 ease-in-out"></span>
            <span className="bg-purple-400 group-hover:scale-125 scale-0  delay-400 w-20 h-20 rounded-full absolute mx-auto my-auto inset-0 -z-10 transition duration-500 ease-in-out"></span>
          </button>
        </Link>
      ) : (
        <button disabled={!cart.length} className="btn ">
          Pay
        </button>
      )}
    </div>
  );
};

export default Cart;
