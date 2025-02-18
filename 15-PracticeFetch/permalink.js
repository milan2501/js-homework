//MOJ POKUSAJ RESENJA PROBLEMA

let url = new URLSearchParams(window.location.search);
let recipeId = url.get('id');
let container = document.querySelector('#container');
let selectTag = document.querySelector('#selectTag');

fetch('https://dummyjson.com/recipes/'+recipeId)
.then(res => res.json())
.then(data => {
    let title = document.createElement('h3');
    title.innerText = data.name;
    container.append(title);
})

fetch('https://dummyjson.com/recipes/tags')
.then(res => res.json())
.then(datas => {
    buildTags(datas)
})

function buildTags(tag) {
    selectTag.innerHTML = '';
    for (let i of tag) {
        let options = document.createElement('option');
        options.value = i.toLowerCase();
        options.innerText = i;
        selectTag.append(options);
    };
    return selectTag;
}

selectTag.addEventListener('change', function(event) {
    let selectedTag = event.currentTarget.value;

    localStorage.setItem('selectedTag', selectedTag);

    window.close();
    history.back();
  });





























