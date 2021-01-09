const { Router } = require('express');
const express =require('express');
const router = express.Router();
var authJWT = require('../middlewares/authJWT');
var productCategoryController = require('../controllers/productCategoryController');

router.get('/',[authJWT.verifyToken,authJWT.isAdmin],productCategoryController.getAll);
router.post('/',[authJWT.verifyToken,authJWT.isAdmin],productCategoryController.create);

module.exports =router;
