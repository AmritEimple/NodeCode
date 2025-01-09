const express = require('express');
const { createUser, fetchUsers, getUser  } = require('../controllers/userController');
//{ addUser, getUsers, getUserById }

const router = express.Router();

router.post('/api/users', createUser); // Add user
router.get('/api/get/users', fetchUsers);  // Fetch all users
router.get('/api/users/:id', getUser);

//test
module.exports = router;
