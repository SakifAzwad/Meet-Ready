'use client'
import Loading from '@/components/Loading/Loading'
import TwoPersonEditEvent from '@/components/TwoPersonEditEvent/TwoPersonEditEvent'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const EditEvent = ({params}) => {
  const id = params.id
  const [singleEventData, setSingleEventData] = useState(null)
  const [location, setLocation] = useState("");
  const [next1, setNext1] = useState(false);
  const session = useSession()
  const router = useRouter()

  const email = session?.data?.data?.user?.email

  const getSingleEventData = async(id) => {
    try {
      const res = await axios.get(`/api/createEvent/${id}`)
      return res.data.singleEvent
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const {data, isLoading} = useQuery({
    queryKey:['singleEventDataForEditEventPage'],
    queryFn:() => getSingleEventData(id)
  })

 

   const formHandler = async (e) => {
    e.preventDefault();

    const eventTitle = e.target.title.value;
    const eventSlug = e.target.slug.value;
    const eventDuration = e.target.duration.value;
    const eventDay = e.target.days.value;
    const fromTime = e.target.fromTime.value;
    const toTime = e.target.toTime.value;
    const eventDate = e.target.date.value;
    const meetingLink = e.target.meetingLink.value;
    const eventLocation = e.target.location.value;

    const editedEventInfo = {
      eventTitle,
      eventSlug,
      eventDuration,
      eventDay,
      fromTime,
      toTime,
      eventDate,
      meetingLink,
      eventLocation,
      email,
    };

    try {
      const res = await fetch(`/api/createEvent/${id}`,{
        method:"PUT",
        headers:{
          "Content-type":"application/json"
        },
        body: JSON.stringify({editedEventInfo})
      })
      if(res.status === 200) {
        console.log('Event updated successfully.')
        router.push('/dashboard/events')
      }else{
        console.log('An error occurred. Please try again.')
      }

      console.log('res', res.status)
    } catch (error) {
      console.log('Error in data put', error)
    }
  };

  const eHandle = (event) => {
    setLocation(event.target.value);
  };

// console.log(singleEventData)
if(isLoading){
  return <Loading></Loading>
}
  return (

    <TwoPersonEditEvent event={data}></TwoPersonEditEvent>
    
  )
}

export default EditEvent