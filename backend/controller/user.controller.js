import User from "../Model/user_model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashPwd = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPwd,
    });
    await createdUser.save();
    res.status(201).json({ message: "user created! Happy ETN" });
  } catch (error) {
    console.log("Failed user_controller.js", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!user || !isMatch) {
      return res.status(400).json({ message: "Username or Password do not matched" });
    } else {
      res.status(200).json({
        meessage: "Valid user",
        user: {
          _id: user._id,
          username: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Signup failed", error.meessage);
    res.status(500).json({ message: "Internal server error" });
  }
};
