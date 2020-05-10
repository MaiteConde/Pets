const router = require('express').Router();
const MessageController = require('../controllers/MessageController');
const { authentication } = require('../middleware/authenticaction');
const { uploadMessageImages } = require('../middleware/multer.js')


// router.get('/', MessageController.getAll)
router.get('/get/:id', authentication, MessageController.getMessages) //los que envía la usuaria conectada 
// router.get('/get/:id', authentication, MessageController.getSenderMessage) //los que recibe la ususaria conectada
router.post('/:id', authentication, MessageController.insert)

module.exports = router;