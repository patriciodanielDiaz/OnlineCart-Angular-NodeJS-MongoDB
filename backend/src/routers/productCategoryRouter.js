const { Router } = require('express');
const express =require('express');
const router = express.Router();
var productCategoryController = require('../controllers/productCategoryController');

router.get('/',productCategoryController.getAll);
router.post('/',productCategoryController.create);

module.exports =router;
