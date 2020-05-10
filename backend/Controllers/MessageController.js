const Message = require('../models/Message.js');

const MessageController = {
    getAll(req, res) {

        Message.find({})
            .then(messages => res.send(messages))
            .catch(console.error)
    },

    insert(req, res) {
        if (req.file) req.body.image_path = req.file.filename;
        Message.create({...req.body, sender: req.user.id, recipient: req.params.id })
            .then(message => res.status(201).send(message))
            .catch(console.error)
    },

    // getMessage(req, res) {

    //     Message.find({ sender_name: req.user.name })
    //         .then(messages => res.status(201).send(messages))
    //         .catch(console.error)
    // },
   
    async getMessages(req, res) {
        try {

            const recibidos = await Message.find({ sender: req.params.id, recipient: req.user.id })
            .populate('sender')
            .populate('recipient')

            const enviados = await Message.find({ sender: req.user.id, recipient: req.params.id })
            .populate('sender')
            .populate('recipient')
            // const messages = recibidos.concat(enviados).sort()
            res.status(201).send({ recibidos, enviados})
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to get your messages' })
        }
    }
}




module.exports = MessageController