const express = require('express');
const cookBookRoute = require('./routes/cookBookRoute.js')

const server = express();

server.use(express.json());

server.use('/api/recipes', cookBookRoute);

server.use('/', (req, res) => {
    res.send(`<h2>Root Route is Printing something!!!</h2>`)
});

module.exports = server;