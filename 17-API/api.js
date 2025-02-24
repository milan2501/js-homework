let apiUrl = 'http://www.omdbapi.com/';
let apiKey = '180c6fcc';

let response = await callOMDbApi('Terminator');
console.log(response)

// async function getMovieTitle(title) {
//     let response = await callOMDbApi('t='+title);
//     console.log(response);
// }

async function callOMDbApi(params) {
    let url = apiUrl+'?apiKey='+apiKey+'&'+params;
    let response = await fetch(url);
    let data = await response.json();
    return data;
}












































































