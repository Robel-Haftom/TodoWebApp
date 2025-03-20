import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    verifyOtp: {
      type: String,
      default: "",
    },
    verifyOtpExpireAt: {
      type: Number,
      default: 0,
    },
    resetOtp: {
      type: String,
      default: "",
    },
    resetOtpExpireAt: {
      type: Number,
      default: 0,
    },
    isAccountVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model.User || mongoose.model("User", userSchema);

export default User;
