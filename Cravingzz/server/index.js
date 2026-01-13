import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/authRouter.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  console.log("Server is working");
});
app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal Server Error";
  const StatusCode = err.statusCode || 500;
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server started at port:", port);
  connectDB();
});
