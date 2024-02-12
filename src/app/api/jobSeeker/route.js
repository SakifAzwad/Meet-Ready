import CreateEvent from "@/models/CreateEvent";
import CreateProfile from "@/models/CreateProfile";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const email = new URL(request.url).searchParams.get("email");
    const newProfileData = await request.json();
    newProfileData.loginEmail = email;
    await connect();

    const profileData = new CreateProfile(newProfileData);

    try {
      const dataExist = await CreateEvent.findOne({ loginEmail: email });
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
