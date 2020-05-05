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
            user: req.user._id,
            adopted: false
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

update(req, res) { 
    if (req.file) req.body.image_path = req.file.filename;
    if(req.user._id == req.body.user);
    // console.log('holi')
    Cat.findByIdAndUpdate(req.params._id, req.body, { new: true }) 
        .then(cat => res.send({ message: 'publication successfully updated', cat }))
        .catch(console.error)
},

async delete(req, res) {
    
    try {
        const _id = req.params._id
        await Cat.findByIdAndDelete(_id) // mongoose method which uses the findOneAndDelete()
        res.send({ message: 'publication deleted' })
    
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'there was a problem trying to remove the publication' })
    }


},

}
module.exports = CatController;
