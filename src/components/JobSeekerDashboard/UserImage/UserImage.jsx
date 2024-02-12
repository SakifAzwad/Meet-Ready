import Image from 'next/image'
import React from 'react'

const UserImage = ({userImage}) => {
  const fakeImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0QxSZCjz-8JefhrJrJwtL5i7utqDsRhv7Q&usqp=CAU'
  return (
    <Image 
    src={userImage ? userImage : fakeImage}
    alt='User Image'
    height={100}
    width={100}
    className='rounded-lg border-[4px] border-purple-500 items-center'
    />
  )
}

export default UserImage