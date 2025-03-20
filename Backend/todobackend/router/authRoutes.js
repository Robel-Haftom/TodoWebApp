import express from "express";
import userAuth from "../middleware/userAuth.js";
import {
  userRegistration,
  login,
  logout,
  sendVerifyOtp,
  verifyEmail,
  isAuthenticated,
  sendPasswordResetOtp,
  passwordReset,
} from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/register", userRegistration);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/is-auth", userAuth, isAuthenticated);
authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRouter.post("/verify-account", userAuth, verifyEmail);
authRouter.post("/send-reset-otp", sendPasswordResetOtp);
authRouter.post("/reset-password", passwordReset);

export default authRouter;
