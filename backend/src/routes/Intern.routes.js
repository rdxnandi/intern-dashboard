import { Router } from "express";
import { Intern } from "../models/intern.models.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const intern = await Intern.findOne();
    res.json(intern);
  } catch (err) {
    res.status(500).json({ err: "Failed to fetch intern data" });
  }
});

export default router;
