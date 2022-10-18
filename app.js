const { timeLog } = require('console');
const express = require('express');
const https = require('https');

const app = express();


let key = "28192cc5dd81f85bcfd688d592d9a8ab";

app.get('/', function (req, res) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=${key}&units=imperial`;

    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on('data', function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.list[0].main;
            console.log(temp);
        })
    })
    res.send("Server Is up and running");
})












app.listen(3000, function () {
    console.log("Server listening on port 3000!");
});