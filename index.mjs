import express from "express";
import morgan from "morgan";
import db from "./db/conn.mjs";
import cors from "cors";

// Imported Routes
import productEntries from "./routes/productRoute.mjs";
import users from "./routes/userRoute.mjs";
import cartRoutes from "./routes/cartRoute.mjs";
import orders from "./routes/orderRoute.mjs";

// Main Port
const PORT = process.env.PORT || 5000;

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Route Endpoints
app.use("/api/product", productEntries);
app.use("/api/users", users);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orders);

// Routes for my checking routes
app.get("/", (req, res) => {
  res.send("<h1>Pastria API</h1><ol><li>Product/Pastries - /api/product");
});

// Default, catch-all route
app.get("/*", (req, res) => {
  res.redirect("/");
});

//Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("There was an issue on the server, Try Again!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
