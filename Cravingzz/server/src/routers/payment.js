import express from "express";
import { Protect } from "../middlewares/authMiddleware";

const router = express.Router();
router.post("/createOrder", Protect, RazorpayCreateOrder);
router.post("/verifyPayment", Protect, RazorpayVerifyPayment);
export default router;
