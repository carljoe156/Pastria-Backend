import express from "express";
const router = express.Router();
import userController from "../controllers/userController.mjs";

// To Register and Login a new user
router.post("/", userController.create);

router.post("/login", userController.login);

export default router;
