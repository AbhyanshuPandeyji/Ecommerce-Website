const express = require("express");
const { registerUser, loginUser ,logout, forgotPassword, resetPassword, getUserDetails, updatePassword } = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles  } = require("../middleware/auth");
const router = express.Router();


// to register a user - to sign up
router.route("/register").post(registerUser);


// to login a user - for sign in
router.route("/login").post(loginUser);

// route for Forgot password
router.route("/password/forgot").post(forgotPassword);

// reset password - token will be the parameter we provide
router.route("/password/reset/:token").put(resetPassword);


// to logout the user
router.route("/logout").get(logout);



// To get the User Details
router.route('/me').get( isAuthenticatedUser, getUserDetails);

// to update password
router.route('/password/update').put(isAuthenticatedUser,updatePassword);




module.exports = router;