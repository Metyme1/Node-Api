const express = require('express');
const router = express.Router();
const User = require('../model/usermodel')
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createUser,
} = require('../controller/usercontroller');

// Route for getting all users
router.get('/', getAllUsers);

// Route for getting a user by ID
router.get('/:id', getUserById);

// Route for updating a user by ID
router.put('/:id', updateUserById);

// Route for deleting a user by ID
router.delete('/:id', deleteUserById);
router.post('/', createUser);

module.exports = router;
