const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.js');
const {jwt_auth_secret} = require('../config/keys')
const authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, jwt_auth_secret);
        const user = await UserModel.findOne({
            _id: payload._id,
            tokens: token
        });
        if (!user) {
            return res.status(401).send({
                message: 'You are not authorized'
            });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error)
        res.status(401).send({
            message: 'You are not authorized',
            error
        })
    }
}
module.exports = {
    authentication,
}