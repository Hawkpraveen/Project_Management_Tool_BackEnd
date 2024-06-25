import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Database/config.js";
import authRouter from "./Routers/authRouter.js";
import userRouter from "./Routers/userRouter.js";
import boardRouter from "./Routers/boardRouter.js";
import sectionRouter from "./Routers/sectionRouter.js";
import taskRouter from "./Routers/taskRouter.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors({
  origin: "*",
  credentials: true,  
}));
const uploadsDirectory = path.join(__dirname, '../uploads');
app.use('/uploads', express.static(uploadsDirectory));

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to my API" });
});

// API routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// Board Routes
app.use("/api/board", boardRouter);
app.use("/api/section", sectionRouter);
app.use("/api/task", taskRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on`);
});
