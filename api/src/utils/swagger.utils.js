const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API TuneMatch',
            description: 'Bienvenidos a la API de TuneMatch',
            version: '1.0.0',
        },
    },
    apis: ['**/docs/*.yaml'],
};

const openapiSpecification = swaggerJsdoc(options);
module.exports = openapiSpecification