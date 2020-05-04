const router = require('express').Router();
const DogController = require('../controllers/DogController.js');
const {authentication} = require('../middleware/authenticaction')
const { uploadDogImages } = require('../middleware/multer.js')

router.get('/',DogController.getAll);
router.get('/dog', authentication, DogController.getDogByUser)
router.get('/:id', authentication, DogController.getDogById)
router.post('/post',authentication, uploadDogImages.single('image'), DogController.insert);



module.exports=router;