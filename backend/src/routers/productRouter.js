const express =  require('express');
const router = express.Router();
var ProductController = require('../controllers/productController');
var authJWT = require('../middlewares/authJWT');


router.get('/',ProductController.getAll);
router.post('/',[authJWT.verifyToken,authJWT.isClient],ProductController.createPro);
router.put('/:productId',[authJWT.verifyToken,authJWT.isClient],ProductController.updatePro);
router.delete('/:productId',[authJWT.verifyToken,authJWT.isClient],ProductController.deletePro);
router.get('/:productId',ProductController.getProById);  
router.get('/',[authJWT.verifyToken,authJWT.isClient],ProductController.getProByUserId); //anda pero hay que modificarlo 

module.exports = router;