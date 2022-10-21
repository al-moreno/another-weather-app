
const express = require('express');
const https = require('https');

const app = express();


let key = "28192cc5dd81f85bcfd688d592d9a8ab";

app.get('/', function (req, res) {

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=${key}&units=imperial`;

    https.get(url, function (response) {
        // console.log(response);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            const temp = weatherData.list[0].main.temp;
            // console.log(temp);
            const weatherDescription = weatherData.list[0].weather;
            console.log(weatherDescription);
            res.write("<h2>the temp is "+ temp +"</h2> ");
            res.send()
            
        })
    })
    // res.send("Server Is up and running");
})












app.listen(3000, function () {
    console.log("Server listening on port 3000!");
});