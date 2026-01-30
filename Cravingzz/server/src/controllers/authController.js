import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import genToken from "../utils/authToken.js"
export const UserRegister = async (req, res, next) => {
  try {
    //accept data from frontend
    console.log(req.body);
    const { fullName, email, mobileNumber, password,role } = req.body;
    

    if (!fullName || !email || !mobileNumber || !password||!role) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }
    console.log({ fullName, email, mobileNumber, password });

    // check for duplicate user before registeration
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already exists");
      error.statusCode = 400;
      return next(error);
    }
    //encrypting the password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashedpassword,
    });
    //send response to frontend
    console.log(newUser);
    res.status(201).json({ message: "Registeration Succesfull" });
  } catch (error) {
    next(error);
  }
};
export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }
    //check if user registered or not
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 402;
      return next(error);
    }
    const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("Password did not match");
      error.statusCode = 402;
      return next(error);
    }
    // token generation will be done here 
    await genToken(existingUser,res);

    res.status(200).json({ message: "Login Succesfull", data: existingUser });
  } catch (error) {
    next(error);
  }
};
export const UserLogout = async (req, res, next) => {
  try {
    res.clearCookie("parleG");
    res.status(200).json({ message: "Logout Succesfull" });
  } catch (error) {
    next(error);
  }
};
