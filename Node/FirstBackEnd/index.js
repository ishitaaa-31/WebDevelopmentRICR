import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.get("/", (req, res) => {
  console.log("Server is running");
  res.json({message:"Server is running "});
});
// jab frontend se blank req ayega(function call hoga) , this will run

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server started at port", port);
});
