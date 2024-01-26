import connect from "@/utils/db";
import { NextResponse } from "next/server";
import CreateEvent from "@/models/CreateEvent";
import { trace } from "next/dist/trace";


export const POST = async (request) =>{
try {
  const newEventData = await request.json();

  console.log(newEventData)
  await connect();

  const newEvent = new CreateEvent(newEventData)

 try {
    await newEvent.save()
    return new NextResponse("Event is Created", {status: 200})
  } catch (error) {
    console.log(error)
    return new NextResponse(error, {status: 500})
  }
} catch (error) {
  console.log('Internal server error', error)
  return new NextResponse("Internal Server Error", {status: 500})
}
}

export const GET = async (request) => {
  await connect()
  const email = new URL(request.url).searchParams.get("email");
  console.log(email)
  try {
    const myEvent = await CreateEvent.find({email})
    console.log(myEvent)
    return NextResponse.json({myEvent})
  } catch (error) {
    console.log('Internal server error', error)
    return new NextResponse("Internal Server Error", {status: 500})
  }
}