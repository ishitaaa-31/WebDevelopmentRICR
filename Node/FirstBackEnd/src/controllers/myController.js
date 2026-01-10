import User from "../models/userModel.js";
export const UserRegister = async (req, res, next) => {
  try {
    const { fullName, email, phone, password } = req.body;
    if (!fullName || !email || !phone || !password) {
      // req.status(400).json({ message: "all fields req" });
      // using middlewares for error handling
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already exists");
      error.statusCode = 409;
      return next(error);
    }

    const newUser = await User.create({
      fullName,
      email,
      phone,
      password,
    });
    console.log(newUser);
    res.status(201).json({ message: "User created succesfully" });
  } catch (error) {
    console.log(error);
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
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }
    const isVerfied = password === existingUser.password;
    if (!isVerfied) {
      const error = new Error("User not authorized");
      error.statusCode = 402;
      return next(error);
    }
    console.log(existingUser);
    res.status(200).json({ message: "Welcome back", data: existingUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Logout Succesful" });
  } catch (error) {
    console.log(error);
    next(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};
 export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, phone, password } = req.body;
    if (!fullName  || !phone  ) {
      // using middlewares for error handling
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("User not found");
      error.statusCode = 409;
      return next(error);
    }
    existingUser.fullName = fullName;
    existingUser.phone = phone;
    await existingUser.save();
    res.status(200)
      .json({ message: "User updates succesfully", data: existingUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
