const express =  require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/',userController.getAll);
router.post('/',userController.create);
router.get('/:userId',userController.getById);
router.put('/:userId',userController.updateUser);
router.delete('/:userId',userController.deleteUser);

module.exports = router;
