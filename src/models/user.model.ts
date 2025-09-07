import mongoose, { Schema, Types } from "mongoose";

export const userSchema = new Schema({
  userId: { type: Types.ObjectId },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  role: {
    type: String,
    enum: ["customer", "merchant"],
  },
  otp: { type: String, require: true },
  date_of_birth: {
    type: Date,
  },
  nin: {
    type: String,
  },
  bvn: {
    type: String,
  },
  is_verified: { type: Boolean, require: true, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const userModel = mongoose.model("User", userSchema);
export { userModel };
