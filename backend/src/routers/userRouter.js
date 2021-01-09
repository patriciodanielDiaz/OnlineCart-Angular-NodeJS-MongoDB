const express =  require('express');
const router = express.Router();
const authJWT = require('../middlewares/authJWT');
const verifySingnUp = require('../middlewares/verifySignUp');
const userController = require('../controllers/userController');

//client
router.get('/profile',[authJWT.verifyToken,authJWT.isClient],userController.getProfile); 
router.put('/profile',[authJWT.verifyToken,authJWT.isClient],userController.updateUserLogin); 

//admin
router.get('/',[authJWT.verifyToken,authJWT.isAdmin],userController.getAll);
router.post('/',[authJWT.verifyToken,authJWT.isAdmin,verifySingnUp.checkTypeExist],userController.create);
router.get('/:userId',[authJWT.verifyToken,authJWT.isAdmin],userController.getById);
router.put('/:userId',[authJWT.verifyToken,authJWT.isAdmin],userController.updateUser,verifySingnUp.checkTypeExist);
router.delete('/:userId',[authJWT.verifyToken,authJWT.isAdmin],userController.deleteUser);

module.exports = router;
