import User from "@/models/User"
import connect from "@/utils/db"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"



export const POST = async (req) => {
  try {
    const {email, password, name, role} = await req.json()
console.log('receive from google', email, name, role)
    await connect()

    const existingUser = await User.findOne({email})
    
    if(existingUser){
      return new NextResponse("Email is already in use", {status: 400})
    }

    if(password) {
      const hashedPassword = await bcrypt.hash(password, 10)

      const newUser = new User({
        name, email,
        password: hashedPassword,
        role
      })

      try {
        await newUser.save()
        return new NextResponse("User successfully created", {status: 200})
      } catch (error) {
        console.log(error)
        return new NextResponse(error, {status: 500})
      }
    } else {
      // console.log('new user hit')
     const newUser = new User ({
      name, email, role
     })

      // console.log('register', newUser)
      try {
        await newUser.save();
        return new NextResponse("User successfully created", { status: 200 });
      } catch (error) {
        console.log(error);
        return new NextResponse(error, { status: 500 });
      }
    }

  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Server Error", {status: 500})
  }
}

// Patch route for role change

export const PATCH = async (req) => {
  await connect()
  const email = new URL(req.url).searchParams.get("email")
  console.log(email)
  const {role} = await req.json()
  console.log(role)
  try {
     await User.findOneAndUpdate({email}, {role})
    return new NextResponse(`User role updated to ${role}`, {status: 200})
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}