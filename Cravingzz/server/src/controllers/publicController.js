import Contact from "../models/publicModel.js";
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
