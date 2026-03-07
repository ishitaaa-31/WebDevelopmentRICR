import "dotenv/config";
import Razorpay from "razorpay";
console.log("KEY:", process.env.RAZORPAY_TEST_API_KEY);
console.log("SECRET:", process.env.RAZORPAY_TEST_API_SECRET);
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_TEST_API_KEY,
  key_secret: process.env.RAZORPAY_TEST_API_SECRET,
});
export const verifyRazorpayConnect = async () => {
  const orders = await razorpay.orders.all({ count: 1 }); // ek hi data le kar aana hai
  return orders;
};
export default razorpay;
