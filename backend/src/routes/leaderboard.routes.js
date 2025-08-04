import { Router } from "express";
import { Leaderboard } from "../models/leaderboard.models.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find({}).sort({ donations: -1 });
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ err: "Failed to fetch leaderboard data" });
  }
});

export default router;
