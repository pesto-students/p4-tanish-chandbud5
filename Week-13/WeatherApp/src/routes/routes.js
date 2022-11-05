const weatherController = require('../controllers/weatherController');
const express = require('express');

app = express.Router()
// Get data of multiple cities with pagination
app.get('/overview', weatherController.currentWeather);

// Forecast of any city for next X days
app.get('/forecast', weatherController.forecastWeather);

// Current weather of any city
app.get('/current', weatherController.currentWeatherByCity);

// Weather of any city at any particular date or time
app.get('/history', weatherController.historicWeather);

module.exports = app