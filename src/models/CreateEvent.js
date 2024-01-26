import mongoose, { models } from "mongoose"

const {Schema} = mongoose;

const createEventSchema = new Schema(
  { 
    eventName:{
    type: String,
    required:true,
  },
    eventSlug:{
    type: String,
    required:true,
  },
    duration:{
    type: String,
    required:true,
  },
    location:{
      type: String,
      required: true, 
    },
    schedule: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    }
  },
  {timestamps: true}
)


const CreateEvent = models.CreateEvent || mongoose.model("CreateEvent", createEventSchema)
export default CreateEvent