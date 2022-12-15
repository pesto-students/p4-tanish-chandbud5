const express = require('express');
const { add, viewAll, deleteincome, getOne, updateincome, filterByDate } = require('../controllers/income');

app = express.Router();
app.use(express.urlencoded({
    extended: true
}))

// Home route for income listing all entries of income from that user
app.get('/home', async (req, res) => {
    let email = req.session.email;
    let name = req.session.name;
    let data = await viewAll(email);
    res.render("income", {data: data, user: {email: email, name: name}})
});

// Add income to Database
app.post('/add', async (req, res) => {
    const type = req.body.type;
    const amount = req.body.amount;
    const date = req.body.date;
    let email = req.session.email;
    let result = await add(type, amount, date, email);
    res.redirect('/income/home');
})

// Delete income from database using ID
app.get('/delete/:id', async (req, res) => {
    let object_id = req.params.id;
    let data = await deleteincome(object_id);
    res.redirect('/income/home')
})

// Update income get request to render update template
app.get('/update/:id', async (req, res) => {
    let object_id = req.params.id;
    let data = await getOne(object_id);
    res.render("update", {object: data});
})

// Update income post request to update in database using ID
app.post('/update/:id', async(req, res) => {
    let object_id = req.params.id;
    const type = req.body.type;
    const amount = req.body.amount;
    const date = req.body.date;
    let data = await updateincome(object_id, type, amount, date);
    res.redirect('/income/home')
})

// Filter by using date and given user
app.post('/filter', async(req, res) => {
    let from = req.body.from;
    let to = req.body.to;
    let email = req.session.email;
    let results = await filterByDate(from, to, email);
    res.render("filter", {data: results, from : from, to: to, type: "income"});
})

module.exports = app;