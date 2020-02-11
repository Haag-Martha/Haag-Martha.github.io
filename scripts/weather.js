var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=614f4ad4f70981d8a06c716c1ccd842f&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true)
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    
    document.getElementById('weather-desc').innerHTML = weatherData.weather[0].description;
    document.getElementById('weathericon').src = 'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById('currenttemp').innerHTML = weatherData.main.temp.toFixed(0);

    var windChill = 35.74 + 0.6215 * weatherData.main.temp - 35.75 * Math.pow(weatherData.wind.speed, 0.16) + 0.4275 * weatherData.main.temp * Math.pow(weatherData.wind.speed, 0.16);

    document.getElementById("windchill").innerHTML = windChill.toFixed(0);

    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
    
    document.getElementById("currentspeed").innerHTML = weatherData.wind.speed;

    
     if (!weatherData.hasOwnProperty('rain')) {
        document.getElementById('precip').innerHTML = '0';
    } else {
        tempObj = weatherData.rain;
        if (!tempObj.hasOwnProperty("1h"))
            document.getElementById('precip').innerHTML = '0';
        else
            document.getElementById('precip').innerHTML = weatherData.rain["1h"];
}

}

var forcastObject = new XMLHttpRequest();
forcastObject.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=614f4ad4f70981d8a06c716c1ccd842f&units=imperial', true)
forcastObject.send();

forcastObject.onload = function () {
    var weatherForcast = JSON.parse(forcastObject.responseText);
    console.log(weatherForcast);

    document.getElementById('sun').innerHTML = weatherForcast.list["0"].main.temp.toFixed(0) + "&degF";
    document.getElementById('mon').innerHTML = weatherForcast.list["1"].main.temp.toFixed(0) + "&degF";
    document.getElementById('tues').innerHTML = weatherForcast.list["2"].main.temp.toFixed(0) + "&degF";
    document.getElementById('wed').innerHTML = weatherForcast.list["3"].main.temp.toFixed(0) + "&degF";
    document.getElementById('thurs').innerHTML = weatherForcast.list["4"].main.temp.toFixed(0) + "&degF";
    document.getElementById('fri').innerHTML = weatherForcast.list["5"].main.temp.toFixed(0) + "&degF";
    document.getElementById('sat').innerHTML = weatherForcast.list["6"].main.temp.toFixed(0) + "&degF";

}