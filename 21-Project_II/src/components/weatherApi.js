import axios from "axios";
const api = "https://api.weatherapi.com/v1/current.json";
const apiKey = '3216d3ae3d1d466f9b482328251303';

export async function getCurrentWeatherForLocation(location) {
    return await axios.get(api, {
        params: {
            key: apiKey,
            q: location,
            aqi: 'no'
        }
    });
}


export async function getWeatherForUpcomingDays(location, days) {
    return await axios.get('https://api.weatherapi.com/v1/forecast.json', {
        params: {
            key: apiKey,
            q: location,
            days: days,
            aqi: 'no',
            alerts: 'no'
        }
    })
}










































