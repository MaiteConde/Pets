const router = require('express').Router();
const CatController = require('../controllers/CatController.js');
const {authentication} = require('../middleware/authenticaction')
const { uploadCatImages } = require('../middleware/multer.js')
const {isAdmin} = require('../middleware/authenticaction')
const {isAuthorCat} = require('../middleware/authenticaction');




router.get('/', CatController.getAll);
router.get('/cats/:id', authentication, CatController.getCatByUser)
router.get('/:id',  CatController.getCatById)
router.post('/post',authentication, uploadCatImages.single('image'), CatController.insert);
router.put('/put/:_id', authentication, isAuthorCat, uploadCatImages.single('image'),  CatController.update);
router.delete('/delete/:_id', authentication, isAdmin, CatController.delete);





module.exports=router;