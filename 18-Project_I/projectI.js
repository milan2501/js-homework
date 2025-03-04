let apiUrl = 'http://www.omdbapi.com/';
let apiKey = '180c6fcc';



let playBtn = document.querySelector('#play');
let container = document.querySelector('#container');
let selectBtn = document.querySelector('#movieType');
let selectedValue = null;


selectBtn.addEventListener('change', function(event) {
    selectedValue = event.currentTarget.value;
});

playBtn.addEventListener('click', async function () {
    let titleInput = document.querySelector('#title').value.trim();
    let yearInput = document.querySelector('#year').value.trim();

    let response = await callOMDbApi(titleInput, yearInput, selectedValue);

    if (titleInput === '') return alert('Please enter the name of movie.');
        
    if(response.Response === 'True') {
        displayMovie(response);
    } else {
        container.innerText = `There is no results for ${titleInput} and ${yearInput}`;
    }
});



async function callOMDbApi(s, y, type) {
    let params = new URLSearchParams({ apiKey, s });

    if (y) params.append("y", y);
    if (type) params.append("type", type);

    let url = apiUrl + '?' + params.toString();
    let response = await fetch(url);
    let data = await response.json();
    return data;
}



function displayMovie(data) {
    container.innerHTML = '';
    for (let i = 0; i < data.Search.length; i++) {
        let movieBox = document.createElement('div');
        let permalinkBox = document.createElement('a');
        permalinkBox.href = 'permalink.html?id='+data.Search[i].imdbID;
        permalinkBox.target = '_blank';
        movieBox.classList.add('movieBox');
        let movieTitle = document.createElement('h3');
        movieTitle.innerText = `${data.Search[i].Title} (${data.Search[i].Year})`;
        let moviePoster = document.createElement('img');
        moviePoster.src = data.Search[i].Poster !== 'N/A' ? data.Search[i].Poster : 'placeholder.jpg';
        moviePoster.alt = data.Search[i].Title;
        moviePoster.style.width = '300px';
        movieBox.dataset.imdbID = data.Search[i].imdbID;
        movieBox.append(movieTitle, moviePoster);
        permalinkBox.append(movieBox)
        container.append(permalinkBox);
    } 
    return container;
}




















































