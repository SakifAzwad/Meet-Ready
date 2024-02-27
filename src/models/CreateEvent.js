import mongoose, { models } from "mongoose";

const { Schema } = mongoose;


const createEventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true,
  },
  eventDuration: {
    type: String,
    required: true,
  },
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  meetingLocation: {
    type: String,
    required: true,
  },
  meetingLink: {
    type: String,
    required: true,
  },
  eventStatus: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateAndTimeArray: [
    {
      date: {
        type: String,
        required: true,
      },
      dayOfWeek: {
        type: String,
        required: true,
      },
      timeSlot: {
        type: String,
        required: true,
      },
    },
  ],
});


const CreateEvent =
  models?.CreateEvent || mongoose.model("CreateEvent", createEventSchema);
export default CreateEvent;
