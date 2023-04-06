const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const router = express.Router();


// to register a user - to sign up
router.route("/register").post( registerUser);


// to login a user - for sign in
router.route("/login").post(loginUser);

module.exports = router;