import express from "express";
import { Protect } from "../middlewares/authMiddleware.js";
import Razorpay from "razorpay";
import { RazorpayGetKey, RazorPayCreateOrder,RazorPayVerifyPayment } from "../controllers/paymentController.js";

const router = express.Router();
router.get("/getRazorpayKey", Protect, RazorpayGetKey);
router.post("/createOrder", Protect, RazorPayCreateOrder);
router.post("/verifyPayment", Protect, RazorPayVerifyPayment);
export default router;
