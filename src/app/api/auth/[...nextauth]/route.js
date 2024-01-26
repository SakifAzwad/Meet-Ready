
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcrypt";
import connect from "@/utils/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connect();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }
          return user;

        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  callbacks: {
    async signIn({user, account}){
      if(account.provider === 'google'){
        const { name, email } = user;
        try {
          await connect()
          const userExists = await User.findOne({email})

          if(!userExists){
            const newUser = new User({
              name, email  })
            await newUser.save()
            return user
          }
        } catch (error) {
          console.log(error)
          return new NextResponse(error, {status: 500})
        }

      }
    }
  },  
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


