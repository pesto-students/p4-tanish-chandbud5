require("dotenv").config();
const axios = require("axios");

const { responseSuccess, responseError } = require("../utils/utils");
const API_KEY = process.env.API_KEY;

// Get data of multiple cities with pagination
async function currentWeather(req, res) {
    try {
        const cities = req.query.cities;
        let page = req.query.page;
        let limit = req.query.limit;
        if (!page) page = 1;
        if (!limit) limit = 50;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = [];
        for (let city of cities) {
            let url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
            let res = await axios.get(url);
            let cityObj = {};
            cityObj["name"] = res.data.location.name;
            cityObj["current"] = res.data.current;
            data.push(cityObj);
        }
        res.status(200).json(
            responseSuccess(
                `Request successful`,
                res.status,
                data.slice(startIndex, endIndex)
            )
        )
    } catch {
        res.status(500).json(
            responseError(
                `Something went wrong on server`,
                res.status
            )
        )
    }
}

// Forecast of any city for next X days
async function forecastWeather(req, res) {
    try {
        const param = req.query.city;
        const days = req.query.days;
        let url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${param}&days=${days}&aqi=yes&alerts=yes`;
        let result = await axios.get(url);
        let data = result.data;
        city = data.location.name;
        res.status(200).json(
            responseSuccess(
                `Weather forecast for ${city} for ${days} days`,
                res.status,
                data,
            )
        );
    } catch {
        res.status(500).json(
            responseError(
                `Something went wrong on server`,
                res.status
            )
        )
    }
}

// Current weather of any city
async function currentWeatherByCity(req, res) {
    try {
        const city = req.query.city;
        let url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
        let result = await axios.get(url);
        let data = result.data;
        res.status(200).json(
            responseSuccess(
                `Current weather conditions fetched for ${city}`,
                res.status,
                data
            )
        );
    } catch {
        res.status(500).json(
            responseError(
                `Something went wrong on server`,
                res.status
            )
        )
    }
}

// Weather of any city at any particular date or time
async function historicWeather(req, res) {
    try {
        const city = req.query.city;
        const hour = req.query.hour;
        const date = req.query.date;
        let url = `http://api.weatherapi.com/v1/history.json?key=${API_KEY}&q=${city}&dt=${date}&hour=${hour}`;
        let result = await axios.get(url);
        let data = result.data;
        res.status(200).json(
            responseSuccess(
                `Weather of ${city} on ${date}`,
                res.status,
                data
            )
        )
    } catch {
        res.status(500).json(
            responseError(
                `Something went wrong on server`,
                res.status
            )
        )
    }
}

module.exports = {
    currentWeather,
    currentWeatherByCity,
    historicWeather,
    forecastWeather,
};
