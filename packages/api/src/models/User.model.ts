import mongoose, { Document, Schema } from "mongoose";

export interface iUser extends Document {
  user_id: String;
  score: Number;
}

const UserScheme = new Schema(
  {
    user_id: { type: String, required: true, unique: true},
    score: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<iUser>("User", UserScheme);
