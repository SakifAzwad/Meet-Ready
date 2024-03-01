import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        console.log(credentials);
        try {
          await connect();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }
          console.log(user);
          console.log(user.name, user.password);
          const passwordsMatch = await bcrypt.compare(password, user.password);

          console.log(passwordsMatch);
          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        // console.log('user name and email', name, email)
        // console.log(user)
        try {
          await connect();
          const userExist = await User.findOne({ email });
          console.log("does user exist", userExist);
          if (!userExist) {
            //Todo use this when active live site https://meet-ready.vercel.app/
            //Todo use this when active local site http://localhost:3000/
            const role = "newUser";
            console.log("role", role);
            const res = await fetch("https://meet-ready.vercel.app/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                role,
              }),
            });
            console.log(res);
            if (res.ok) {
              return user;
            }
          }

          return user;
        } catch (error) {
          console.log(error);
        }
      }
      if (account.provider === "credentials") {
        return user;
      }
    },
    async jwt({ token, user }) {
      return token;
    },
    async session({ session, token }) {
      await connect();
      const dbUser = await User.findOne({ email: token.email });
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.role = dbUser.role;
      // console.log('session', session)
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
