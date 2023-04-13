const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const fileUpload = require("express-fileupload")

// error middleware import 
const errorMiddleware = require('./middleware/error')

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());


// Route imports
// for better readability can use userRoute and productRoute for good referencing
const product = require("./routes/productRoute");

// For the User Route
const user = require("./routes/userRoute");

// For the Order Route
const order = require("./routes/orderRoute");

// Using routes
app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);

// Middle ware for error
app.use(errorMiddleware);

// module.exports is use to export the assets to all modules required as a import
module.exports = app;