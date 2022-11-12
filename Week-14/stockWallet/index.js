const express = require('express');
const path = require('path');
const routesAuth = require('./src/routes/auth');
const routesStock = require('./src/routes/stocks');

const app = express();
app.use('/', routesAuth);
app.use('/stock', routesStock);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, './src/templates'));

app.listen(3000, () => {
    console.log("server is up and running...");
})