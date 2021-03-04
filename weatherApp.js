let cityBox = document.getElementById("cityBox");
let submitButton = document.getElementById("submitButton");

let detailsUL = document.getElementById("detailsUL");

submitButton.addEventListener("click", function () {
  let cityName = cityBox.value;
  getWeatherDetails(cityName);
});

function getWeatherDetails(cityName) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=973c72282cf6fe1dea7b7f62d87ef26a&units=imperial`
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      displayWeather(result);
    });
}

function displayWeather(weather) {
  let weatherDetails = `<h1> ${weather.name}</h1>
    <p> Minimum Temperature: ${weather.main.temp_min}</p>
    <p>Maximum Teperature: ${weather.main.temp_max}</p>
    <p>Pressure: ${weather.main.pressure}</p>
    `;

  detailsUL.innerHTML = weatherDetails;
}
