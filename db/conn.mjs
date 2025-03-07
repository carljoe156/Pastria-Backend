import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Global configuration
const mongoURL = process.env.MONGO_URI;
const db = mongoose.connection;

// Connection to MongoDB
mongoose.connect(mongoURL);
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB!");
});

export default db;
