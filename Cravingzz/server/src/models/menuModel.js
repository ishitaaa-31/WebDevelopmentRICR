import mongoose from "mongoose";
const menuSchema = mongoose.Schema(
  {
     resturantID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    cuisine: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: [
        "veg",
        "non-veg",
        "vegan",
        "jain",
        "gluten-free",
        "dairy",
        "egg",
        "contain-nuts",
      ],
      required: true,
    },
    servingSize: {
      type: String,
    },
    preparationTime: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    availability: {
      type: String,
      enum: ["available", "unavailable", "removed"],
      required: true,
      default: "available",
    },
    images: [
  {
    url: {
      type: String,
      default: "",
    },
    publicID: {
      type: String,
      default: "",
    },
  },
],

  },
  { timeStamp: true },
);
const Menu = mongoose.model("Menu", menuSchema);

export default Menu;