import Contact from "../models/publicModel.js";
import User from "../models/userModel.js";
import Menu from "../models/menuModel.js"
export const NewContact = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber, message } = req.body;
    if (!fullName || !email || !mobileNumber || !message) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }
     const newContact = await Contact.create({
      fullName,
      email,
      mobileNumber,
     message,
    });
    console.log(newContact);
    res.status(201).json({ message: "Thanks for contacting us!" });
    
  } catch (error) {
     next(error);
  }
};
export const GetAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await User.find({ role: "manager" }).select(
      "-password",
    );

    res.status(200).json({
      message: "Restaurants fetched successfully",
      data: restaurants,
    });
  } catch (error) {
    next(error);
  }
};
export const GetRetaurantMenuData = async (req, res, next) => {
  try {
    const { id, page } = req.params;
    console.log(page);

    if (!id) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    const restaurantMenuData = await Menu.find({
      resturantID: id,
    })
      .sort({ updatedAt: -1 })
      .skip(1)
      .limit(2)
      .populate("resturantID");

    res
      .status(200)
      .json({ message: "Menu fetched Sucessfully", data: restaurantMenuData });
  } catch (error) {
    next(error);
  }
};
