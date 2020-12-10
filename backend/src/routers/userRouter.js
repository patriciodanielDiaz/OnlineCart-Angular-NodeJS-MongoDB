const express =  require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/',userController.getAll);
router.post('/',userController.create);
router.get('/:userId',userController.getById);

router.get('/signin',userController.getAll);
router.get('/signup',userController.getAll);
router.get('/logout',userController.getAll);

module.exports = router;
