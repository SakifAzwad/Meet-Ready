"use client"

import { createContext, useState } from "react"


export const cartContext = createContext()

export const CartProvider =({children}) => {
  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)
  const [isClicked, setIsClicked] = useState(false);
  // console.log(cart)
  const value = {cart, setCart, price, setPrice, isClicked, setIsClicked}
  return (
    <cartContext.Provider
    value={value}
    >
    {children}
    </cartContext.Provider>
  )
}