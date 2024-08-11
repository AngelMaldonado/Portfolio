import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true }
}, { versionKey: false })

export default mongoose.model("User", userSchema)
