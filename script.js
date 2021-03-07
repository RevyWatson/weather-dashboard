let searchBtn = document.querySelector("#searchBtn");
let cityInput = document.querySelector("#cityInput");
let dataCard = document.querySelector("#data-card");
let weatherCard = document.createElement("article"); //where I'm trying to post the fetched weather data
let getForm = document.getElementById("searchFrom"); //

let cityName = localStorage.getItem("cityInput"); //local storage - doesn't work

//local storage works in console but nothing beyond that
searchBtn.addEventListener("submit", function () {
    event.preventDefault();
    let nameVal = data['name'];
    let tempVal = data['main']['temp'];
    let humVal = data['main']['humidity'];
    let windVal = data['wind']['speed'];
    let uvVal = data['coord']['lat']
    let uviVal = data['coord']['lon']
    main.innerHTML = nameVal;
    temp.innerHTML = "Tempature: " + tempVal + '&deg;';
    humidity.innerHTML = "Humidity: " + humVal;
    wind.innerHTML = "Wind Speed: " + windVal;
    uv.innerHTML = "UV Index: " + uvVal + uviVal;
    input.value = "";

    //local storage - logs in console but doesn't work in search input
    console.log(nameVal, tempVal, humVal, windVal, uvVal, uviVal)
    let city = cityInput.value;
    localStorage.setItem("name", city);
    getApi(city); 
});

//create viable that retrieves form using get element by ID
//form.addEventlisteng ("submit", fundtion name)
//function name event.prevent default
//fix local storage

//API supplies extensive list of cities, temperature, humidity, and windspeed
function getApi(city) {
    console.log(city);
    let requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=8c5e97df86817a30f7d6c5345a9a5165";
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
    let requestURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=8c5e97df86817a30f7d6c5345a9a5165";
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.value);
        })
}

//API provides five day forcast
function fiveDay(city) {
    console.log(city);
    let requestURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=8c5e97df86817a30f7d6c5345a9a5165";
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.list[5].main.temp);
            //for loop - grab dt text and 3pm time
            //cut string, splice
        })
}