import Task from "../models/task.model.js";
import mongoose from "mongoose";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({ succuss: true, data: tasks });
  } catch (error) {
    return res
      .status(500)
      .json({ succuss: false, message: "Error in fetching Tasks" });
  }
};

export const createTask = async (req, res) => {
  const task = req.body;

  if (!task.title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = new Task(task);

  try {
    await newTask.save();
    return res.status(201).json({ succuss: true, data: newTask });
  } catch (error) {
    return res
      .status(500)
      .json({ succuss: false, message: "Error in creating task" });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ succuss: false, message: "Invalid Task ID" });
  }

  try {
    await Task.findByIdAndDelete(id);
    return res
      .status(201)
      .json({ succuss: true, message: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({ succuss: false, message: "Server error" });
  }
};

export const editTask = async (req, res) => {
  const { id } = req.params;
  const task = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ succuss: false, message: "Invalid Task ID" });
  }

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, task, { new: true });
    return res.status(200).json({ succuss: true, data: updatedTask });
  } catch (error) {
    return res.status(500).json({ succuss: false, message: "Server error" });
  }
};
