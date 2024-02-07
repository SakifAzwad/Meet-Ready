"use client"

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { createContext, useState } from "react"

// Create a client
const queryClient = new QueryClient()

export const queryContext = createContext()

export const QueryProvider =({children}) => {
  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)
  // console.log(cart)
  return (
    <QueryClientProvider client={queryClient}>
    {children}
    </QueryClientProvider>
  )
}