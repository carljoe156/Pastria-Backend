import express from "express";
import orderController from "../controllers/orderController.mjs";

const router = express.Router();

// Our Route for Orders
router.post("/create", orderController.createOrder);

export default router;
