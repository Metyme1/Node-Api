const Order = require('../models/ordermodel');
const Product = require('../models/productmodel');

// Create a new order
const createOrder = async (req, res) => {
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
};

// Add other order-related controller functions as needed

module.exports = { createOrder };
