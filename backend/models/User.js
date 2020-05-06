const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const UserSchema = new mongoose.Schema({
    name: String,
    surname: String,
    userInfo: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
   
    role: String,

    image_path:String,

    tokens: [String],
    
    
}, {
    timestamps: true
});
UserSchema.methods.toJSON = function (params) {
    const user = this._doc;
    delete user.tokens;
    delete user.password;
    delete user.__v;
    return user;
}
const User = mongoose.model('User', UserSchema);
module.exports= User;