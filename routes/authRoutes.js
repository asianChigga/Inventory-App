const express = require("express");
const {
  registerUser,
  registerVendor,
} = require("../controllers/authControllers");
const router = express.Router();

router.route("/user").post(registerUser);
router.route("/vendor").post(registerVendor);
// router.route("/login").post()

module.exports = router;
