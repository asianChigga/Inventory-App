const express = require("express");
const { uploadProduct } = require("../controllers/vendorControllers");

const router = express.Router();

router.route("upload-product", uploadProduct);
module.exports = router;
