import CreateEvent from "@/models/CreateEvent";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


// single event get route
export const GET = async (request, { params }) => {
  const { id } = params;
  await connect();
  try {
    const singleEvent = await CreateEvent.findById(id);
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
  const  eventStatus  = "Finished"
  await connect()
  try {
    const res = await CreateEvent.findByIdAndUpdate(id,{eventStatus})
    return NextResponse.json("Item Updated", {status: 200})
  } catch (error) {
    
  } console.log(error)
  return new NextResponse("Internal Server Error", { status: 500 });
}


// edit event put route
export const PUT = async (request, { params }) => {
  const { id } = params;
  const editedEventInfo  = await request.json();
  const eventTitle = editedEventInfo.eventTitle;
  const eventDuration = editedEventInfo.eventDuration;
  const meetingLink = editedEventInfo.meetingLink;
  const meetingLocation = editedEventInfo.meetingLocation;
  const email = editedEventInfo.email;
const dateAndTimeArray = editedEventInfo.dateAndTimeArray;
  const eventStatus = editedEventInfo.eventStatus;
  const fromDate =  editedEventInfo.fromDate
  const toDate =  editedEventInfo.toDate
  const userName =  editedEventInfo.userName

  await connect();
  try {
    const res = await CreateEvent.findByIdAndUpdate(id, { eventTitle,
      eventDuration,
      meetingLink, meetingLocation, email, dateAndTimeArray, eventStatus, fromDate, toDate, userName
    })
    return new NextResponse(
      {status: 200}
    )
  } catch (error) {
    console.log('Internal server error', error)
    return new NextResponse("Internal Server Error", {status: 500})
  }
};
