import Task from "../models/task.model.js";
import mongoose from "mongoose";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error in fetching Tasks" });
  }
};

export const createTask = async (req, res) => {
  const { title, description, dueDate, image } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "All the fields are required" });
  }
  // if (priority !== "low" || priority !== "medium" || priority !== "high") {
  //   return res.status(400).json({ message: "Invalid priority" });
  // }
  // if (dueDate < Date.now()) {
  //   return res.status(400).json({ message: "Invalid due date" });
  // }

  const taskData = { title, description, dueDate, image };
  const newTask = new Task(taskData);

  try {
    await newTask.save();
    return res.status(201).json({ success: true, data: newTask });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error in creating task: ", error });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid Task ID" });
  }

  try {
    await Task.findByIdAndDelete(id);
    return res
      .status(201)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const editTask = async (req, res) => {
  const { id } = req.params;
  const task = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid Task ID" });
  }

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, task, { new: true });
    return res.status(200).json({ success: true, data: updatedTask });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
