const express = require('express');
const router = express.Router();
const orderController = require('../controller/ordercontroller'); 

// Route to create a new order
router.post('/', orderController.createOrder);

// Route to get a list of all orders
router.get('/', orderController.getAllOrders);

// Route to get a specific order by ID
router.get('/:id', orderController.getOrderById);

// Route to update an existing order by ID
router.put('/:id', orderController.updateOrder);

// Route to delete an order by ID
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
