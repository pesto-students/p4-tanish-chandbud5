const express = require('express');
const {signin, signup} = require('../controllers/auth');

app = express.Router();
app.use(express.urlencoded({
    extended: true
}))
app.get('/signup', (req, res) => {
    res.render("signup");
});
app.get('/signin', (req, res) => {
    res.render("signin");
});
app.post('/signin', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    let response = await signin(email, password);
    res.render("home", {user: {email: response.email, name: response.name}});
})
app.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    req.session.email = email;
    let response = await signup(email, password, name);
    res.render("home", {user: {email: response.email, name: response.name}});
})

module.exports = app