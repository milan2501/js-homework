
export function insertDate() {
    let today = new Date();
    let futureDate = new Date();
    futureDate.setDate(today.getDate() + 30);
    let dateFormatted = futureDate.toISOString().split('T')[0];
    return dateFormatted;
}

export function getDailyWeatherForecast(info) {
    for(let data of info.data.forecast.forecastday) {
        console.log("Na dan: "+data.date+" maximalna temperatura ce biti: "+data.day.maxtemp_c+", a minimalna: "+data.day.mintemp_c);
    }
}
















