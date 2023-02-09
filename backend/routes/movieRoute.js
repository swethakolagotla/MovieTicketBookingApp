import express from "express";
import {
 
  getData,
  getDatabyId,
 
} from "../controllers/movieController.js";
const router = express.Router();
router.route("/movies").get(getData);
router.route("/movies/:id").get(getDatabyId);
 
 

export default router;
