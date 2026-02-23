const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

router.post('/place', orderController.placeOrder);
router.get('/', orderController.getOrders);

module.exports = router;