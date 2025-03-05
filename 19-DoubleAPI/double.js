const mealDbAPI = 'https://www.themealdb.com/api/json/v1/1/';
const categoryListAPI = 'filter.php?c='
let selectCat = document.querySelector('#selectCat');


async function getURL(endpoint) {
    let response = await fetch(mealDbAPI+endpoint);
    let data = await response.json();
    return data;
}


selectCat.addEventListener('change', async function(event) {
    let currentValue = event.currentTarget.value;
    let response = await getURL(categoryListAPI + currentValue);
    getMealHolder(response);
})

let response = await getURL('categories.php');
getCategory(response);

function getMealHolder(items) {
    let mealContainer = document.querySelector('.meal-container');

    if (!mealContainer) {
        mealContainer = document.createElement('div');
        mealContainer.classList.add('meal-container');
        document.body.append(mealContainer);
    }

    mealContainer.innerHTML = ''; 

    for (let item of items.meals) {
        let cardHolder = document.createElement('div');
        cardHolder.classList.add('card-holder');
        cardHolder.id = item.idMeal
        let imageWrapper = document.createElement('div');
        imageWrapper.classList.add('card-image');

        let image = document.createElement('img');
        image.src = item.strMealThumb;

        let titleWrapper = document.createElement('div');
        titleWrapper.classList.add('card-title');
        titleWrapper.innerText = item.strMeal;

        imageWrapper.append(image);
        cardHolder.append(imageWrapper, titleWrapper);
        mealContainer.append(cardHolder);
        

        cardHolder.addEventListener('click', async function() {
            let resMeal = await getURL('lookup.php?i='+cardHolder.id);
            let randomCocktail = document.createElement('div');
            fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                getRandomCocktail(data)
            })
           
            function getRandomCocktail(cocktail) {
                for (let title of cocktail.drinks) {
                    let h3 = document.createElement('h3')
                    h3.innerText = title.strDrink;
                    randomCocktail.append(h3)
                }
            }
        
            
            for (let i of resMeal.meals) {
                let popup = document.querySelector('#popup');
                popup.innerText = i.strInstructions
                popup.append(randomCocktail)
            }
            
        })

    }
}


function getCategory(data) {
    for (let i of data.categories) {
        let options = document.createElement('option');
        options.innerText = i.strCategory;
        options.value = i.strCategory
        selectCat.append(options)
    } 
}





























 















































































