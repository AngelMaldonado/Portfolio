import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  pswd: { type: String, default: null }
}, { versionKey: false, timestamps: true })

export default mongoose.model("User", userSchema)
