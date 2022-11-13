const express = require('express');
const { add, viewAll, deleteExpense, getOne, updateExpense, filterByDate } = require('../controllers/expense');

app = express.Router();
app.use(express.urlencoded({
    extended: true
}))

// list all expenses of user
app.get('/home', async (req, res) => {
    let email = req.session.email;
    let name = req.session.name;
    let data = await viewAll(email);
    res.render("expense", {data: data, user: {email: email, name: name}})
});

// Add expenses for a user
app.post('/add', async (req, res) => {
    const type = req.body.type;
    const amount = req.body.amount;
    const date = req.body.date;
    let email = req.session.email;
    let result = await add(type, amount, date, email);
    res.redirect('/expense/home');
})

// delete expenses using ID
app.get('/delete/:id', async (req, res) => {
    let object_id = req.params.id;
    let data = await deleteExpense(object_id);
    res.redirect('/expense/home')
})

// Update expese get route to render update page
app.get('/update/:id', async (req, res) => {
    let object_id = req.params.id;
    let data = await getOne(object_id);
    res.render("update", {object: data});
})

// update post route to update data in database using ID
app.post('/update/:id', async(req, res) => {
    let object_id = req.params.id;
    const type = req.body.type;
    const amount = req.body.amount;
    const date = req.body.date;
    let data = await updateExpense(object_id, type, amount, date);
    res.redirect('/expense/home')
})

// Filter by using date
app.post('/filter', async(req, res) => {
    let from = req.body.from;
    let to = req.body.to;
    let email = req.session.email;
    let results = await filterByDate(from, to, email);
    res.render("filter", {data: results, from : from, to: to, type: "expense"});
})

module.exports = app;