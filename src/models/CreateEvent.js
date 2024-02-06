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


// const availableDaySchema = new mongoose.Schema({
//   fromTime: { type: String, required: true },
//   toTime: { type: String, required: true },
// });

// const createEventSchema = new mongoose.Schema({
//   eventTitle: { type: String, required: true },
//   userName: { type: String, required: true },
//   eventDuration: { type: String, required: true },
//   eventStatus: { type: String, required: true },
//   fromDate: { type: Date, required: true },
//   toDate: { type: Date, required: true },
//   meetingLocation: { type: String, required: true },
//   meetingLink: { type: String, required: true },
//   availableDays: {
//     type: {
//       Sunday: availableDaySchema,
//       Monday: availableDaySchema,
//       Tuesday: availableDaySchema,
//       Wednesday: availableDaySchema,
//       Thursday: availableDaySchema,
//       Friday: availableDaySchema,
//       Saturday: availableDaySchema,
//     },
//     required: true,
//   },
//   email: { type: String, required: true },
// });


const CreateEvent =
  models.CreateEvent || mongoose.model("CreateEvent", createEventSchema);
export default CreateEvent;
