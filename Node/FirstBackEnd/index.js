import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/myRouter.js";
// always write the extension eg .js when importing

const app = express();
app.use(express.json());
app.use("/auth", AuthRouter);

// jab frontend se blank req ayega(function call hoga) , this will run
app.get("/", (req, res) => {
  console.log("Server is running");
  res.json({ message: "Server is running " });
});

// this is default error middleware that handles all error as a single unit 
app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal Server Error";
  const StatusCode = err.statusCode || 500;
  res.status(StatusCode).json({ message: ErrorMessage });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server started at port", port);
  connectDB();
});
