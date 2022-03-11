import mongoose, { Document, Schema } from "mongoose";

export interface iScore extends Document {
    total: Number;
}

const ScoreSchema = new Schema(
    {
      total: { type: Number },
    },
    {
      timestamps: true,
    },
);

export const Score = mongoose.model<iScore>("Score", ScoreSchema);