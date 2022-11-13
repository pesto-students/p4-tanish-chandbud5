const express = require('express');
const { add, viewAll, deleteStock, getOne, updateStock } = require('../controllers/income');

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
    const stock = req.body.stock;
    const value = req.body.value;
    let email = "chandbud5@gmail.com"
    let result = await add(stock, value, email);
    console.log(result);
    res.redirect('/stock/home');
})

app.get('/delete/:id', async (req, res) => {
    let object_id = req.params.id;
    let data = await deleteStock(object_id);
    console.log(data);
    res.redirect('/stock/home')
})

app.get('/update/:id', async (req, res) => {
    let object_id = req.params.id;
    let data = await getOne(object_id);
    console.log(data);
    res.render("updateStock", {object: data});
})

app.post('/update/:id', async(req, res) => {
    let object_id = req.params.id;
    const stock = req.body.stock;
    const value = req.body.value;
    let data = await updateStock(object_id, stock, value);
    console.log(data);
    res.redirect('/stock/home')
})

module.exports = app;