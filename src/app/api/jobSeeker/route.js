import CreateProfile from "@/models/CreateProfile";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const email = new URL(request.url).searchParams.get("email");
    const newProfileData = await request.json();
    await connect();
    const profileData = new CreateProfile(newProfileData);
    try {
      const dataExist = await CreateProfile.findOne({ loginEmail: email });
      if (!dataExist) {
        await profileData.save();
        return new NextResponse("Profile data saved", { status: 200 });
      } else {
        return new NextResponse("Profile Exist", { status: 200 });
      }
    } catch (error) {
      console.log(error);
      return new NextResponse(error, { status: 500 });
    }
  } catch (error) {
    console.log("Internal server error", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const GET = async (request) => {
  try {
    const email = new URL(request.url).searchParams.get("email");
    await connect()
    const profile = await CreateProfile.findOne({loginEmail: email})
    return NextResponse.json({profile})
  } catch (error) {
    console.log('Internal server error', error)
      return new NextResponse("Internal Server Error", {status: 500})
  }
}

export const PATCH = async (request) => {
  const email = new URL(request.url).searchParams.get("email");
  console.log('email', email)
  try {
    await connect()
    try {
      const res = await CreateProfile.findOne({loginEmail: email})
      console.log(res)
      console.log(res.publishableLink)
      if(!res.publishableLink){
        console.log('hello', res._id)
        const link = `http://local-host:3000/publicProfile/${res._id}`
        console.log(link)
        const update = await CreateProfile.findOneAndUpdate({loginEmail: email}, {publishableLink: link})
        return new NextResponse("Publishable Link Update", { status: 200 });
      }else if (res.publishableLink){
        return new NextResponse("Publishable Link Already Available", { status: 200 });
      }
    } catch (error) {
      return new NextResponse("Error in Link Publish", { status: 500 });
    }
  } catch (error) {
    console.log('Internal server error', error)
    return new NextResponse("Internal Server Error", {status: 500})
  }
}