let searchBtn = document.querySelector("#searchBtn");
let cityInput = document.querySelector("#cityInput");
let dataCard = document.querySelector("#data-card");
let weatherCard = document.createElement("article"); //where I'm trying to post the fetched weather data

let cityName = localStorage.getItem("cityInput");

//local storage works in console but nothing beyond that
searchBtn.addEventListener("click", function () {
    let cityName = cityInput.value;
    localStorage.setItem("name", cityName);
    getApi(cityName);

    cityInput.textContent = cityName; //trying to set the storage to be in the input but its not working.
});    

//API supplies extensive list of cities, temperature, humidity, and windspeed
function getApi(city) {
    console.log(city);
  let requestUrl ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=8c5e97df86817a30f7d6c5345a9a5165"
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })          
    .then(function (data) {
      console.log(data);
      console.log(data.main.temp);
      console.log(data.main.humidity);
      console.log(data.wind.speed);
      console.log(data.coord.lat, data.coord.lon);
      getUVIndex(data.coord.lat, data.coord.lon);
      fiveDay(city);
      
      dataCard.append(weatherCard);
      weatherCard.textContent = data; //trying to print fetched data to the page. prints as "[object Object]"
    });
}

//API provides UV Index
function getUVIndex(lat, lon) {
    console.log(lat, lon);
    let requestURL = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid=8c5e97df86817a30f7d6c5345a9a5165"
    fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data.value);
    })
}

//API provides five day forcast
function fiveDay(city) {
    console.log(city);
    let requestURL = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid=8c5e97df86817a30f7d6c5345a9a5165"
    fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data.list[5].main.temp);
        //for loop - grab dt text and 3pm time
        //cut string, splice
    })
}

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

