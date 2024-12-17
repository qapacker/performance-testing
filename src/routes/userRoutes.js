const express = require('express');
const { getUsers, createUsers, deleteAllUsers } = require('../controllers/userController');

const router = express.Router();  // Initialize router before use

// Define routes
router.get('/users', getUsers);
router.post('/users/dummy', createUsers);
router.delete('/deleteusers', deleteAllUsers);

module.exports = router;
