const express = require("express");
const { registerUser, loginUser ,logout, forgotPassword } = require("../controllers/userController");
const router = express.Router();


// to register a user - to sign up
router.route("/register").post(registerUser);


// to login a user - for sign in
router.route("/login").post(loginUser);

// route for Forgot password
router.route("/password/forgot").post(forgotPassword);

// to logout the user
router.route("/logout").get(logout);



module.exports = router;