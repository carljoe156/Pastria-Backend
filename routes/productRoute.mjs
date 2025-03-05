import express from "express";
const router = express.Router();
import productController from "../controllers/productController.mjs";

// Our Seed Route, can be removed when deployed
router.get("/seed", productController.seed);

// Our Index Route
// Gets and returns all entires
router.get("/", productController.getEntries);

export default router;
