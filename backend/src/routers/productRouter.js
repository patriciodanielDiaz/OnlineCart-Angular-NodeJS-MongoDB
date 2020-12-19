const express =  require('express');
const router = express.Router();
var ProductController = require('../controllers/productController');


router.get('/',ProductController.getAll);
router.post('/',ProductController.createPro);
router.put('/:productId',ProductController.updatePro);
router.delete('/:productId',ProductController.deletePro);
router.get('/:productId',ProductController.getProById);
router.get('/',ProductController.getProByUserId); //anda pero hay que modificarlo

module.exports = router;