// Product Schema
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/addFeatures");




// Create Product -- Admin route ( Only Admin will access it will be implemented later)
exports.createProduct = catchAsyncErrors(
    async (req, res, next) => {


        req.body.user = req.user.id

        // to create a product
        const product = await Product.create(req.body);

        // product coming from above
        res.status(200).json({success: true, product});

    }
); 


// Get All Products --
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {

    
    // for Pagination 
    const resultPerPage = 8;

    // for front end to show how many products are available
    const productsCount = await Product.countDocuments();
    
    // For filter features
    const apiFeature = new ApiFeatures(Product.find() , req.query)
    .search()
    .filter()
    .pagination(resultPerPage); // calling the function to of the search


    // let products = await apiFeature.query;

    // let filteredProductsCount = products.length;


    // apiFeature.pagination(resultPerPage);

    // products = await apiFeature.query;  

    // before applying pagination to show only when products are fully need
    // let products = await apiFeature.query;
    // let filteredProductsCount = products.length;

    // apiFeature.pagination(resultPerPage);
    // // to get all products
    // // Product.find() now we can't use it again it will be mess
    // // so we use apiFeature.query we got from the search
    const products = await apiFeature.query;  

    // products coming from above
    res.status(200).json({
        success: true, 
        products,
        productsCount,
        resultPerPage,
        // filteredProductsCount, 
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
        product,
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


// Create New Review Or Update The review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {

    // taking input form the user
    const {rating,comment,productId} = req.body;
    

    // it will be the object that we will pass and create add as an review
    const review = {
        user:req.user._id,
        name:req.user.name,
        // to add as a number even if its a string to calculate it further
        // this is the rating withing the review
        rating: Number(rating),
        comment,
    }

    // find the product by the product id on which user added the review
    const product = await Product.findById(productId);

    // to check if the id of the user who input the review matched the id of the user who is logged in
    const isReviewed = product.reviews.find( (rev) => {
        if(rev.user.toString() === rev.user._id.toString());
    });

    // we will add the id for the product review later

    // if the user already reviewed the product - if he did already then we will add new reviews to product related to same id 
    if(isReviewed){

        // if the review already added with the id then we will just change the review rating and the comment
        product.reviews.forEach(
            (rev) => {
                if(rev.user.toString() === rev.user._id.toString());
                (rev.rating == rating) , (rev.comment == comment);
        }
        );

    }
    // if the product never reviewed - then add the review into the product  
    else{
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    };


    // this is to calculate the average review of the product

    let avg=0;

    // with every review we will add new reviews and then divide the all reviews by the total no of reviews
    // mistake saved the loop in a variable
    //first run the loop 
    product.reviews.forEach((rev) => {
        
        avg+=rev.rating;
    });


    product.ratings = avg / product.reviews.length ;
    

    // to save the review and all the other features related to it
    await product.save({validateBeforeSave:false});

    res.status(200).json({
        success:true,
    })

});



// to Get All Reviews On the Product
exports.getProductReviews = catchAsyncErrors( async(req,res,next)=>{

    // to find the product 
    const product = await Product.findById(req.query.id); 

    if(!product){
        return next(new ErrorHandler("Product Not Found", 404));
    }

    // reviews will already be present in the database to find
    res.status(200).json({
        success:true,
        reviews: product.reviews,
    })

});


// Delete Review
exports.deleteProductReview = catchAsyncErrors( async(req,res,next)=>{

    const product = await Product.findById(req.query.productId); 

    if(!product){
        return next(new ErrorHandler("Product Not Found", 404));
    }
    

    // this will contain every review we want to keep 
    // no await should be use when running a loop like filter 
    const reviews = product.reviews.filter((rev)=>
        // id is the id of the review when we create it
        rev._id.toString() !== req.query.id.toString()
    );

    let avg=0;

    reviews.forEach((rev) => {
        
        avg+=rev.rating;
    });


    const ratings = avg / reviews.length ;


    const numOfReviews = reviews.length;
    


    // to save the review and all the other features related to it
    await Product.findByIdAndUpdate(req.query.productId,
        {
            reviews,
            ratings,
            numOfReviews,
        },
        {
            new:true,
            runValidators:true,
            useFindAndModify:false
        });

    res.status(200).json({
        success:true,
    });

})
