const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");



// Register A User - Sign Up Feature -  this is a different method than before verification will be done by outside
exports.registerUser = catchAsyncErrors( async(req,res,next)=>{

    const {name,email,password} = req.body;

    const user = await User.create({
        name,email,password,
       // we will implement it later after our backend 80-90% complete and we made our frontend
       // so when we will implement the photo upload in front end we will do it then 
        avatar:{
            // these are temporary
            public_id: "This Is A Sample Id",
            url: "Profile Pic Url"
        }
    });

    const token = user.getJWTToken();

    res.status(201).json({
        success:true,
        // we don't need user anymore user ,
        token, 
    })

}
);

exports.loginUser = catchAsyncErrors( async(req,res,next)=>{

    const {email,password} = req.body;

    // checking if the user have given email and password both - the  message will be first and the status code will be next
    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email and Password",400));
    }

    // if both is given 
    // finding user in database
    // we cannot write password here directly because we hashed it with bcrypt so only bcrypt can 
    // we selected password to not show so here we select it to be seen to enter
    const user = await User.findOne({email }).select("+password");

    // if user is not found
    if(!user){
        return next(new ErrorHandler("Invalid Email Or Password",401));
    };


    // if password matched -  comparePassword will come from the user model
    const isPasswordMatched = user.comparePassword(password);

    // if not matched - didn't give only password so the user that is trying luck don't know that the email
    // exists even though the password is incorrect to confuse the random email putter
    if(!isPasswordMatched){
        // 401 is for unauthorized
        return next(new ErrorHandler("Invalid Email Or Password",401));
    };

    // if all matched  email and password
    const token = user.getJWTToken();

    res.status(201).json({
        success:true,
        // we don't need user anymore user,
        token, 
    })

// there is a problem in the login part saying the "next is not a function"
}
);