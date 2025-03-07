import express from "express";
import cartController from "../controllers/cartController.mjs";
const router = express.Router();

// Retrives/Get the User Cart
router.get("/:userId", cartController.getUserCart);

// Adds Item to Cart
router.post("/:userId", cartController.addToCart);

// Updates Cart Product Item Qty
router.put("/:userId/:itemId", cartController.updateCart);

// Removes Product Item from Cart
router.delete("/:userId/:itemId", cartController.removeItem);

//Removes the Cart
router.delete("/:userId", cartController.deleteEntireCart);

export default router;
