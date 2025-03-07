import mongoose from "mongoose";
import User from "../models/userModel.mjs";
import Product from "../models/productModel.mjs";
import Order from "../models/orderModel.mjs";
import Cart from "../models/cartModel.mjs";

const createOrder = async (req, res) => {
  const {
    userId,
    items,
    totalPrice,
    shippingAddress,
    email,
    phone,
    paymentMethod,
  } = req.body;

  // Checks required fields
  if (
    !userId ||
    !items?.length ||
    !totalPrice ||
    !shippingAddress ||
    !email ||
    !phone ||
    !paymentMethod
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    for (let item of items) {
      if (
        !item.productId ||
        !mongoose.Types.ObjectId.isValid(item.productId) ||
        item.quantity <= 0
      ) {
        return res
          .status(400)
          .json({ message: "Invalid productId or quantity in cart" });
      }

      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(400).json({
          message: `Product not found for productId ${item.productId}`,
        });
      }

      item.productName = product.name; // updates product name to item
    }

    const user = await User.findOne({ email: userId }); // Find user and create order
    if (!user) return res.status(400).json({ message: "User not found" });

    const order = new Order({
      userId: user._id,
      items,
      totalPrice,
      shippingAddress,
      email,
      phone,
      paymentMethod,
    });

    const savedOrder = await order.save();

    await Cart.findOneAndUpdate({ userId: user._id }, { items: [] });

    res
      .status(201)
      .json({ message: "Order created successfully", order: savedOrder });
  } catch (err) {
    console.error("Error creating order:", err);
    res
      .status(500)
      .json({ message: "Error creating order", error: err.message });
  }
};

export default { createOrder };
