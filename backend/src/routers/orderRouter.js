const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/',orderController.getAll);
router.get('/',orderController.createOder);
router.put('/:orderId',orderController.updateOrder);
router.delete('/:orderId',orderController.deleteOrder);
router.get('/:orderId',orderController.getOrderById);

module.exports = router;