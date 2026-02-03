import express from "express"
import { RestaurantAddMenuItem } from "../controllers/restaurantController.js";
const router = express.Router();
router.post("/addMenuItem", RestaurantAddMenuItem)
export default router;