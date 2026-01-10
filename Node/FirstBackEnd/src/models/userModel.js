import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    //   unique: true,
    },
    phone: {
      type: String,
      required: true,
    //   unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // timestamp is for the time when created and when update  ex: last updates on ... that will also be stored 

const User = mongoose.model("User",userSchema);
export default User;
