import mongoose, { Schema, Types } from "mongoose"

const postSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  abstract: { type: String, required: true },
  imageUrl: { type: String, required: true },
  markdownUrl: { type: String, required: true },
  stars: { type: [Number], default: [] },
  starsAvg: { type: Number, default: 0 }
}, { versionKey: false, timestamps: true })

export default mongoose.model("Post", postSchema)
