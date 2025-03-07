import Cart from "../models/cartModel.mjs";

// #region Get User Cart
// Retrieves the User's Cart with products
const getUserCart = async (req, res) => {
  const { userId } = req.params;

  if (!userId || !userId.trim()) {
    return res.status(400).json({ message: "Invalid or missing userId" });
  }
  try {
    const cart = await Cart.findOne({ userId }).populate(
      "items.productId",
      "name price imageUrl"
    );

    if (!cart) {
      const newCart = new Cart({ userId, items: [] });
      await newCart.save();
      return res.status(201).json(newCart);
    }
    res.status(200).json(cart);
  } catch (error) {
    console.error(`Error fetching cart for user ${userId}:`, error);
    res.status(500).json({ message: "Failed to retrieve cart" });
  }
};

// #endregion Get User Cart

// #region Add to User Cart
// Add Item to Cart
const addToCart = async (req, res) => {
  const { userId } = req.params;
  const { productId, quantity } = req.body;

  if (!productId || !quantity || quantity < 1) {
    return res
      .status(400)
      .json({ message: "Invalid input, quantity must be greater than 0" });
  }

  try {
    let cart = await Cart.findOne({ userId }); // Check if the user's cart exists

    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ productId, quantity }],
      });
      await cart.save();
      return res.status(201).json(cart); // Return the new cart
    }

    // Find the index of the existing item in the cart
    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (existingItemIndex >= 0) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    // Save the updated cart
    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    console.error("Error adding item to cart:", err);
    res.status(500).json({ message: "Error adding item to cart" });
  }
};
// #endregion Add to User Cart

// #region Update to User Cart
// Update Cart Item Quantity
const updateCart = async (req, res) => {
  const { userId, itemId } = req.params;
  const { quantity } = req.body;

  if (!quantity || quantity < 1) {
    return res.status(400).json({ message: "Quantity must be at least 1" });
  }

  try {
    const cart = await Cart.findOne({ userId }); // Find the cart for the given user

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.find((item) => item._id.toString() === itemId); // Find the item in the cart using the productId

    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    item.quantity = quantity; // Update the item's quantity
    await cart.save(); //Update Cart

    res.status(200).json({ message: "Cart updated successfully", cart });
  } catch (err) {
    console.error("Error updating cart:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
// #endregion

// #region Remove/Patch/Put From User Cart
// Remove/Patch/Put Item from Cart
const removeItem = async (req, res) => {
  const { userId, itemId } = req.params;

  try {
    const cart = await Cart.findOne({ userId }); // Find the cart for the given user

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const updatedItems = cart.items.filter(
      (item) => item._id.toString() !== itemId
    );

    if (cart.items.length === updatedItems.length) {
      return res.status(404).json({ message: "Item not found in cart" }); // Check if the item was not found
    }

    cart.items = updatedItems; // Update the cart with the remaining items
    await cart.save();

    res.status(200).json({ message: "Item removed successfully", cart });
  } catch (err) {
    console.error("Error removing item from cart:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// #region Delete Cart
// Delete the Entire Cart
const deleteEntireCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const deletedCart = await Cart.findOneAndDelete({ userId }); // Find and delete the cart for the given userId

    if (!deletedCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (err) {
    console.error("Error deleting entire cart:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// #endregion

export default {
  getUserCart,
  addToCart,
  updateCart,
  removeItem,
  deleteEntireCart,
};
