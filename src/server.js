// Require the fastify framework and instantiate it
const fastify = require('fastify')({
	logger: true
});
const config = require('./config/config');

// Require external modules
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.log(err));

module.exports = fastify;