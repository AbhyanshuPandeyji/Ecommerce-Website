const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productControllers.js');
const { isAuthenticatedUser , authorizeRoles } = require('../middleware/auth.js');

const router = express.Router(); 


// TO create Product - it will require the auth and the admin route
router.route('/product/new').post(isAuthenticatedUser , authorizeRoles("admin") , createProduct);


// To get product Details
router.route('/product/:id').get(getProductDetails); 

// To get all Products
router.route('/products').get( getAllProducts);


//To Update a Product
router.route("/product/:id").put(isAuthenticatedUser ,authorizeRoles("admin") , updateProduct);


// To delete A Product 
router.route("/product/:id").delete(isAuthenticatedUser , authorizeRoles("admin") , deleteProduct);





module.exports = router;