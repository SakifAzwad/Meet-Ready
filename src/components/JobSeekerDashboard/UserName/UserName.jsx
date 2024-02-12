import { useSession } from 'next-auth/react'
import React from 'react'

const UserName = () => {
  const session = useSession()
  const name = session?.data?.user?.name

  return (
    <h1 className="text-2xl text-black ">{name}</h1>
  )
}

export default UserName