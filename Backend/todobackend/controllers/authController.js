import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import transporter from "../config/nodemailer.js";

export const userRegistration = async (req, res) => {
  const { firstName, lastName, userName, email, password } = req.body;

  if (!userName || !email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: "All the fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const takenUserName = await User.findOne({ userName });

    if (takenUserName) {
      return res.json({
        success: false,
        message: "Username already taken, Please choose other user name",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRETE, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const mailOption = {
      from: process.env.SENDER_MAIL,
      to: email,
      subject: "Welcome to Todo App",
      text: `Hello ${userName}, Welcome to Todo App`,
    };

    await transporter.sendMail(mailOption);
    return res.json({ success: true, data: newUser });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      message: "Email and Password are required",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Invalid email" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.json({ success: false, message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ success: true, message: "User logged in successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "Lax",
    });

    return res.json({ success: true, message: "User Logged out successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const sendVerifyOtp = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);

    if (user.isAccountVerified) {
      return res.json({ success: false, message: "Account already verified" });
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));

    user.verifyOtp = otp;

    user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000;

    await user.save();

    const mailOption = {
      from: process.env.SENDER_MAIL,
      to: user.email,
      subject: "Account Verification OTP",
      text: `Your OTP is ${otp}, use this otp to verify your account`,
    };

    await transporter.sendMail(mailOption);

    return res.json({
      success: true,
      message: "Verification OTP sent on Email",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyEmail = async (req, res) => {
  const { userId, otp } = req.body;
  if (!userId || !otp) {
    return res.json({ success: false, message: "missing details" });
  }
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    if (user.verifyOtp == "" || user.verifyOtp !== otp) {
      return res.json({ success: false, message: "Invalid OTP" });
    }
    if (user.verifyOtpExpireAt < Date.now()) {
      return res.json({ success: false, message: "Expired OTP" });
    }

    user.isAccountVerified = true;
    user.verifyOtp = "";
    user.verifyOtpExpireAt = 0;

    await user.save();
    return res.json({
      success: true,
      message: "Account Verified Successfully",
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const isAuthenticated = async (req, res) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const sendPasswordResetOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.json({ success: false, message: "Email is required" });
  }
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    const otp = String(Math.floor(100000 + Math.random() * 900000));

    user.resetOtp = otp;

    user.resetOtpExpireAt = Date.now() + 15 * 60 * 1000;

    await user.save();

    const mailOption = {
      from: process.env.SENDER_MAIL,
      to: user.email,
      subject: "Password reset OTP",
      text: `Your OTP is ${otp}, use this otp to reset your password`,
    };

    await transporter.sendMail(mailOption);
    res.json({
      success: true,
      message: "Password reset OTP sent on Email",
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const passwordReset = async (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (!email || !otp || !newPassword) {
    return res.json({
      success: false,
      message: "Email, OTP and New password are requires",
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ success: false, message: "User not found" });
  }

  if (user.resetOtp == "" || user.resetOtp !== otp) {
    return res.json({ success: false, message: "Invalid OTP" });
  }

  if (user.resetOtpExpireAt < Date.now()) {
    return res.json({ success: false, message: "OTP expired" });
  }
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  user.resetOtp = "";
  user.resetOtpExpireAt = 0;
  await user.save();

  return res.json({
    success: true,
    message: " Password has been reset successfully",
  });
};
