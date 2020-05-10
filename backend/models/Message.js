const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId

const MessageSchema = new mongoose.Schema({
    message: {
        type: String,
    },
    subject: String,
    
    image_path: String,

    sender: {
        type: ObjectId,
        ref: 'User'
    },
    recipient: {
        type: ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Message', MessageSchema);