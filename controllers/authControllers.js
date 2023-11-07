const asyncHandler = require("express-async-handler");
const SimpleUser = require("../models/userMOdal");
const Vendor = require("../models/vendorModal");
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All the fields are required");
  }
  const userExist = await SimpleUser.findOne({ email });
  if (userExist !== null) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await SimpleUser.create({
    username,
    email,
    password,
  });

  if (user) {
    res.status(200).json({
      _id: user._id,
      email: user.email,
      name: user.username,
      //   role: user.role,
    });
  } else {
    res.status(400);
    throw new Error("User not Found");
  }
});

const registerVendor = asyncHandler(async (req, res) => {
  const { vendorname, email, password } = req.body;
  if (!vendorname || !email || !password) {
    res.status(400);
    throw new Error("All the fields are required");
  }
  const vendorExist = await Vendor.findOne({ email });
  if (vendorExist !== null) {
    res.status(400);
    throw new Error("Vendor Already Exists");
  }
  const vendor = await Vendor.create({
    vendorname,
    email,
    password,
  });

  if (vendor) {
    res.status(200).json({
      _id: vendor._id,
      email: vendor.email,
      vendorName: vendor.vendorname,
      role: vendor.role,
    });
  } else {
    res.status(400);
    throw new Error("Vendor Registration Failed");
  }
});

module.exports = { registerUser, registerVendor };
