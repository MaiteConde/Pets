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

    async getMessageUser(req, res) {
        try {

            const recibidos = await Message.find({recipient: req.user.id })
            .populate('sender')
            .populate('recipient')
            const enviados = await Message.find({ sender: req.user.id})
            .populate('sender')
            .populate('recipient')
            const recibidosRev = recibidos.reverse()
            const enviadosRev = enviados.reverse()

            res.status(201).send({ recibidosRev, enviadosRev})
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to get your messages' })
        }
    },




   
    async getMessages(req, res) {
        try {

            const recibidos = await (await Message.find({ sender: req.params.id, recipient: req.user._id }))
            .populate('sender')
            .populate('recipient')

            const enviados = await Message.find({ sender: req.user.id, recipient: req.params._id})
            .populate('sender')
            .populate('recipient')
            const recibidosRev = recibidos.reverse()
            const enviadossRev = enviadoss.reverse()

            // const messages = recibidos.concat(enviados).sort()
            res.status(201).send(recibidos.reverse())
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to get your messages' })
        }
    },


    getMessageId(req, res) {
        Message.findById(req.params.id)
        .populate('sender')
        .populate('recipient')
        // .populate('stars.user')
            .then(message => res.send(message),  )
            .catch(console.error);
    },
}






module.exports = MessageController