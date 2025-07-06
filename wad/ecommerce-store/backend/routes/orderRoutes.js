
const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

router.post('/', async (req, res) => {
  const order = new Order(req.body);
  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
});

router.get('/', async (req, res) => {
  const orders = await Order.find().populate('user', 'name email');
  res.json(orders);
});

module.exports = router;
