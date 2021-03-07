let searchBtn = document.querySelector("#searchBtn");
let cityInput = document.querySelector("#cityInput");
let dataCard = document.querySelector("#data-card");
let weatherCard = document.createElement("article"); //where I'm trying to post the fetched weather data

let cityName = localStorage.getItem("cityInput");

//local storage works in console but nothing beyond that
searchBtn.addEventListener("click", function () {
    let city = cityInput.value;
    localStorage.setItem("name", city);
    getApi(city);

    cityInput.textContent = cityName; //trying to set the storage to be in the input but its not working.
});

//create viable that retrieves form using get element by ID
//form.addEventlisteng ("submit", fundtion name)
//function name event.prevent default
//local storage

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

button.addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=a0de227abc92faab1408fb9b7d1d15c2')
    .then(response => response.json())
    .then(data => {
    let nameVal =data['name'];
    let tempVal =data['main']['temp'];
    let humVal =data['main']['humidity'];
    let windVal =data['wind']['speed'];
    let uvVal =data['coord']['lat']
    let uviVal =data['coord']['lon']
    //let celcius = Math.round(parseFloat(name.main.temp)-273.15);
    //let fahrenheit = Math.round(((parseFloat(name.main.temp)-273.15)*1.8)+32);
    main.innerHTML =nameVal;
    temp.innerHTML ="Tempature: "+tempVal+'&deg;';
    humidity.innerHTML ="Humidity: "+humVal;
    wind.innerHTML ="Wind Speed: "+windVal;
    uv.innerHTML ="UV Index: "+uvVal+uviVal;
    input.value ="";
    console.log(nameVal, tempVal, humVal, windVal, uvVal, uviVal)
    })



fetch(newUrl, {
    method: "GET",
    withCredentials: true
  })
    .then(response => response.json())
    .then(function (data) {
      const dayArray = data['list'];
      console.log("dayArray");
      for (let index = 0; index < dayArray[5]; index++) {
        console.log("newUrl", data);
      }
      //let celcius = Math.round(parseFloat(name.main.temp)-273.15);
      //const fahrenheit = Math.round(((parseFloat(name.main.temp)-273.15)*1.8)+32);
      document.getElementById("name").innerHTML = "name: " + nameVal;
      console.log("nameVal");
      document.getElementById("temp").innerHTML = "Tempature: " + tempVal;
      document.getElementById("humidity").innerHTML = "Humidity: " + humVal;
      document.getElementById("wind-speed").innerHTML = "Wind Speed: " + windVal;
      document.getElementById("uv-index").innerHTML = "UV Index: " + uvVal + " " + uviVal;
      console.log(nameVal, tempVal, humVal, windVal, uvVal, uviVal);
      if (windVal > 5) {
        document.getElementById('main').className = "fas fa-wind";
        document.getElementById('main').innerHTML = "feels windy";
      }
      else {
        document.getElementById('main').className = "fas fa-sun";
        document.getElementById('main').innerHTML = "feels nice";
      }
      /////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("newNameDay2").innerHTML = "name: " + nameVal;
      console.log("nameVal");
      document.getElementById("newTempDay2").innerHTML = "Tempature: " + tempVal;
      document.getElementById("newHumidityDay2").innerHTML = "Humidity: " + humVal;
      document.getElementById("newWind-speedDay2").innerHTML = "Wind Speed: " + windVal;
      document.getElementById("newUv-indexDay2").innerHTML = "UV Index: " + uvVal + " " + uviVal;
      console.log(nameVal, tempVal, humVal, windVal, uvVal, uviVal);
      if (windVal > 5) {
        document.getElementById('newMainDay2').className = "fas fa-wind";
        document.getElementById('newMainDay2').innerHTML = "feels windy";
      }
      else {
        document.getElementById('newMainDay2').className = "fas fa-sun";
        document.getElementById('newMainDay2').innerHTML = "feels nice";
      }
      ///////////////////////////////////////////////////////////////////////////////////
      document.getElementById("newNameDay3").innerHTML = "name: " + nameVal;
      console.log("nameVal");
      document.getElementById("newTempDay3").innerHTML = "Tempature: " + tempVal;
      document.getElementById("newHumidityDay3").innerHTML = "Humidity: " + humVal;
      document.getElementById("newWind-speedDay3").innerHTML = "Wind Speed: " + windVal;
      document.getElementById("newUv-indexDay3").innerHTML = "UV Index: " + uvVal + " " + uviVal;
      console.log(nameVal, tempVal, humVal, windVal, uvVal, uviVal);
      if (windVal > 5) {
        document.getElementById('newMainDay3').className = "fas fa-wind";
        document.getElementById('newMainDay3').innerHTML = "feels windy";
      }
      else {
        document.getElementById('newMainDay3').className = "fas fa-sun";
        document.getElementById('newMainDay3').innerHTML = "feels nice";
      }
      ////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("newNameDay4").innerHTML = "name: " + nameVal;
      console.log("nameVal");
      document.getElementById("newTempDay4").innerHTML = "Tempature: " + tempVal;
      document.getElementById("newHumidityDay4").innerHTML = "Humidity: " + humVal;
      document.getElementById("newWind-speedDay4").innerHTML = "Wind Speed: " + windVal;
      document.getElementById("newUv-indexDay4").innerHTML = "UV Index: " + uvVal + " " + uviVal;
      console.log(nameVal, tempVal, humVal, windVal, uvVal, uviVal);
      if (windVal > 5) {
        document.getElementById('newMainDay4').className = "fas fa-wind";
        document.getElementById('newMainDay4').innerHTML = "feels windy";
      }
      else {
        document.getElementById('newMainDay4').className = "fas fa-sun";
        document.getElementById('newMainDay4').innerHTML = "feels nice";
      }
      /////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("newNameDay5").innerHTML = "name: " + nameVal;
      console.log("nameVal");
      document.getElementById("newTempDay5").innerHTML = "Tempature: " + tempVal;
      document.getElementById("newHumidityDay5").innerHTML = "Humidity: " + humVal;
      document.getElementById("newWind-speedDay5").innerHTML = "Wind Speed: " + windVal;
      document.getElementById("newUv-indexDay5").innerHTML = "UV Index: " + uvVal + " " + uviVal;
      console.log(nameVal, tempVal, humVal, windVal, uvVal, uviVal);
      if (windVal > 5) {
        document.getElementById('newMainDay5').className = "fas fa-wind";
        document.getElementById('newMainDay5').innerHTML = "feels windy";
      }
      else {
        document.getElementById('newMainDay5').className = "fas fa-sun";
        document.getElementById('newMainDay5').innerHTML = "feels nice";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
