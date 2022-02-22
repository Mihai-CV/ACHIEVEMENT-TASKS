/* eslint-disable max-len */
import mongoose, { Document, Schema } from "mongoose";

export interface iToDo extends Document {
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
      description: { type: String, require: true },
      date: { type: Date, default: Date.now },
    }, {
      timestamps: true,
    },
);

export const ToDo = mongoose.model<iToDo>("ToDO", schema);
