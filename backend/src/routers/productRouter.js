const express =  require('express');
const router = express.Router();
var ProductController = require('../controllers/productController');


router.get('/',ProductController.getAll);

module.exports = router;