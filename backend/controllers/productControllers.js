// Product Schema
const Product = require("../models/productModel");



// Create Product -- Admin route ( Only Admin will access it will be implemented later)
exports.createProduct = async(req,res,next)=>{

    try {
        // to create a product
        const product = await Product.create(req.body);

        // product coming from above
        res.status(200).json({
            success:true,
            product 
        });
            
    } catch (error) {
        console.log(error)
    }

}



// Get All Products -- 
exports.getAllProducts = async(req,res,next)=>{
    try {
        // to get all products
        const products = await Product.find(); 
        
        // products coming from above
        res.status(200).json({
            success:true, products
        });
    } catch (error) {
        console.log(error)        
    }

}

// Get Product Details - later do it


// Update Product -- Admin only
exports.updateProduct = async(req,res,next)=>{
    try {
        
        let product = await  Product.findById(req.params.id);
        if(!product){
            return res.status(500).json({
                success:false,
                message:"Product not Found"
            })
        }
    
        product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        })
        
        res.status(200).json({
            success:true,
            product
        })
    } catch (error) {
        console.log(error)
    }
}

// Delete Product - By Admin Only

exports.deleteProduct = async(req,res,next)=>{
    try {
        // to get product id
        const product = await Product.findById(req.params.id);

        if(!product){
            return res.status(500).json({
                success:false,
                message:"Product not Found"
            })
        }


    // delete one instead of the remove() function
       await product.deleteOne();

       res.status(200).json({
        success:true,
        message:`Product with id : ${req.params.id} is been deleted `
    })


    } catch (error) {
        console.log(error)
    }
}