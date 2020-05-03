/** @format */

const weather = document.querySelector(".header__weather");
const city = document.querySelector(".header__city");

const API_KEY = "992bf3ed6bb4657793f2bfe5155eaca3";
const COORDS = "coords";

function getWeather({ latitude, longitude }) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      city.innerText = json.name;
      weather.innerText = `${json.weather[0].main} @ ${json.main.temp} ℃`;
    });
}

function saveCoords(coords) {
  localStorage.setItem(COORDS, JSON.stringify(coords));
}

function handleGeoSuccess(pos) {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;

  const coordsObj = { latitude, longitude };

  saveCoords(coordsObj);
  getWeather(coordsObj);
}

function handleGeoError() {
  console.log("Cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const coords = localStorage.getItem(COORDS);

  if (coords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(coords);
    getWeather(parsedCoords);
  }
}

function init() {
  loadCoords();
}

if (weather) {
  init();
}
