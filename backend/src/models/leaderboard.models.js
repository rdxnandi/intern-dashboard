import mongoose, { Schema } from "mongoose";

const leaderboardSchema = new Schema({
  rank: Number,
  name: String,
  donations: Number,
  referrals: Number,
});

export const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);
