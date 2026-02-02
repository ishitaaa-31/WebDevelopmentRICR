import mongoose from "mongoose";
const menuSchema = mongoose.Schema(
  {
    restaurantID: {
      type: mongoose.Schema.Types.ObjectId, // object ki kya id hai db me , primary key
      ref: "User", //kis table se connected rahega ,user table se
      required: true,
    },
    dishName: {
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
      enum: ["availabale", "unAvailable", "removed"],
      required: true,
      default: "available",
    },
    image: {
      url: {
        type: String,
        default: "",
      },
      publicID: {
        type: String,
        default: "",
      },
    },
  },
  { timeStamp: true },
);
