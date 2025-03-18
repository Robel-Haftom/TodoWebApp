import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../todobackend//config/db.js";
import Task from "./models/task.model.js";
import User from "./models/user.model.js";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ succuss: true, data: tasks });
  } catch (error) {
    res
      .status(500)
      .json({ succuss: false, message: "Error in fetching Tasks" });
  }
});

app.post("/api/tasks/createTask", async (req, res) => {
  const task = req.body;

  if (!task.title) {
    res.status(400).json({ message: "Title is required" });
  }

  const newTask = new Task(task);

  try {
    await newTask.save();
    res.status(201).json({ succuss: true, data: newTask });
  } catch (error) {
    res.status(500).json({ succuss: false, message: "Error in creating task" });
  }
});

app.delete("/api/tasks/deleteTask/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ succuss: false, message: "Invalid Task ID" });
  }

  try {
    await Task.findByIdAndDelete(id);
    res
      .status(201)
      .json({ succuss: true, message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ succuss: false, message: "Server error" });
  }
});

app.put("/api/tasks/updateTask/:id", async (req, res) => {
  const { id } = req.params;
  const task = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ succuss: false, message: "Invalid Task ID" });
  }

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, task, { new: true });
    res.status(200).json({ succuss: true, data: updatedTask });
  } catch (error) {
    res.status(500).json({ succuss: false, message: "Server error" });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ succuss: true, data: users });
  } catch (error) {
    res
      .status(500)
      .json({ succuss: false, message: "Error in fetching Tasks" });
  }
});

app.post("/api/users/createUser", async (req, res) => {
  const user = req.body;

  if (!user.userName && !user.email && !user.password) {
    res.status(400).json({ message: "All the fields are required" });
  }

  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json({ succuss: true, data: newUser });
  } catch (error) {
    res.status(500).json({ succuss: false, message: "Error in creating user" });
  }
});

app.put("/api/users/updateUser/:id", async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  console.log(id, user);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ succuss: false, message: "Invalid User ID" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
    res.status(200).json({ succuss: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ succuss: false, message: "Server error" });
  }
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
