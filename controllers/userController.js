import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Sign Up
export const signUpController = async (req, res) => {
  const { fullName, email, password } = req.body.values;
  console.log(req.body);

  try {
    // Input Validation
    if (!fullName && !email && !password) {
      return res.status(400).json({ message: "Invalid Input" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be 8 or more character long" });
    }

    // Is user already exist?
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exist" });
    }

    // Generate Password Hash Using bcrypt algorithm
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create New User Account
    await UserModel.create({ fullName, email, password: hashedPassword });
    return res.status(201).json({ message: "Sign up successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error while signing up" });
  }
};

// Sign In
export const signInController = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Input Validation
    if (!email && !password) {
      return res.status(400).json({ message: "Invalid Input" });
    }

    const user = await UserModel.findOne({ email });

    // Check User Exist or not
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      user: {
        fullName: user.fullName,
        email: user.email,
      },
      token,
    });
  } catch (error) {}
};
