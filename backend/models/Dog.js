const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const DogSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: String,
    history: String,
    image_path: String,
    user: {
        type: ObjectId,
        ref: 'User'
    },

}, {
    timestamps: true
});

const Dog = mongoose.model('Dog', DogSchema);
module.exports= Dog;