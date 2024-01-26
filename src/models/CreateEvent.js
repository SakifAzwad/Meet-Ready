import mongoose, { models } from "mongoose"

const {Schema} = mongoose;

const createEventSchema = new Schema(
  { 
    eventTitle:{
    type: String,
    required:true,
  },
    eventSlug:{
    type: String,
    required:true,
  },
    eventDuration:{
    type: String,
    required:true,
  },
    eventLocation:{
      type: String,
      required: true, 
    },
    eventDate: {
      type: String,
      required: true,
    },
    eventDay: {
      type: String,
      required: true,
    },
    fromTime: {
      type: String,
      required: true,
    },
    toTime: {
      type: String,
      required: true,
    },
    meetingLink: {
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