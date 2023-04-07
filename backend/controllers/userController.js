const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail.js");



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

    // const token = user.getJWTToken();

    // res.status(201).json({
    //     success:true,
    //     // we don't need user anymore user ,
    //     token, 
    // })

    //instead of above lengthy code every where we used this method
    sendToken(user,201,res);
}
);



// Login User - Sign in 
exports.loginUser = catchAsyncErrors( async(req,res,next)=>{

    const { email,password } = req.body;

    // checking if the user have given email and password both - the  message will be first and the status code will be next
    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email and Password",400));
    }

    // if both is given 
    // finding user in database
    // we cannot write password here directly because we hashed it with bcrypt so only bcrypt can 
    // we selected password to not show so here we select it to be seen to enter
    const user =await User.findOne({email:email}).select("+password");

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
    sendToken(user,200,res);
// there is a problem in the login part saying the "next is not a function"
}
); 


// Logout the user
exports.logout = catchAsyncErrors( async(req,res,next)=>{

    res.cookie("token",null,{
        // to expire the cookie right away
        expires:new Date(Date.now()),
        httpOnly:true,
    })


    res.status(200).json({
        success:true,
        message:"Logged Out Successfully",
    });

});



// Forget Password 
exports.forgotPassword = catchAsyncErrors( async(req,res,next)=>{
    const user = await User.findOne({email: req.body.email});

    if(!user){
        return next(new  ErrorHandler("User Not Found",404));
    }

    // Get ResetPassword Token - 
    const resetToken =  user.getResetPasswordToken();

    await user.save({validateBeforeSave:false});

    // for sending the link to the mail - not the hash to click and start the resetting the password process
    // if local host don't work change it to 0.0.0.0
    // the url will be changed of the data base so ${res.get("host")}=localhost and for protocol can be http or https so = ${req.protocol}
    // this will save the new generated token for the given amount of time for changing the password if it been used then password can be changed if it expires the password token just go back to normal
    // the reset is just the route
    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    // message wil be send in email - \n is line break
    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n If you have not requested this email for resetting password then ignore it`


    try {

        // calling the email to be send
        await sendEmail({
            email: user.email,
            subject:`Ecommerce Password Recovery`,
            // message from above
            message,

        });

        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email} successfully`,
        })

        // method to send email


        
    } catch (error) {
        // to undefined the saved data of the token and the expire time in the user schema resetPasswordToken 
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        // now save it -its like the sate management
        await user.save({validateBeforeSave:false});

        return next(new ErrorHandler(error.message,500));

    }
}
);