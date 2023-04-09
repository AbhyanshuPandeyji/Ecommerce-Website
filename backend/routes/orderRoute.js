const express = require('express');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const { newOrder, getSingleOrder, myOrder, getAllOrders, updateOrder, deleteOrder } = require('../controllers/orderController');
const router = express.Router();

// To Create An Order
router.route("/order/new").post(isAuthenticatedUser , newOrder);

// To Get The single Order - User Should be able to see his single order
router.route("/order/:id").get(isAuthenticatedUser , getSingleOrder);

// To get the All Orders done by a User
router.route("/orders/me").get(isAuthenticatedUser , myOrder);

// to Get All Order -- Admin
router.route("/admin/orders").get(isAuthenticatedUser , authorizeRoles("admin") , getAllOrders);

// to Update An order Status
router.route("/admin/order/:id").put(isAuthenticatedUser , authorizeRoles("admin") , updateOrder);

// To Delete an order 
router.route("/admin/order/:id").delete(isAuthenticatedUser , authorizeRoles("admin") , deleteOrder);





module.exports = router;