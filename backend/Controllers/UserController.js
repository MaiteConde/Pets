const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
    jwt_auth_secret
} = require('../config/keys');
const UserController = {
    async register(req, res) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 9)
            const user = await User.create(req.body);
            res.status(201).send({
                user,
                message: 'Usuario creado con éxito'
            })
        } catch (error) {
            console.error(error)
            res.status(500).send({
                message: 'Hubo un problema al intentar registrar al usuario',
                error
            })
        }
    },
    getInfo(req, res) {
        User.findById(req.user._id)
      
            .then(user => res.send(user))
            .catch(console.error);
    },
    async follow(req, res) {
        try {
            console.log(req.user.following.includes(req.params.user_id))
            if (!req.user.following.includes(req.params.user_id)) {
                await User.findByIdAndUpdate(req.user._id, {
                    $push: {
                        following: req.params.user_id
                    }
                });
                await User.findByIdAndUpdate(req.params.user_id, {
                    $push: {
                        followers: req.user._id
                    }
                });
            }
            res.send(req.user)
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'There was a problem trying to follow'
            })
        }
    },
    async login(req, res) {
        try {
            const user = await User.findOne({
                email: req.body.email
            });
            if (!user) {
                return res.status(400).send({
                    message: 'Email o contraseña incorrectos'
                })
            }
            const isMatch = bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({
                    message: 'Email o contraseña incorrectos'
                })
            }
            const token = jwt.sign({
                _id: user._id
            }, jwt_auth_secret);
            user.tokens.push(token);
            await user.replaceOne(user);
            res.send({
                user,
                token,
                message: 'Conectado con éxito'
            })
        } catch (error) {
            console.error(error)
            res.status(500).send({
                message: 'Hubo un problema al intentar conectar al usuario'
            })
        }
    },

    logout(req, res) {
        User.findByIdAndUpdate(req.user._id, { $pull: { tokens: req.headers.authorization } })
            .then(() => res.send({ message: 'Desconectado con éxito' }))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'Hubo un problema al intentar conectar al usuario'
                })
            })
    }
}

module.exports = UserController;