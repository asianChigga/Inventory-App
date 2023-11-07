const express = require("express");
const dotenv = require("dotenv");

const authRoutes = require("./routes/authRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const connectDb = require("./config/db");

dotenv.config();
connectDb();
const app = express();
app.use(express.json());
app.use("/api/register", authRoutes);
app.use("/api/vendor", vendorRoutes);
const server = app.listen(5000, console.log("Server is up"));
