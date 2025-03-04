import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";

// Main Port
const PORT = process.env.PORT || 5000;

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes

// Routes for my checking routes
app.get("/", (req, res) => {
  res.send("<h1>Pastria API</h1><ol><li>Pastries - /api/v1/Pastries");
});

// default, catch-all route
app.get("/*", (req, res) => {
  res.redirect("/");
});

//Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("There was an issue on the server");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
