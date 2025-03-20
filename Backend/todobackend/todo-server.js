import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../todobackend//config/db.js";
import userRouter from "./router/userRoutes.js";
import taskRouter from "./router/taskRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./router/authRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true }));

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);

app.get("/", (req, res) => {
  res.send("the updated backend server is running");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
