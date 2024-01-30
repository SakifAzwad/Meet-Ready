import CreateEvent from "@/models/CreateEvent";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
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

export const PUT = async (request, { params }) => {
  const { id } = params;
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

  // console.log(
  //   eventTitle,
  //   eventSlug,
  //   eventDuration,
  //   eventLocation,
  //   schedule,
  //   meetingLink,
  //   email,eventDay,
  //   fromTime,
  //   toTime,
  //   eventDate
  // );
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
