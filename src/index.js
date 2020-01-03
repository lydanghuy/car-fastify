
// Import Server
const fastify = require('./server.js')
const routes = require('./routes');
const swagger = require('./config/swagger');

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options);

// Declare a route
fastify.get('/', async (request, reply) => {
    return { welcome: 'CAR' };
})


routes.forEach((route, index) => {
    fastify.route(route);
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.swagger();
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();

