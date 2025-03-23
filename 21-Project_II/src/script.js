import axios from 'axios';
import { getUserLocation, getDays } from "./components/location";
import { getCurrentWeatherForLocation, getWeatherForUpcomingDays, getWeatherInFuture } from "./components/weatherApi";
import { insertDate, getDailyWeatherForecast } from './components/helpers/helper';
import { getCityFromCoordinates } from './components/openWeatherApi';

function displayWeather(city, condition, icon, date = "") {
    let weatherContainer = document.querySelector("#weatherDisplay");
    weatherContainer.innerHTML = `
        <div class="col-md-6">
            <div class="card shadow p-3">
                <h3 class="text-primary text-center">${city}</h3>
                <div class="text-center">
                    <img src="${icon}" alt="Weather icon" class="mb-2" width="80">
                </div>
                <p class="h5 text-center">${condition}</p>
                ${date ? `<p class="text-muted text-center">${date}</p>` : ""}
            </div>
        </div>
    `;
}

function displayForecast(city, forecastData) {
    let weatherContainer = document.querySelector("#weatherDisplay");
    weatherContainer.innerHTML = `<h3 class="text-primary text-center">${city} - Forecast</h3>`;

    forecastData.forEach(day => {
        weatherContainer.innerHTML += `
            <div class="col-md-4">
                <div class="card shadow p-3 text-center">
                    <h5 class="text-primary">${day.date}</h5>
                    <img src="${day.icon}" alt="Weather icon" width="60">
                    <p class="h6">${day.condition}</p>
                    <p class="text-muted">Max: ${day.maxTemp}°C, Min: ${day.minTemp}°C</p>
                </div>
            </div>
        `;
    });
}

document.querySelector("#showForcast").addEventListener('click', async () => {
    let location = getUserLocation();
    let days = getDays();
    if (!location) {
        return displayWeather("Error", "Please insert location!", "https://via.placeholder.com/80");
    }
    
    let response = await getCurrentWeatherForLocation(location);
    let condition = response.data.current.condition.text;
    let icon = response.data.current.condition.icon;
    
    displayWeather(location, condition, icon);

    if (days) {
        let forecastResponse = await getWeatherForUpcomingDays(location, days);
        let forecastData = forecastResponse.data.forecast.forecastday.map(day => ({
            date: day.date,
            condition: day.day.condition.text,
            icon: day.day.condition.icon,
            maxTemp: day.day.maxtemp_c,
            minTemp: day.day.mintemp_c
        }));
        displayForecast(location, forecastData);
    }
});

document.querySelector('#dayBtn').addEventListener('click', async () => {
    let place = getUserLocation();
    let futureDate = insertDate();
    
    if (!place) {
        return displayWeather("Error", "Please insert location!", "https://via.placeholder.com/80");
    }
    
    let weatherData = await getWeatherInFuture(place, futureDate);
    let condition = weatherData.data.forecast.forecastday[0].day.condition.text;
    let icon = weatherData.data.forecast.forecastday[0].day.condition.icon;
    
    displayWeather(place, condition, icon, futureDate);
});

document.querySelector("#myLocation").addEventListener('click', async function () {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        let response = await getCityFromCoordinates(lat, lon);
        let city = response.data[0].name;
        let weatherResponse = await getCurrentWeatherForLocation(city);
        
        let condition = weatherResponse.data.current.condition.text;
        let icon = weatherResponse.data.current.condition.icon;

        displayWeather(city, condition, icon);
    });
});






















































