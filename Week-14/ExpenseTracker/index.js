const express = require('express');
const path = require('path');
const session = require('express-session');
const routesAuth = require('./src/routes/auth');
const routesIncome = require('./src/routes/income');

const app = express();
app.use('/', routesAuth);
app.use('/income', routesIncome);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, './src/templates'));
app.use(session({secret: "secret"}));

app.listen(3000, () => {
    console.log("server is up and running...");
})
