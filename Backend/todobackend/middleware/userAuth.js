import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized, Login again 1",
    });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRETE);

    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else {
      return res.json({
        success: false,
        message: " Not Authorized, Login again 2",
      });
    }

    next();
  } catch (error) {
    return res.json({
      success: false,
      message: "Not Authorized, Login again 3",
    });
  }
};

export default userAuth;
