'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useSession } from "next-auth/react"

const Profile = () => {
  const session = useSession()
  const email = session?.data?.user?.email
  console.log(email)
  //  Data get function

  const getMyProfile = async(email) => {
    try {
      const res = await axios.get(`/api/jobSeeker?email=${email}`)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  // tanstack query data fetch

  const {data, isLoading } = useQuery({
    queryKey:['getJobSeekerProfile'],
    queryFn:() => getMyProfile(email)
  })
  
  if(!email || isLoading){
    return <p>Loading.......</p>
  }

  console.log(data?.profile)
  return (
    <div className='text-7xl flex justify-center items-center'>Profile</div>
  )
}

export default Profile