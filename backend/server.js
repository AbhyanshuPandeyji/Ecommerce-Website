const app = require("./app");

const dotenv = require("dotenv");
// database acquirement 
const connectDatabase = require("./config/database");

//config - to use variables in env file
dotenv.config({path:"backend/config/config.env"}); 


// this should be done after process .env file 
// connect to database
connectDatabase();



app.listen(process.env.PORT,()=>{
    console.log(`the Server is Running on http://localhost:${process.env.PORT}`)
})