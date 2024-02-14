import CreateProfile from "@/models/CreateProfile";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

// single event get route
export const GET = async (request, { params }) => {
  const { id } = params;
  await connect();
  try {
    const profileData = await CreateProfile.findById(id);
    return NextResponse.json({ profileData }, { status: 200 });
  } catch (error) {
    console.log("Internal server error", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};