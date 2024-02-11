import Image from 'next/image'
import React from 'react'

const UserImage = ({userImage}) => {
  return (
    <Image 
    src={userImage}
    alt='User Image'
    height={100}
    width={100}
    className='rounded-lg border border-purple-500 items-center'
    />
  )
}

export default UserImage