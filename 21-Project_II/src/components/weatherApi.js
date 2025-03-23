import axios from "axios";
const api = "https://api.weatherapi.com/v1/current.json";
const apiKey = '3216d3ae3d1d466f9b482328251303';

export async function getCurrentWeatherForLocation(location) {
    try {
        return await axios.get(`${process.env.API_URL}/v1/current.json`, {
            params: {
                key: process.env.API_KEY,
                q: location,
                aqi: 'no'
            }
        });
    } catch (error) {
        console.log("Problem is in: ", error.message);
    }
}


export async function getWeatherForUpcomingDays(location, days) {
    try {
        return await axios.get(`${process.env.API_URL}/v1/forecast.json`, {
            params: {
                key: process.env.API_KEY,
                q: location,
                days: days,
                aqi: 'no',
                alerts: 'no'
            }
        });
    } catch (error) {
        console.log("Problem is in: ", error.message);
    }
}

export async function getWeatherInFuture(location, date) {
    try {
        return await axios.get(`${process.env.API_URL}/v1/future.json`, {
            params: {
                key: process.env.API_KEY,
                q: location,
                dt: date
            }
        });
    } catch (error) {
        console.log("Problem is in: ", error.message);
    }
}








































