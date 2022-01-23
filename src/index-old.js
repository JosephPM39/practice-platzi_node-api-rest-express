const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

//Practicando con GET

//Usando el método get, para obtener una lista de productos
//Si usamos query, podemos traernos la cantidad deseada de elementos de esta forma
//URL example: /productos?limit=89
app.get('/productos', (req, res) => {
    const {size} = req.query;
    const limit = size || 10;
    const productos = [];
    for (let index = 0; index < limit; index++) {
        productos.push(
            {
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
            }
        )

    }

    res.json(productos);
});

app.get('/productos/filtro', (req, res) => {
    res.send("este es un filtro");
});

//Usando el método get, para obtener un producto por su id
app.get('/productos/:id', (req, res) => {
    const { id } = req.params;
    res.json(
        {
            id,
            name: "producto 1",
            fecha: "2022"
        },
    );
});



//Usando el método get, para obtener un producto por su id y por su fecha
app.get('/productos/:id/:fecha', (req, res) => {
    const { id, fecha } = req.params;
    res.json(
        {
            id,
            name: "producto 1",
            fecha
        },
    );
});

//Usando el método get, para obtener un producto con su categoría, por id
app.get('/categorias/:categoria_id/productos/:producto_id', (req, res) => {
    const { categoria_id, producto_id } = req.params;
    res.json(
        {
            categoria_id,
            producto_id,
            name: "producto 1",
        },
    );
});

//GET PARÁMETROS QUERY

//La URL final en el navegador quedaría como: /users?limit=value&offset=value
app.get('/users', (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json(
            {
                limit,
                offset
            }
        );
    } else {
        res.send("sin parametros puestos");
    }
});

app.listen(port, () => {
    console.log('mi puerto ', port)
})