const express =  require('express');
const router = express.Router();
var userTypeController = require('../controllers/userTypeController');


router.get('/',userTypeController.getAll);
router.post('/',userTypeController.create);

module.exports = router;