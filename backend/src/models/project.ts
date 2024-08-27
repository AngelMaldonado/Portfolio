import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  projectUrl: { type: String, unique: true },
  repoUrl: { type: String },
  image: { type: String, required: true }
}, { versionKey: false })

export default mongoose.model("Project", projectSchema)
