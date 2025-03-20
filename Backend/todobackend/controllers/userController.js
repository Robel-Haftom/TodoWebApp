import User from "../models/user.model.js";

export const getUserData = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    return res.json({
      success: true,
      data: {
        name: user.userName,
        isAccountVerified: user.isAccountVerified,
      },
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getallUsersData = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    return res.json({ success: false, message: "Error in fetching Tasks" });
  }
};

export const updateUserData = async (req, res) => {
  const { email, userName, userId } = req.body;
  const { id } = req.params;

  if (userId !== id) {
    return res.json({
      success: false,
      message: "You are not authorized to update this user data",
    });
  }
  if (!userId) {
    return res.json({ success: false, message: "User not found" });
  }
  if (!email || !userName) {
    return res.json({
      success: false,
      message: "User name and Email are required",
    });
  }

  try {
    const user = await User.findById(userId);

    if (await User.findOne({ email })) {
      return res.json({
        success: false,
        message: "There is an account with this email, use other email",
      });
    }

    if (await User.findOne({ userName })) {
      return res.json({
        success: false,
        message: "Username already taken, use other email",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { email, userName },
      {
        new: true,
      }
    );

    return res.json({
      success: true,
      message: " user data updated successfully",
      data: {
        name: updatedUser.userName,
        email: updatedUser.email,
        isAccountVerified: updatedUser.isAccountVerified,
      },
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
