var express = require("express");
const https = require("https")
let constants = require("./constants")
var app = express();

const city = "Delhi"

const apiKey = constants.API_KEY
const api = constants.API_ONE + city + "&appid=" + apiKey
const api1 = constants.API_TWO + "&appid=" + apiKey;
const api3 = constants.API_THREE + 44.34 + "&lon=" + 10.99 + "&cnt=" + 10 + "&appid=" + apiKey;

// gets you the weather report of specific location
const specificLocation = (req, res) => {
    https.get(api, (response) => {
        response.on("data", (data) => {
            const weatherData = JSON.parse(data)
            res.send(weatherData)
        })
    });
}


// gets dump collection of cities with it's weather data
const bulkFetch = (req, res) => {
    https.get(api1, (response) => {
        response.on("data", (data) => {
            const weatherData = JSON.parse(data)
            res.send(weatherData)
        })
    });
}


// gets weather report of specific city for the next 10Days
const nextTenDays = (req, res) => {
    https.get(api3, (response) => {
        response.on("data", (data) => {
            const weatherData = JSON.parse(data)
            res.send(weatherData)
        })
    });
}

app.get('/location-weather', specificLocation)
app.get('/weather', bulkFetch)
app.get('/next-ten-days', nextTenDays)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});