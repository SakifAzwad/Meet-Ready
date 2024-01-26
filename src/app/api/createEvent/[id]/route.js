import CreateEvent from "@/models/CreateEvent"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (request, {params}) => {
  const {id} = params
  console.log(id)
  await connect()
  try {
    const singleEvent = await CreateEvent.findById(id)
    console.log('single event',singleEvent)
    return NextResponse.json({singleEvent}, {status:200})
  } catch (error) {
    console.log('Internal server error', error)
    return new NextResponse("Internal Server Error", {status: 500})
  }
}

export const PUT = async(request, {params}) => {
  const {id} = params;
  const {editedData} = await request.json()
  console.log(editedData)
  const eventName= editedData.eventName
  const eventSlug=editedData.eventSlug
  const duration=editedData.duration
  const location=editedData.location
  const schedule=editedData.schedule
  const link=editedData.link
  const email=editedData.email
  await connect()
  try {
    const res = await CreateEvent.findByIdAndUpdate(id, {eventName,eventSlug,duration, location, schedule, link, email})
    console.log('res',res)
    return new NextResponse(
      "Update successfull"
    )
  } catch (error) {
    console.log('Internal server error', error)
    return new NextResponse("Internal Server Error", {status: 500})
  }
}