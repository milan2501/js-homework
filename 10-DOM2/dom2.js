let container = document.querySelector(".estate");
let citiesSelector = document.querySelector("#cities");
let optionsSelector = document.querySelector("#options");
let typesSelector = document.querySelector("#types");
let search = document.querySelector("#search");

let citiesArray = [
    "svi",
    "Belgrade", 
    "Zagreb", 
    "Ljubljana", 
    "Sarajevo", 
    "Skopje", 
    "Podgorica", 
    "Novi Sad", 
    "Split", 
    "Banja Luka", 
    "Maribor"
  ];
let optionsArray = [
    "stan",
    "plac",
    "garaza",
    "kuca"
];
let apartmentsTypes = [
    "garsonjera",
    "jednosoban",
    "dvosoban",
    "trosoban",
    "cetvorosoban"
];

let arrOfObjects = [
    {
        city: "Belgrade",
        option: "stan",
        type: "garsonjera",
        size: 34,
        price: 77000
    },
    {
        city: "Zagreb",
        option: "kuca",
        type: "trosoban",
        size: 120,
        price: 150000
    },
    {
        city: "Ljubljana",
        option: "stan",
        type: "jednosoban",
        size: 45,
        price: 85000
    },
    {
        city: "Sarajevo",
        option: "plac",
        type: null,
        size: 1000,
        price: 60000
    },
    {
        city: "Skopje",
        option: "stan",
        type: "cetvorosoban",
        size: 90,
        price: 130000
    },
    {
        city: "Podgorica",
        option: "garaza",
        type: null,
        size: 20,
        price: 25000
    },
    {
        city: "Novi Sad",
        option: "stan",
        type: "dvosoban",
        size: 55,
        price: 95000
    },
    {
        city: "Split",
        option: "kuca",
        type: "cetvorosoban",
        size: 150,
        price: 180000
    },
    {
        city: "Banja Luka",
        option: "stan",
        type: "trosoban",
        size: 75,
        price: 110000
    },
    {
        city: "",
        option: "plac",
        type: null,
        size: 850,
        price: 70000
    }
];


for (let city of citiesArray) {
    let optCity = document.createElement("option");
    optCity.textContent = city;
    optCity.value = city.toLowerCase();
    citiesSelector.appendChild(optCity);

    let cityFound = false;
    for (let item of arrOfObjects) {
        if (item.city === city) {
            cityFound = true;
            break;
        }
    }
    if (!cityFound) {
        optCity.setAttribute("disabled", true);
    }
}

for (let pick of optionsArray) {
    let optOptions = document.createElement("option");
    optOptions.textContent = pick;
    optOptions.value = pick.toLowerCase();
    optionsSelector.appendChild(optOptions); 
}

for (let type of apartmentsTypes) {
    let optTypes = document.createElement("option");
    optTypes.textContent = type;
    optTypes.value = type.toLowerCase();
    typesSelector.appendChild(optTypes);
}

let realEstate = document.querySelector(".realEstate");

for (let el of arrOfObjects) {
    let obj = document.createElement("div");
    obj.classList.add("objects");
    let title = document.createElement("h4");
    title.classList.add("city")
    title.textContent = el.city + " " + el.option;
    let types = document.createElement("p");
    types.textContent = `Type: ${el.type}`;
    let sizes = document.createElement("p");
    sizes.textContent = `Size: ${el.size}`;
    let prices = document.createElement("p");
    prices.textContent = `Price: ${el.price}`;
    let separateLine = document.createElement("p");
    separateLine.textContent = "-----------"
    obj.append(title, types, sizes, prices, separateLine);
    
    // Ovo je bila neka moja verzija resenja... 

    // if (!el.city || !el.option || !el.type || !el.size || !el.price) {
    //     obj.classList.add("disable"); 
    // }
    realEstate.append(obj); 
}

let currentCity = null;
let currentOptions = null;
let currentTypes = null;

citiesSelector.addEventListener("change", function(e) {
    currentCity = e.currentTarget.value;
})

optionsSelector.addEventListener("change", function(e) {
    currentOptions = e.currentTarget.value;
})

typesSelector.addEventListener("change", function(e) {
    currentTypes = e.currentTarget.value;
})































































































