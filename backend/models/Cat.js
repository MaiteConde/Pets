const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const CatSchema = new mongoose.Schema({
    name: String,
    breed: String,
    Age: String,
    History: String,
    image_path: String,
    user: {
        type: ObjectId,
        ref: 'User'
    },
  

}, {
    timestamps: true
});

const Cat = mongoose.model('Cat', CatSchema);
module.exports= Cat;