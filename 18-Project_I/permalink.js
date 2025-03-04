let apiUrl = 'http://www.omdbapi.com/';
let apiKey = '180c6fcc';
let container = document.createElement('div');


let url = new URLSearchParams(window.location.search);
let i = url.get('id');



fetch(apiUrl+'?apiKey='+apiKey+'&i='+i)
.then(res => res.json())
.then(data => {
    displayMovie(data);
})


function displayMovie(data) {
    container.innerHTML = '';
        const {Title, Year, Poster} = data;
        let movieBox = document.createElement('div');
        movieBox.classList.add('movieBox');
        let movieTitle = document.createElement('h3');
        movieTitle.innerText = `${Title} (${Year})`;
        let moviePoster = document.createElement('img');
        moviePoster.src = Poster !== 'N/A' ? Poster : 'placeholder.jpg';
        moviePoster.alt = Title;
        moviePoster.style.width = '300px';
        movieBox.append(movieTitle, moviePoster);
        container.append(movieBox);
        document.body.appendChild(container);
}


















































