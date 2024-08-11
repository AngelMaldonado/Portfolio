import mongoose, { Schema, Types } from "mongoose"

const commentSchema = new Schema({
  stars: { type: Number, required: true },
  comment: { type: String, required: true },
  post: { type: Types.ObjectId, ref: "Comment", required: true },
  user: { type: Types.ObjectId, ref: "User", required: true }
}, { versionKey: false, timestamps: true })

export default mongoose.model("Comment", commentSchema)
