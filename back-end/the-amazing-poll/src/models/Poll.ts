import mongoose, { Document, Schema } from "mongoose";

export interface IPoll extends Document {
    title: string;
    choices: string[]
}

const pollSchema = new Schema<IPoll>(
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
