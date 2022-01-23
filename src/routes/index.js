const express = require('express');
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');

function routerApi(app) {
    //ruta padre
    const router = express.Router();
    app.use('/api/v1', router);

    //demás rutas
    router.use('/products', productsRouter);
    router.use('/users', usersRouter);
}

module.exports = routerApi;
