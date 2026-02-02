import express from "express";
import{
    UserRegister,UserLogin,UserLogout,UserGenOTP, UserVerifyOtp,
  UserForgetPassword
} from "../controllers/authController.js"
import { OtpProtect } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/register", UserRegister);
router.post("/login", UserLogin);
router.get("/logout", UserLogout);


// these genOtp and all we have called by api.post("genOtp" in forgetpassword moadal )
router.post("/genOtp", UserGenOTP);
router.post("/verifyOtp", UserVerifyOtp);
router.post("/forgetPassword",OtpProtect,UserForgetPassword)
 export default router;
