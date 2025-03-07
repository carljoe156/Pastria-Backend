import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
      quantity: { type: Number, required: true },
      productName: { type: String, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  shippingAddress: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  paymentMethod: { type: String, required: true }, // ex. "Square", "CreditCard", "Stripe", "Paypal",
  orderStatus: { type: String, default: "Pending" }, // Updates the Status: Pending, Confirmed, Shipped, Delivered, etc.
  createdAt: { type: Date, default: Date.now },
});

orderSchema.pre("save", async function (next) {
  for (let item of this.items) {
    const product = await mongoose.model("Product").findById(item.productId);
    if (product) {
      item.productName = product.name; // uses the productName field dynamically from the Product model
    }
  }
  next();
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
