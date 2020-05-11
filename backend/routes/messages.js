const router = require('express').Router();
const MessageController = require('../controllers/MessageController');
const { authentication } = require('../middleware/authenticaction');
const { uploadMessageImages } = require('../middleware/multer.js')


// router.get('/', MessageController.getAll)
router.get('/get/user/:id', authentication, MessageController.getMessages) 
router.get('/get', authentication, MessageController.getMessageUser) 
router.get('/message/:id', authentication, MessageController.getMessageId) 
router.post('/:id', authentication, MessageController.insert)

module.exports = router;