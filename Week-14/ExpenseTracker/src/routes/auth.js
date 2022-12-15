const express = require('express');
const {signin, signup} = require('../controllers/auth');
const session = require('express-session')

app = express.Router();
app.use(express.urlencoded({
    extended: true
}))
app.use(session({secret : "secret"}))

// Signup get route to render sign up form
app.get('/signup', (req, res) => {
    res.render("signup");
});

// signin get route to render signin form
app.get('/signin', (req, res) => {
    res.render("signin");
});

// signin post route to sign in user and set his data in session
app.post('/signin', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    let response = await signin(email, password);
    req.session["email"] = email
    req.session["name"] = response.name
    console.log(req.session)
    res.redirect('/home');
})

// sign up post route to sign up user and set his data in session
app.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.fullname;
    let response = await signup(email, password, name);
    req.session["email"] = email
    req.session["name"] = name
    console.log(req.session)
    res.redirect('/home');
})

// signout route to destroy session and redirect to sign in page
app.get('/signout', (req, res) => {
    req.session.destroy();
    res.redirect('/signin');
})

// Home route to navigate for expenses and income
app.get('/home', async(req, res) => {
    let email = req.session.email
    let name = req.session.name
    res.render("index", {user: {email: email, name: name}})
})

module.exports = app