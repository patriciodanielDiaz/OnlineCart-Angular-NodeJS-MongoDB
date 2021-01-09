const express =  require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifySingnUp = require('../middlewares/verifySignUp');

router.post('/signin',userController.signIn);
router.post('/signup',verifySingnUp.checkDuplicateUsernameOrEmail,userController.signUp);
//router.get('/logout',userController.getAll);

module.exports = router;