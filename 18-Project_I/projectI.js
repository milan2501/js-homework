let apiUrl = 'http://www.omdbapi.com/';
let apiKey = '180c6fcc';



let playBtn = document.querySelector('#play');
let container = document.querySelector('#container');
let selectBtn = document.querySelector('#movieType');
let selectedValue = null;

let choice = selectBtn.addEventListener('change', function(event) {
    selectedValue = event.currentTarget.value;
    console.log(selectedValue)
});

console.log(choice)

playBtn.addEventListener('click', async function () {
    let titleInput = document.querySelector('#title').value;
    let yearInput = document.querySelector('#year').value;
    let response = await callOMDbApi(titleInput, yearInput);

    if (titleInput === '') return alert('Please enter the name of movie.');
        
    if(response.Response === 'True') {
        displayMovie(response);
    } else {
        container.innerText = `There is no results for ${titleInput} and ${yearInput}`;
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
        let movieBox = document.createElement('div');
        movieBox.classList.add('movieBox');
        let movieTitle = document.createElement('h3')
        movieTitle.innerText = `${data.Search[i].Title} (${data.Search[i].Year})`;
        let moviePoster = document.createElement('img');
        moviePoster.src = data.Search[i].Poster !== 'N/A' ? data.Search[i].Poster : 'placeholder.jpg';
        moviePoster.alt = data.Search[i].Title;
        moviePoster.style.width = '300px';
        movieBox.append(movieTitle, moviePoster);
        container.append(movieBox);
    } 
    return container;
}
