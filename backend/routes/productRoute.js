const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productControllers.js');

const router = express.Router(); 


// TO create Product
router.route('/product/new').post(createProduct);


// To get product Details
router.route('/product/:id').get(getProductDetails);

// To get all Products
router.route('/products').get(getAllProducts);


//To Update a Product
router.route("/product/:id").put(updateProduct);


// To delete A Product 
router.route("/product/:id").delete(deleteProduct);





module.exports = router;