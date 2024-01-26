'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const Logout = () => {
  return (
    <a onClick={() => signOut()}>Logout</a>
  )
}

export default Logout