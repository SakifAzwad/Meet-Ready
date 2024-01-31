"use client"
import React from 'react'
import Menu from '../Shared/Menu'

const LeftSideBer = () => {
  return (
    <div className='h-screen left-0 top-0 sticky bg-purple-200 overflow-auto px-10 py-6 flex flex-col gap-3 max-md:hidden custom-scrolbar'>
      <Menu/>
    </div>
  )
}

export default LeftSideBer
