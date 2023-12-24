const User = require ('../model/usermodel')
const asyncHandler = require('express-async-handler')


const getAllUsers = asyncHandler(async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // @desc Get user by ID
  // @route GET /api/users/:id
  // @access Public
  const getUserById = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  const updateUserById = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

const deleteUserById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const createUser = asyncHandler(async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    createUser, // Add the new createUser function
  };
  