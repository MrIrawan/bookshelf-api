const Hapi = require('@hapi/hapi');
const routes = require('./utils/routes');

const initServer = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*']
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

initServer();