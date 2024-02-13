'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'

const PublicProfile = ({params}) => {
  const id = params.id

  // Function to call data

  const getPublicProfileData = async (id) => {
    try {
      const res = await axios.get(`/api/jobSeeker/${id}`)
    return res.data.profileData
    } catch (error) {
      console.log(error)
    }
  }

  // Tanstack query to fetch data

  const {data} = useQuery({
    queryKey:['publicData'],
    queryFn: () => getPublicProfileData(id)
  })

console.log(data)
  return (
    <div>PublicProfile</div>
  )
}

export default PublicProfile