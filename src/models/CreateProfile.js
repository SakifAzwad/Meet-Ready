import mongoose, { models } from "mongoose";

const { Schema } = mongoose;


const createProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  skill: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  introVideo: {
    type: String,
    required: true,
  },
  loginEmail: {
    type: String,
    required: true,
  },
  
});


const CreateProfile =
  models.CreateProfile || mongoose.model("CreateProfile", createProfileSchema);
export default CreateProfile;
