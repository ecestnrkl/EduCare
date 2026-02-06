require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Database connection
const mongoDB = process.env.DB;
if (!mongoDB) {
  console.error("ERROR: DB environment variable is not set. Create a .env file.");
  process.exit(1);
}

mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to Database"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

// Routes
const userRoutes = require("./routes/user.js");
app.use("/user", userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));