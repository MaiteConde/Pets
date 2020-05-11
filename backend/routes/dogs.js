const router = require('express').Router();
const DogController = require('../controllers/DogController.js');
const {authentication} = require('../middleware/authenticaction')
const { uploadDogImages } = require('../middleware/multer.js')
const {isAdmin} = require('../middleware/authenticaction');
const {isAuthor} = require('../middleware/authenticaction');

router.get('/',DogController.getAll);
router.get('/dogs/:id', DogController.getDogByUser)
router.get('/search/:search', DogController.getDogLocation)
router.get('/:id', DogController.getDogById)
router.post('/post',authentication, uploadDogImages.single('image'), DogController.insert);
router.put('/put/:_id', authentication, isAuthor, uploadDogImages.single('image'), DogController.update);

router.delete('/delete/:_id', authentication, DogController.delete);



module.exports=router;