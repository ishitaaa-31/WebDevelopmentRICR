import jwt from "jsonwebtoken";
export const Protect = async (req, res, next) => {
  try {
    const biscuit = req.cookie.parleG;
    console.log("token recieved in the form of cookie",biscuit);
    
    
  } catch (error) {
    next(error);
  }
};
