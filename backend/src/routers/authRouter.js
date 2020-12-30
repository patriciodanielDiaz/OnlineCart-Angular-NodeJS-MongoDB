const express =  require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signin',userController.signIn);
router.post('/signup',userController.signUp);
//router.get('/logout',userController.getAll);

module.exports = router;