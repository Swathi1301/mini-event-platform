
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors({
  origin: "http://localhost:3001",
  credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

// Test route
app.get("/", (req, res) => {
  res.send("Server running");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
