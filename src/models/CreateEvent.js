import mongoose, { models } from "mongoose"

const {Schema} = mongoose;


const availableDaySchema = new mongoose.Schema({
  fromTime: { type: String, required: true },
  toTime: { type: String, required: true },
});

const createEventSchema = new mongoose.Schema({
  eventTitle: { type: String, required: true },
  eventDuration: { type: String, required: true },
  eventStatus: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  meetingLocation: { type: String, required: true },
  meetingLink: { type: String, required: true },
  availableDays: {
    type: {
      Sunday: availableDaySchema,
      Monday: availableDaySchema,
      Tuesday: availableDaySchema,
      Wednesday: availableDaySchema,
      Thursday: availableDaySchema,
      Friday: availableDaySchema,
      Saturday: availableDaySchema,
    },
    required: true,
  },
});

// const createEventSchema = new Schema(
//   { 
//     eventTitle:{
//     type: String,
//     required:true,
//   },
//     eventSlug:{
//     type: String,
//     required:true,
//   },
//     eventDuration:{
//     type: String,
//     required:true,
//   },
//     eventLocation:{
//       type: String,
//       required: true, 
//     },
//     eventDate: {
//       type: String,
//       required: true,
//     },
//     eventDay: {
//       type: String,
//       required: true,
//     },
//     fromTime: {
//       type: String,
//       required: true,
//     },
//     toTime: {
//       type: String,
//       required: true,
//     },
//     meetingLink: {
//       type: String,
//       required: true,
//     },
//     eventStatus: {
//       type: String,
//       required: false,
//     },
//     email: {
//       type: String,
//       required: true,
//     }
//   },
//   {timestamps: true}
// )


const CreateEvent = models.CreateEvent || mongoose.model("CreateEvent", createEventSchema)
export default CreateEvent