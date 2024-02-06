"use client"

import { createContext, useState } from "react"


export const cartContext = createContext()

export const CartProvider =({children}) => {
  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)
  console.log(cart)
  return (
    <cartContext.Provider
    value={{cart, setCart, price, setPrice}}
    >
    {children}
    </cartContext.Provider>
  )
}