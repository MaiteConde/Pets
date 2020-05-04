const Cat = require('../models/Cat');
const CatController = {
    

    getAll(req, res) {
        Cat.find()
            .populate('user')
            .then(cats => res.send({ cats }))
            .catch(console.error)
    },
    
    insert(req, res) {
        if (req.file) req.body.image_path = req.file.filename;

    Cat.create({
            ...req.body,
            user: req.user._id
        })
        .then(cat => res.status(201).send(cat))
        .catch(error => {
            console.error(error)
            res.status(500).send(error)
        })
},
getCatByUser(req, res) {
    Cat.find({user: req.user})
  
        .then(cats => res.send({ cats }))
        .catch(console.error)
},

getCatById(req, res) {
    Cat.find({_id: req.params.id})
 
        .then(cat => res.send({ cat}))
        .catch(console.error)
},


}
module.exports = CatController;
