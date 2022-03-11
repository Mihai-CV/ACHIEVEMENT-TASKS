// PROVISIONAL
import mongoose, { Document, Schema } from "mongoose";

export interface iNote extends Document {
    name: String;
    description: String;
    date: Date;
}

const schema = new Schema(
    {
      title: {
        type: String,
        require: true,
        minlength: [1, `The entry title must have a minimum length of 1 character`],
        unique: true,
      },
      description: { type: String, require },
      date: { type: Date, default: Date.now },
    },
    {
      timestamps: true,
    },
);

export const Note = mongoose.model<iNote>("Note", schema);
