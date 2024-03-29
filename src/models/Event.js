import mongoose, { models } from "mongoose";

const { Schema } = mongoose;

const eventSchema = new mongoose.Schema({
  intervieweeEmail:{
    type: String, 
    required: true,
  },
  userEmail:{
    type: String, 
    required: true,
  },
  userName:{
    type: String, 
    required: true,
  },
  name:{
    type: String, 
    required: true,
  },
  selectedDate:{
    type: String, 
    required: true,
  },
  selectedTime:{
    type: String, 
    required: true,
  },
  eventTitle:{
    type: String, 
    required: true,
  },
  meetingLink:{
    type: String, 
    required: true,
  },
  meetingLocation:{
    type: String, 
    required: true,
  },
})


const Event =
  models.Event || mongoose.model("Event", eventSchema);
export default Event;