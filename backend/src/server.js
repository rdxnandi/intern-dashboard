import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import internRoutes from "./routes/Intern.routes.js";
import leaderboardRoutes from "./routes/leaderboard.routes.js";
import dotenv from "dotenv";

const app = express();

dotenv.config({
  path: "./.env",
});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoBD connected"))
  .catch((err) => console.log("Mongo error", err));

app.use("/api/intern", internRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
