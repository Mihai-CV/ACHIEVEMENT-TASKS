/* eslint-disable max-len */
import mongoose, { Document, Schema } from "mongoose";

export interface iCard extends Document {
    description: String;
    color: String;
}

const schema = new Schema(
    {
      description: {
        type: String,
        require: true,
        minlength: [1, `The entry title must have a minimum length of 1 character`],
      },
      color: {type: String},
    },
    {
      timestamps: true,
    },
);

export const Card = mongoose.model<iCard>("Card", schema);
