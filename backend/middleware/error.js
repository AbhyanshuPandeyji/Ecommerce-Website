const ErrorHandler  = require("../utils/errorHandler");


module.exports = (err,req,res,next)=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Wrong/incomplete mongoDb Url errors in id selection
    if(err.name === "CastError"){
        const message = `Resource not found. Invalid ${err.path}`;
        err = new ErrorHandler(message,400);
    }


    res.status(err.statusCode).json({
        success:false,
        // we can also use err.stack if we want to get the whole error message what, when , where the error occurred instead of the message and status code
        // error:err,
        // will take our message in the next function in the controllers next function in logic 
        message:err.message,
    });
};