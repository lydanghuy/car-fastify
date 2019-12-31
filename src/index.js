// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
});
const mongoose = require('mongoose');
const config = require('./config/config');
const routes = require('./routes');
// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
})

// Connect to DB
mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.log(err))

routes.forEach((route, index) => {
    fastify.route(route)
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();

