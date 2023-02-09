import express from "express";
import { postData } from "../controllers/bookingController.js";
const router = express.Router();
 
router.route("/booking/book").post(postData);

export default router;
