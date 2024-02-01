import CreateEvent from "@/models/CreateEvent";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


// single event get route
export const GET = async (request, { params }) => {
  const { id } = params;
  // console.log(id)
  await connect();
  try {
    const singleEvent = await CreateEvent.findById(id);
    console.log("single event", singleEvent);
    return NextResponse.json({ singleEvent }, { status: 200 });
  } catch (error) {
    console.log("Internal server error", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};


// event delete route

export const DELETE = async(request, {params}) => {
  const {id} = params
  await connect()
  try {
    const deleteEvent = await CreateEvent.findByIdAndDelete(id)
    return NextResponse.json("Item Deleted", {status: 200})
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

// Change status of event route

export const PATCH = async(request, {params}) => {
  const { id } = params;
  const  eventStatus  = await request.json()
  console.log(eventStatus)
  await connect()
  try {
    const res = await CreateEvent.findByIdAndUpdate(id,{eventStatus})
    return NextResponse.json("Item Deleted", {status: 200})
  } catch (error) {
    
  } console.log(error)
  return new NextResponse("Internal Server Error", { status: 500 });
}


// edit event put route
export const PUT = async (request, { params }) => {
  const { id } = params;
  console.log(id)
  const { editedEventInfo } = await request.json();
  console.log(editedEventInfo);
  const eventTitle = editedEventInfo.eventTitle;
  const eventSlug = editedEventInfo.eventSlug;
  const eventDuration = editedEventInfo.eventDuration;
  const eventLocation = editedEventInfo.eventLocation;
  const meetingLink = editedEventInfo.meetingLink;
  const email = editedEventInfo.email;
  const eventDay = editedEventInfo.eventDay
  const fromTime = editedEventInfo.fromTime
  const toTime = editedEventInfo.toTime
  const eventDate = editedEventInfo.eventDate


  await connect();
  try {
    const res = await CreateEvent.findByIdAndUpdate(id, { eventTitle,
      eventSlug,
      eventDuration,
      eventLocation,
      meetingLink,
      email,eventDay,
      fromTime,
      toTime,
      eventDate})
    console.log('res',res)
    return new NextResponse(
      {status: 200}
    )
  } catch (error) {
    console.log('Internal server error', error)
    return new NextResponse("Internal Server Error", {status: 500})
  }
};
