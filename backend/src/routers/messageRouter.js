const express =  require('express');
const router = express.Router();
const authJWT = require('../middlewares/authJWT');
const verifySingnUp = require('../middlewares/verifySignUp');
const messageController = require('../controllers/messageController');

router.post('/',[authJWT.verifyToken,authJWT.isClient],messageController.create); 
router.delete('/',[authJWT.verifyToken,authJWT.isClient],messageController.deletedMessage); 
router.get('/',[authJWT.verifyToken,authJWT.isClient],messageController.getByUserId);
router.get('/admin',[authJWT.verifyToken,authJWT.isAdmin],messageController.getAll); 

module.exports = router;