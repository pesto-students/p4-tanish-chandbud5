const express = require('express');
const path = require('path');
const routesAuth = require('./src/routes/auth');
const routesStock = require('./src/routes/stocks');

// Connecting to database
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://chand:1234@nodetutorial.adgaqkr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

const app = express();
app.use('/', routesAuth);
app.use('/stock', routesStock);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, './src/templates'));

app.listen(3000, () => {
    console.log("server is up and running...");
})

module.exports = client