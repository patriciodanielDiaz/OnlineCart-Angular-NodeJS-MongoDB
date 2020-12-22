const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/',orderController.getAllCart);
router.post('/:productId',orderController.addCart);
router.delete('/:productId',orderController.getCart);
router.get('/remove/:productId',orderController.remove);
router.get('/reduce/:productId',orderController.reduce);

module.exports = router;