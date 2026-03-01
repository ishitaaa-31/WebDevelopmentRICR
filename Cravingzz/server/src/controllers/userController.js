import User from "../models/userModel.js";
import Order from "../models/orderModel.js";
import bcrypt from "bcrypt"
export const UserUpdate = async (req, res, next) => {
  try {
    //logic here

    const { fullName, mobileNumber } = req.body;
    const currentUser = req.user;
    console.log(currentUser);
    

    console.log({ fullName, mobileNumber });
    

    if (!fullName || !mobileNumber) {
      const error = new Error("All Feilds Required");
      error.statusCode = 400;   
      return next(error);
    }

    console.log("OldData: ", currentUser); //old user data in JSON format
    //first Way
    // currentUser.fullName = fullName;
    // currentUser.email = email;
    // currentUser.mobileNumber = mobileNumber;
    // await currentUser.save();

    // console.log("NewData:", currentUser);

    //Second Way

    const updatedUser = await User.findByIdAndUpdate(
      { _id: currentUser._id },
      {
        fullName,
        mobileNumber,
      },
      { new: true },
    );

    console.log("Updated User: ", updatedUser);
    res
      .status(200)
      .json({ message: "User Updated Sucessfully", data: updatedUser });

    console.log("Updating the user");
  } catch (error) {
    next(error);
  }
};

export const UserResetPassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const currentUser = req.user;

    if (!oldPassword || !newPassword) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    const isVerified = await bcrypt.compare(oldPassword, currentUser.password);
    if (!isVerified) {
      const error = new Error("Old Password didn't match");
      error.statusCode = 401;
      return next(error);
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);

    currentUser.password = hashPassword;

    await currentUser.save();

    res.status(200).json({ message: "Password Reset Successful" });
  } catch (error) {
    next(error);
  }
};
export const UserPlaceOrder = async (req, res, next) => {
  try {
    const currentUser = req.user;

    const { restaurantId, items, orderValue, status, review } = req.body;

    console.log({ restaurantId, items, orderValue, status, review });

    if (!restaurantId || !items || !orderValue || !status) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    const newOrder = await Order.create({
      orderNumber: `ORD-${Date.now()}`,
      restaurantId,
      userId: currentUser._id,
      items,
      orderValue,
      status,
      review: review || "N/A",
    });
    res
      .status(201)
      .json({ message: "Order Placed Successfully", data: newOrder });
  } catch (error) {
    next(error);
  }
};

export const UserAllOrders = async (req, res, next) => {
  try {
    const currentUser = req.user;
    const orders = await Order.find({ userId: currentUser._id })
      .populate("restaurantId")
      .populate("riderId")
      .sort({ createdAt: -1 });
    res
      .status(200)
      .json({ message: "All Orders Fetched Successfully", data: orders });
  } catch (error) {
    next(error);
  }
};