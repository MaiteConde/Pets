const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.js');
const {jwt_auth_secret} = require('../config/keys')
const Dog = require('../models/Dog.js')
const Cat= require('../models/Cat.js')

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

const isAdmin = async (req, res, next) => {
    const admins =['admin'];
    if (!admins.includes(req.user.role)) {
        return res.status(403).send({
            message: 'You do not have permission'
        });
    }
    next();
}

const isAuthor = async(req, res, next) => {
    try {
        const dog = await Dog.findById(req.params._id); 
        if (dog.user.toString() !== req.user._id.toString()) { 
            return res.status(403).send({ message: 'No eres autor de la publicación' });
        }
        next();
    } catch (error) {
        console.error(error)
        return res.status(500).send({ error, message: 'Ha habido un problema al comprobar la autoría de la publicación' })
    }
}

    const isAuthorCat = async(req, res, next) => {
        try {
            const cat = await Cat.findById(req.params._id); 
            if (cat.user.toString() !== req.user._id.toString()) { 
                return res.status(403).send({ message: 'No eres autor de la publicación' });
            }
            next();
        } catch (error) {
            console.error(error)
            return res.status(500).send({ error, message: 'Ha habido un problema al comprobar la autoría de la publicación' })
        }
}

module.exports = {
    authentication,
    isAdmin, 
    isAuthor,
    isAuthorCat
}