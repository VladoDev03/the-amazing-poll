import mongoose, { Document, Schema } from "mongoose";

export interface IPoll {
    title: string;
}

const pollSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        choices: {
            type: [String],
            default: []
        }
    }
);

export default mongoose.model<IPoll>('Poll', pollSchema);
