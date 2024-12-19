const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);


module.exports = router;
