
const express = require('express');
const https = require('https');
const bodyParser =require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
   
});

app.post("/", function(req,res){
  
const query = req.body.cityName;
const key = "28192cc5dd81f85bcfd688d592d9a8ab";
const units = "imperial";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${key}&units=${units}`;

https.get(url, function (response) {
    // console.log(response);

    response.on("data", function (data) {
        const weatherData = JSON.parse(data);
        // console.log(weatherData);
        const temp = weatherData.list[0].main.temp;
        // console.log(temp);
        const weatherDescription = weatherData.list[1].weather[0].description;
        const icon = weatherData.list[1].weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
        console.log(weatherDescription);
        // res.write("<h2>the temp is "+ temp +" in "+ query +" </h2>");
        // res.write("<p>Description: "+ weatherDescription+"</p>");
        // res.write("<img src="+ imageURL +">");

        res.send(
            "<h2>the temp is "+ temp +" in "+ query+ ".</h2> <p>Description: "+ weatherDescription+"</p> <img src="+ imageURL +">"
        );
        
    })
})


  
  

})









app.listen(3000, function () {
    console.log("Server listening on port 3000!");
});