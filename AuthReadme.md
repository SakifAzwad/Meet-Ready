# Authentication in next.js project

### Table of content
- Connecting mongodb
- Mongodb uri setup in .env file
- Creating user model
- Installation of next auth
- Installing bcrypt for password hashing
- Creating next-auth api route
- Setting up signin with email and password


### Connecting mongodb

- Go to terminal and write 
```javascript
npm install mongodb
npm install mongoose
``` 
- Create a folder as a sibling of app folder and name it utils.

- Inside the utils folder create a file name db.js/db.ts and paste following code.

```javascript
import mongoose from 'mongoose'

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
      console.log("Mongo connection successfully established.")
  } catch(error){
    throw new Error (
      "Error connecting to Mongoose")
  }
}
export default connect;
```
- At first we imported mongoose.
- A asynchronous function created.
- Inside the try block connection was setup with mongodb.
- Error block catch error and throw it.

### Mongodb uri setup in .env file

- Create a .env file. and write MONGO_URI and copy the uri from the mongodb and paste it in the file. 

### Creating user model

- Create a sibling folder of app directory and name it models and inside it create a file name User.js/User.ts.

- Paste following code in it

```javascript
import mongoose, { models } from "mongoose"

const {Schema} = mongoose;

const userSchema = new Schema(
  { 
    name:{
    type: String,
    required:true,
  },
    email:{
      type: String,
      unique: true,
      required: true, 
    },
    password: {
      type: String,
      required: false,
    },
  },
  {timestamps: true}
)


const User = models.User || mongoose.model("User", userSchema)
export default User
```
- It imported mongoose and models from mongoose.

- Created an user schema. 

- Schema contains name, email, password as string and required and email field is unique. 

- Timestamps included to get user creation and update time. 

- At last the model is exported for use in other.  


### Installation of next auth

- Go to terminal and write 
```javascript
npm install next-auth
``` 

### Installing bcrypt for password hashing

- - Go to terminal and write 
```javascript
npm install bcrypt
```

### Creating next-auth api route
- Inside the app folder create a new folder with the name of api.
- Inside the api folder create a new folder with the name of auth.
- Inside the auth folder create a new folder with the name of [...nextauth].
- Inside the [...nextauth] folder create a new file with the name of route.js/route.ts based on whether you included typescript in your project or not.


### Setting up signin with email and password

- Inside the route.js/route.ts file paste the following code.

```javascript
import connect from "@/utils/db";
import User from "@/models/User";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import NextAuth from "next-auth/next";


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "User Name",
          type: "text",
          placeholder: "Your User Name",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connect();
          const user = await User.findOne({ email });

          if (!user) {
            throw new Error("User name or password is not correct");
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            throw new Error("User name or password is not correct");
          }
         const { password, ...userWithoutPass } = user;
        return userWithoutPass;

        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

- In the above code in import section we are importing mongodb connection, also User model that we created earlier. bcrypt imported for password hashing. NextAuth and AuthOptions imported from next-auth to perform authentication process. CredentialsProvider imported from next-auth/providers/credentials to authenticate email, password authentication.

- authOptions object contains authentication information and it is exported here to use in other components. 