import express from "express";
import {
  createTask,
  deleteTask,
  editTask,
  getTasks,
} from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.get("/tasks", getTasks);

taskRouter.post("/createTask", createTask);

taskRouter.delete("/deleteTask/:id", deleteTask);

taskRouter.put("/updateTask/:id", editTask);

export default taskRouter;
