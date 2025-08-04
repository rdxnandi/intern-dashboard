import mongoose from "mongoose";
import fs from "fs";
import { Intern } from "./models/intern.models.js";
import { Leaderboard } from "./models/leaderboard.models.js";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const internPath = path.join(__dirname, "data", "intern.json");
const leaderboardPath = path.join(__dirname, "data", "leaderboard.json");

const internData = JSON.parse(fs.readFileSync(internPath, "utf-8"));
const leaderboardData = JSON.parse(fs.readFileSync(leaderboardPath, "utf-8"));

async function seedDatabase() {
  try {
    await Intern.deleteMany({});
    await Intern.create(internData);
    console.log("Intern data seeded");

    await Leaderboard.deleteMany({});
    await Leaderboard.insertMany(leaderboardData);
    console.log("Leaderboard data seeded");

    mongoose.disconnect();
  } catch (err) {
    console.error("Seeding failed:", err);
    mongoose.disconnect();
  }
}

seedDatabase();
