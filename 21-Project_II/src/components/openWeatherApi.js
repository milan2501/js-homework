import axios from "axios";

export async function getCityFromCoordinates(lat, lon) {
    try {
        return await axios.get(process.env.OPENWEATHER_API_URL + "/1.0/reverse", {
            params: {
                lat: lat,
                lon: lon,
                limit: 1,
                appid: process.env.OPENWEATHER_API_KEY
            }
        });
    } catch (error) {
        console.log("Problem is in: ", error.message);
    }
}























