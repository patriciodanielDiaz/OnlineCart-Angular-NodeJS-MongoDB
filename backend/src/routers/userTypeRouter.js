const express =  require('express');
const router = express.Router();
const authJWT = require('../middlewares/authJWT');
var userTypeController = require('../controllers/userTypeController');

//admin
router.get('/',[authJWT.verifyToken,authJWT.isAdmin],userTypeController.getAll);
router.post('/',[authJWT.verifyToken,authJWT.isAdmin],userTypeController.create);

module.exports = router;