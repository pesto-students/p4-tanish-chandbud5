const express = require('express');
const { add, viewAll, deleteincome, getOne, updateincome, filterByDate } = require('../controllers/income');

app = express.Router();
app.use(express.urlencoded({
    extended: true
}))
app.get('/home', async (req, res) => {
    let data = await viewAll();
    let email = "chandbud5@gmail.com"
    res.render("home", {data: data, user: {email: email, name: "Chand"}})
});

app.post('/add', async (req, res) => {
    const type = req.body.type;
    const amount = req.body.amount;
    const date = req.body.date;
    let email = "chandbud5@gmail.com"
    let result = await add(type, amount, date, email);
    res.redirect('/income/home');
})

app.get('/delete/:id', async (req, res) => {
    let object_id = req.params.id;
    let data = await deleteincome(object_id);
    res.redirect('/income/home')
})

app.get('/update/:id', async (req, res) => {
    let object_id = req.params.id;
    let data = await getOne(object_id);
    res.render("update", {object: data});
})

app.post('/update/:id', async(req, res) => {
    let object_id = req.params.id;
    const type = req.body.type;
    const amount = req.body.amount;
    const date = req.body.date;
    let data = await updateincome(object_id, type, amount, date);
    res.redirect('/income/home')
})

app.post('/filter', async(req, res) => {
    let from = req.body.from;
    let to = req.body.to;
    let results = await filterByDate(from, to);
    res.render("filter", {data: results, from : from, to: to});
})

module.exports = app;