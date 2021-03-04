let searchBtn = document.querySelector("#searchBtn");
let cityInput = document.querySelector("#cityInput");
let apiDataList = document.querySelector("ul");

let cityName = localStorage.getItem("cityName");


let cities = [];

searchBtn.addEventListener("click", function () {
    let city = cityInput.value;
    localStorage.setItem("cityName", city);
});    

//combind funtions of event listener - can't have two different functions assigned to it

//fetch first api (city names, lat and long)
//.then fetch second api (weather)
//find a way to connect the api's to work together

// function getApi() {
//     let requestURL = ""
//     }

// fetch(requestURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         for (let i = 0; i < data.length; i++) {
//             let listItem = document.createElement('li');
//             listItem.textContent = data[i].html_url;
//             apiDataList.appendChild(listItem);
//         }
//     });

// searchBtn.addEventListener('click', getApi);

//From BRANDON - extensive function that retrives any correctly spelled city in our console
// function getApi(city) {
//     console.log(city);
//   let requestUrl =
//     "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=InsertYourAPIHere";
//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("this the data from fetch", data);
//       console.log(data.main.temp);
//       console.log(data.main.humidity);
//       console.log(data.wind.speed);
//       console.log(getuvIndex(data.coord.lat, data.coord.lon));
//     });
// }

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

