const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const {authentication} = require('../middleware/authenticaction')
const { uploadDogImages } = require('../middleware/multer.js')
const {isAdmin} = require('../middleware/authenticaction');



router.get('/info',authentication, UserController.getInfo);
router.get('/user/:_id',authentication, UserController.getInfoId);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/logout', authentication, UserController.logout);
router.put('/put', authentication, uploadDogImages.single('image'), UserController.update);

router.delete('/delete/:_id', authentication, isAdmin, UserController.delete);


module.exports=router;