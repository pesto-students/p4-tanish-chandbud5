const express = require('express');
const axios = require('axios');
require('dotenv').config();

// Express app initialized, Port and API_KEY imported
const app = express();
const port = process.env.PORT
const key = process.env.API_KEY;

// Home route
app.get('/', (req, res)=>{
    res.send('Welcome to week-13');
})

// Get data of multiple cities with pagination
app.get('/overview', async (req, res) => {
    try{
        const cities = req.query.cities
        let page = req.query.page;
        let limit = req.query.limit;
        if(!page)
            page = 1;
        if(!limit)
            limit = 50;
        const startIndex = (page - 1) * limit;
        const endIndex = page*limit;
        let data = []
        for(let city of cities){
            let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
            let res = await axios.get(url);
            let cityObj = {};
            cityObj["name"] = res.data.location.name;
            cityObj["current"] = res.data.current;
            data.push(cityObj);
        }
        res.send(data.slice(startIndex, endIndex))
    }
    catch{
        res.send(`Error occured!`);
    }
})

// Forecast of any city for next X days
app.get('/forecast', async (req, res) => {
    try{
        const param = req.query.city;
        const days = req.query.days;
        let url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${param}&days=${days}&aqi=yes&alerts=yes`;
        let result = await axios.get(url);
        let data = result.data;
        res.send(data);
    }
    catch{
        res.send(`Error occured!`);
    }
})

// Current weather of any city
app.get('/current', async (req, res) => {
    try{
        const city = req.query.city;
        let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
        let result = await axios.get(url);
        let data = result.data;
        res.send(data);
    }
    catch{
        res.send(`Error occured!`);
    }
})

// Weather of any city at any particular date or time
app.get('/history', async (req, res) => {
    try{
        const city = req.query.city;
        const hour = req.query.hour;
        const date = req.query.date;
        let url = `http://api.weatherapi.com/v1/history.json?key=${key}&q=${city}&dt=${date}&hour=${hour}`
        let result = await axios.get(url);
        let data = result.data;
        res.send(data);
    }
    catch{
        console.log("Error occured");
    }
})

app.listen(port, ()=>{
    console.log(`Server listening to port ${port}`);
})
