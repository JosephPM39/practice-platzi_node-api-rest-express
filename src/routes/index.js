const express = require('express');
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const customersRouter = require('./customer.router');
const categoriesRouter = require('./categories.router');
const orderRouter = require('./orders.router');
const authRouter = require('./auth.router');

function routerApi(app) {
    //ruta padre
    const router = express.Router();
    app.use('/api/v1', router);

    //demás rutas
    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
    router.use('/users', usersRouter);
    router.use('/orders', orderRouter);
    router.use('/customers', customersRouter);
    router.use('/auth', authRouter);
}

module.exports = routerApi;
