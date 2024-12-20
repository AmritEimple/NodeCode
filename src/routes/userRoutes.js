const express = require('express');
const { createUser, fetchUsers } = require('../controllers/userController');

const router = express.Router();

router.post('/api/users', createUser); // Add user
router.get('/api/get/users', fetchUsers);  // Fetch all users

module.exports = router;
