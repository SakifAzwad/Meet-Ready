import Event from "@/models/Event";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


export const POST = async (request) =>{
  try {
    const bookingData = await request.json();
  
    console.log('data from frontend',bookingData)
    await connect();
  
    const newBookingData = new Event(bookingData)


  console.log('newBookingData', newBookingData)
   try {
      await newBookingData.save()

      // Send email to the original user who created the event
      const userEmail = bookingData.userEmail; // Change this based on your data structure
      const subject = 'Booking Information Received';
      const text = 'Thank you for receiving booking information.';

      // Call the sendMail function
      sendMail(userEmail, subject, text);

      return new NextResponse("Booking successfully made.", {status: 200})
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
    const email = new URL(request.url).searchParams.get("email")
    console.log(email)
    try {
      await connect()
      const scheduledEvent = await Event.find({userEmail: email})
      return NextResponse.json({scheduledEvent})

    } catch (error) {
      console.log('Internal server error', error)
      return new NextResponse("Internal Server Error", {status: 500})
    }
  }