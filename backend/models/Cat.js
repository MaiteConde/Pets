const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const CatSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: String,
    history: String,
    image_path: String,
    adopted: Boolean,
    user: {
        type: ObjectId,
        ref: 'User'
    },
  

}, {
    timestamps: true
});

const Cat = mongoose.model('Cat', CatSchema);
module.exports= Cat;