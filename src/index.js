let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
function formatDate() {
  let day = days[now.getDay()];
  let date = now.getDate();
  let month = months[now.getMonth()];
  let hour = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let todayDate = document.querySelector("#date");
  todayDate.innerHTML = `${day}, ${date} ${month} ${hour}:${minutes}`;
}
formatDate();

// Week 5
function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#precipitation").innerHTML =
    response.data.main.humidity;
}

function showCity(city) {
  let apiKey = "a0d03cacc138649973b20df80763e262";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function cityName(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  showCity(city);
}

//Current location function
function showPosition(positon) {
  let lat = positon.coords.latitude;
  let lon = positon.coords.longitude;
  let apiKey = "c4e575404a843db58519839e2e8ffc17";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", cityName);

let currentLocationButton = document.querySelector("#currentid");
currentLocationButton.addEventListener("click", currentLocation);

showCity("Lisbon");
//let searchForm = document.querySelector("#search-form");
//searchForm.addEventListener("submit", search);

// Exersice 3
//function convertToFahrenheit(event) {
// event.preventDefault();
//  let temp = document.querySelector("#temperature");
//temp.innerHTML = Math.round((25 * 9) / 5 + 32);
//}
//let convertingToFar = document.querySelector("#fahrenheit");
//convertingToFar.addEventListener("click", convertToFahrenheit);

//function convertToCelsius(event) {
//event.preventDefault();
//let temp = document.querySelector("#temperature");
//temp.innerHTML = 25;
//}
//let convertingToCel = document.querySelector("#celsius");
//convertingToCel.addEventListener("click", convertToCelsius);
