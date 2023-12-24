const mongoose = require('mongoose');

// Define the Order schema
const orderSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // Reference to the Product model
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    // Add other fields as needed for your order, e.g., shipping address, order date, etc.
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the Order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
