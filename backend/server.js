const app = require("./app");

const dotenv = require("dotenv");
// database acquirement 
const connectDatabase = require("./config/database");


// Handling Uncaught Exception 
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to Uncaught Exception`);

    process.exit(1);

}); 



//config - to use variables in env file
dotenv.config({path:"backend/config/config.env"}); 


// this should be done after process .env file 
// connect to database
connectDatabase();


// storing it into the server named variable
const server =  app.listen(process.env.PORT,()=>{
    console.log(`the Server is Running on http://localhost:${process.env.PORT}`)
});




// Unhandled Promise Rejection
// in this case we need to down the server as quick as possible - taki bezzeti na ho
process.on("unhandledRejection", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to Unhandled Promise Rejection`);


    // this will close our server
    server.close(()=>{
        // this will exit our server - 1 means true 
        process.exit(1)
    })
})