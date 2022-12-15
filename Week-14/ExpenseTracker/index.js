require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const routesAuth = require('./src/routes/auth');
const routesIncome = require('./src/routes/income');
const routesExpense = require('./src/routes/expense');

const app = express();
// Adding routes
app.use('/', routesAuth);
app.use('/income', routesIncome);
app.use('/expense', routesExpense);

// Defining view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, './src/templates'));

// creating session
app.use(session({secret: "secret"}));

app.listen(3000, () => {
    console.log("server is up and running...");
})
