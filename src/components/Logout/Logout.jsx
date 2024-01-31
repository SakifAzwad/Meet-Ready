'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const Logout = () => {
  return (
    <a onClick={() => signOut()}
    className='cursor-pointer py-2 px-4 bg-violet-600 rounded-lg'
    >Logout</a>
  )
}

export default Logout