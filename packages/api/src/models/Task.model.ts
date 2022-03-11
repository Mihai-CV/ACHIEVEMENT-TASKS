import mongoose, { Document, Schema } from "mongoose";

export interface iTask extends Document {
    description: String;
    achievement: Number;
    scoreTotal: Number;
    user_id: String;
    toDoTag: String;
    done: Boolean;
}

const TaskSchema = new Schema(
    {
        description: { type: String, require: true },
        achievement: { type: Number, require: true, enum: { values: [5, 10, 20] } },
        scoreTotal: { type: Number, default: 0 },
        user_id: { type: String },
        toDoTag: { type: String },
        done: {type: Boolean, default: false}
    },
    {
        timestamps: true,
    }
);

export const Task = mongoose.model<iTask>("Task", TaskSchema);

