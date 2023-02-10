import mongoose from "mongoose";

const { Schema, model } = mongoose;

const accommSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    maxGuests: { type: Number, min: 0, max: 5, required: true },
    host: [{ type: Schema.Types.ObjectId, required: true, ref: "host" }],
    city: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("Accommodation", accommSchema);
