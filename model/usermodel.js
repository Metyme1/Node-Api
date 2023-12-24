const mongoose = require('mongoose');

// User Schema
const userSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, 'Please enter a first name'],
    },
    lname: {
      type: String,
      required: [true, 'Please enter a last name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter an email address'],
      unique: true, // Ensure emails are unique
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
