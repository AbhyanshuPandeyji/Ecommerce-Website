const express = require("express");
const app = express();

// error middleware import 
const errorMiddleware = require('./middleware/error')

app.use(express.json());


// Route imports
const product = require("./routes/productRoute");


// Using routes
app.use('/api/v1', product);


// Middle ware for error
app.use(errorMiddleware);

// module.exports is use to export the assets to all modules required as a import
module.exports = app;