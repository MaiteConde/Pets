const Dog = require('../models/Dog');
const DogController = {
    

    getAll(req, res) {
        Dog.find()
            .populate('user')
            .then(dogs => res.send({ dogs }))
            .catch(console.error)
    },
    
    insert(req, res) {
        if (req.file) req.body.image_path = req.file.filename;

    Dog.create({
            ...req.body,
            user: req.user._id
        })
        .then(dog => res.status(201).send(dog))
        .catch(error => {
            console.error(error)
            res.status(500).send(error)
        })
},

getDogByUser(req, res) {
    Dog.find({user: req.user})
  
        .then(dogs => res.send({ dogs }))
        .catch(console.error)
},


getDogById(req, res) {
    Dog.find({_id: req.params.id})
 
        .then(dog => res.send({dog}))
        .catch(console.error)
},



}


module.exports = DogController;
