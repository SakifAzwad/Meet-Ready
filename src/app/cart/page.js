'use client'
import { cartContext } from '@/utils/Cart/CartContext';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react'

const Cart = () => {
  const {cart, setPrice, price} = useContext(cartContext)
  console.log(price)
 
//  useEffect(() => {
//   if(cart === 'Free'){
//     setPrice(price)
//   }else if(cart === 'Premium'){
//     setPrice(price)
//   } else if (cart === "Enterprise"){
//     setPrice(price)
//   } else {
//    setPrice(0)
//   }
//  },[cart, price,setPrice])
// console.log('cart', cart, price)
  return (
    <div className='text-center mx-auto justify-center items-center h-screen  bg-gradient-to-r from-[#E7F1FE] via-[#ECF0FE] to-[#F5EEFF]'>
      
      <p className='text-purple-800 text-5xl lg:pt-36 pb-12 '> {cart} Package</p>
    <p className='text-purple-800 text-3xl pb-12'>Price: ${price}</p>
    {
      cart.length ? 
    <Link href={`/payment/${price}` }>
    <button 
     className=' hover:bg-purple-500 disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-purple-400 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base"'>Proceed to Pay</button>
    </Link> : <button 
    disabled={!cart.length}
    className='btn '>Pay</button>
    }
    </div>
  );
}

export default Cart