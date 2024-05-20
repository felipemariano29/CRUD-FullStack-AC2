const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

// Load env vars
dotenv.config();

// Initialize app
const app = express();

// Connect to database
connectDB();

// Initialize middleware
app.use(express.json());

// Define routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/task", require("./routes/taskRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
