const router = require('express').Router();
const CatController = require('../controllers/CatController.js');
const {authentication} = require('../middleware/authenticaction')
const { uploadCatImages } = require('../middleware/multer.js')




router.get('/', CatController.getAll);
router.get('/cat', authentication, CatController.getCatByUser)
router.get('/:id', authentication, CatController.getCatById)
router.post('/post',authentication, uploadCatImages.single('image'), CatController.insert);



module.exports=router;