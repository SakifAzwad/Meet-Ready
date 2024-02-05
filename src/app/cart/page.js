'use client'
import { cartContext } from '@/utils/Cart/CartContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

const Cart = () => {
  const {cart, setPrice, price} = useContext(cartContext)
 
 useEffect(() => {
  if(cart === 'Free'){
    setPrice(10)
  }else if(cart === 'Premium'){
    setPrice(30)
  } else if (cart === "Enterprise"){
    setPrice(50)
  } else {
   setPrice(0)
  }
 },[cart, setPrice])
console.log('cart', cart, price)
  return (
    <div>
      <h1>Cart Page</h1>
      <p>Product Name: {cart}</p>
    <p>Price: ${price}</p>
    {
      cart.length ? 
    <Link href={'/payment'}>
    <button 
     className='btn bg-purple-300 hover:bg-purple-500'>Pay</button>
    </Link> : <button 
    disabled={!cart.length}
    className='btn '>Pay</button>
    }
    </div>
  );
}

export default 
Cart