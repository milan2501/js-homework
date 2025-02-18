let cont = document.querySelector('#container');
let selectTag = document.querySelector("#selectTag");



window.onload = function () {
    let selectedTag = localStorage.getItem('selectedTag');
    if (selectedTag) {
        let url = 'https://dummyjson.com/recipes/tag/' + selectedTag;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                cont.innerHTML = '';
                for (let recipe of data.recipes) {
                    let instructionalList = buildLIst(recipe.instructions);
                    let titleAndType = buildTitleAndParagraphs(recipe);
                    cont.append(titleAndType, instructionalList);
                };
            })
    }
}



selectTag.addEventListener('change', function () {
    let url = 'https://dummyjson.com/recipes/tag/' + this.value;
    console.log(this.value)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            cont.innerHTML = '';
            for (let recipe of data.recipes) {
                let instructionalList = buildLIst(recipe.instructions);
                let titleAndType = buildTitleAndParagraphs(recipe);
                cont.append(titleAndType, instructionalList);
            };
        })
});


fetch('https://dummyjson.com/recipes/tags')
    .then(res => res.json())
    .then(data => {
        buildTags(data);
    });

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
        for (let recipe of data.recipes) {
            let instructionalList = buildLIst(recipe.instructions);
            let titleAndType = buildTitleAndParagraphs(recipe);
            cont.append(titleAndType, instructionalList);
        };
    });

function buildTitleAndParagraphs(items) {
    let foodHeader = document.createElement("div");
    let title = document.createElement("h4");
    let typeOfCuisine = document.createElement("p");
    let tag = document.createElement('p');
    let permaLink = document.createElement('a');
    permaLink.innerHTML = 'Show recipe';
    permaLink.href = 'permalink.html?id=' + items.id;
    title.innerText = items.name;
    typeOfCuisine.innerText = items.cuisine;
    tag.innerText = items.tags.join(', ');
    foodHeader.append(title, typeOfCuisine, tag, permaLink);
    return foodHeader;
};

function buildLIst(instructions) {
    let list = document.createElement('ol');
    for (let instruction of instructions) {
        let listElement = document.createElement('li');
        listElement.innerText = instruction;
        list.appendChild(listElement);
    }
    return list;
};

function buildTags(tag) {
    for (let i of tag) {
        let options = document.createElement('option');
        options.value = i.toLowerCase();
        options.innerText = i;
        selectTag.append(options);
    };
    return selectTag;
}






















































































