const express = require("express");
const app = express();

app.use(express.json());


// Route imports
const product = require("./routes/productRoute");


// Using routes
app.use('/api/v1', product)

// module.exports is use to export the assets to all modules required as a import
module.exports = app;