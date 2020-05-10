const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('../backend/config/keys')
const usersRouter = require('./routes/user')
const dogsRouter = require('./routes/dogs')
const catsRouter = require('./routes/cats')
const messagesRouter = require('./routes/messages')





const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.error(err))

app.use(express.urlencoded({ extended: true }));
// Express body parser
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

app.use('/users',usersRouter)
app.use('/dogs',dogsRouter)
app.use('/cats',catsRouter)
app.use('/messages',messagesRouter)



const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));



