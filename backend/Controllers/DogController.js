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
            user: req.user._id,
            adopted: false
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

update(req, res) { //new es para que devuelva el registro actualizado, por defecto es false por lo que la promesa se resuelve con el registro sin actualizar
    if (req.file) req.body.image_path = req.file.filename;
    if(req.user._id == req.body.user);
    Dog.findByIdAndUpdate(req.params._id, req.body, { new: true }) // mongoose method which uses the findOneAndUpdate()
        // Publication.findOneAndUpdate({_id:req.params._id} ) // Mongodb method
        .then(dog => res.send({ message: 'publication successfully updated', dog }))
        .catch(console.error)
},

async delete(req, res) {
    
    try {
        const _id = req.params._id
        await Dog.findByIdAndDelete(_id) // mongoose method which uses the findOneAndDelete()
        res.send({ message: 'publication deleted' })
    
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'there was a problem trying to remove the publication' })
    }


},


}


module.exports = DogController;
