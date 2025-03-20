import express from "express";
import {
  updateUserData,
  getUserData,
  getallUsersData,
} from "../controllers/userController.js";
import userAuth from "../middleware/userAuth.js";
const userRouter = express.Router();

userRouter.put("/updateUser/:id", userAuth, updateUserData);
userRouter.get("/data", userAuth, getUserData);
userRouter.get("/all", getallUsersData);

export default userRouter;
