// Product Schema
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/addFeatures");



// Create Product -- Admin route ( Only Admin will access it will be implemented later)
exports.createProduct = catchAsyncErrors(
    async (req, res, next) => {

        // to create a product
        const product = await Product.create(req.body);

        // product coming from above
        res.status(200).json({success: true, product});

    }
); 


// Get All Products --
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {

    // for Pagination 
    const resultPerPage = 5;

    // for front end to show how many products are available
    const productCount = await Product.countDocuments();
    
    // For filter features
    const apiFeature = new ApiFeatures(Product.find() , req.query).search().filter().pagination(resultPerPage); // calling the function to of the search

    
    // to get all products
    // Product.find() now we can't use it again it will be mess
    // so we use apiFeature.query we got from the search
    const products = await apiFeature.query;  

    // products coming from above
    res.status(200).json({
        success: true, 
        products,
        productCount,
    });


});

// Get Product Details - Of One
exports.getProductDetails = catchAsyncErrors( async (req, res, next) => {

    // to get product
    const product = await Product.findById(req.params.id);

    // if not found
    if (!product) {
        // next is just an callback function - 
        return next(new ErrorHandler("Product Not Found", 404));
    }


    res.status(200).json({
        success: true, 
        product
    });

});


// Update Product -- Admin only
exports.updateProduct = catchAsyncErrors(
    async (req, res, next) => {

        let product = await Product.findById(req.params.id);

        if (!product) {
            // next is just an callback function - 
            return next(new ErrorHandler("Product Not Found", 500));
        }

        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        res.status(200).json({success: true, product});

}

);


// Delete Product - By Admin Only

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
        
    // to get product id
    const product = await Product.findById(req.params.id);

    if (!product) {
        // next is just an callback function - 
        return next(new ErrorHandler("Product Not Found", 404));
    }



    // delete one instead of the remove() function
    await product.deleteOne();

    res.status(200).json({success: true, message: `Product with id : ${
            req.params.id
        } is been deleted `});

}
);