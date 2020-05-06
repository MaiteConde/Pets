const router = require('express').Router();
const DogController = require('../controllers/DogController.js');
const {authentication} = require('../middleware/authenticaction')
const { uploadDogImages } = require('../middleware/multer.js')
const {isAdmin} = require('../middleware/authenticaction');
const {isAuthor} = require('../middleware/authenticaction');

router.get('/',DogController.getAll);
router.get('/dogs/:id', authentication, DogController.getDogByUser)
router.get('/:id', authentication, DogController.getDogById)
router.post('/post',authentication, uploadDogImages.single('image'), DogController.insert);
router.put('/put/:_id', authentication, isAuthor, uploadDogImages.single('image'), DogController.update);

router.delete('/delete/:_id', authentication, isAdmin, DogController.delete);



module.exports=router;