let apiUrl = 'http://www.omdbapi.com/';
let apiKey = '180c6fcc';


let titleInput = document.querySelector('#title');
let yearInput = document.querySelector('#year');
let playBtn = document.querySelector('#play');
let container = document.querySelector('#container');

playBtn.addEventListener('click', async function () {
    let tVal = titleInput.value;
    let yVal = yearInput.value;
    let response = await callOMDbApi(tVal, yVal);

    if (tVal === '') {
        alert('Please enter the name of movie.');
        return;
    }

    if(response.Response === 'True') {
        displayMovie(response);
        console.log(response)
    } else {
        container.innerText = `There is no results for ${tVal} and ${yVal}`;
    }
});



async function callOMDbApi(s, y) {
    let params = new URLSearchParams({ apiKey, s, y });
    let url = apiUrl + '?' + params.toString();
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function displayMovie(data) {
    container.innerHTML = '';
    for (let i = 0; i < data.Search.length; i++) {
        let movieTitle = document.createElement('h3');
        movieTitle.innerText = `${data.Search[i].Title} (${data.Search[i].Year})`;
        let moviePoster = document.createElement('img');
        moviePoster.src = data.Search[i].Poster !== 'N/A' ? data.Search[i].Poster : 'placeholder.jpg';
        moviePoster.alt = data.Search[i].Title;
        moviePoster.style.width = '300px';
        container.append(movieTitle, moviePoster);
    } 
    return container;
}




































































