const Order = require('../model/ordermodel');
const Product = require('../model/productmodel');
const asyncHandler = require('express-async-handler')
// Create a new order
const createOrder = asyncHandler(async (req, res) => {
  try {
    const { productId, userId, quantity } = req.body;

    // Fetch the product details based on productId
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Calculate the total price based on the quantity and product price
    const totalPrice = quantity * product.price;

    // Create a new order document
    const order = new Order({
      product: productId,
      user: userId,
      quantity,
      totalPrice,
      // Add other order details as needed
    });

    // Save the order to the database
    await order.save();

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Failed to place the order', error });
  }
});

const getAllOrders = asyncHandler(async (req, res) => {
    try {
      const orders = await Order.find({}).populate('product').populate('user');
      // You can use `.populate()` to populate the "product" and "user" fields with their respective data
  
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch orders', error });
    }
  });
  const getOrderById = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findById(id).populate('product').populate('user');
  
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch order', error });
    }
  });
  
  // Update an existing order by ID
  const updateOrder = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });
  
      if (!updatedOrder) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      res.status(200).json(updatedOrder);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update order', error });
    }
  });
  
  // Delete an order by ID
  const deleteOrder = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const deletedOrder = await Order.findByIdAndDelete(id);
  
      if (!deletedOrder) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete order', error });
    }
  });

module.exports = { 
    createOrder ,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};
