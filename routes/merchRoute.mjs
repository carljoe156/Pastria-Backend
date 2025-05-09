import express from "express";
const router = express.Router();
import merchController from "../controllers/merchController.mjs";

// Our Seed Route, can be removed when deployed
router.get("/seed", merchController.seed);

// GET and returns all merch items
router.get("/", merchController.getAllMerch);

// Get and returns specific entry
router.get("/:id", merchController.getMerchById);

export default router;
