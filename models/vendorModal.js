// models/vendor.js
const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  vendorname: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["vendor"], default: "vendor" },
});

module.exports = mongoose.model("Vendor", vendorSchema);
