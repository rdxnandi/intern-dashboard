import mongoose, { Schema } from "mongoose";

const interSchema = new Schema({
  name: String,
  referralCode: String,
  totalDonations: Number,
});

export const Intern = mongoose.model("Intern", interSchema);
