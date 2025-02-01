
let realEstates = [
    {
        city: "Beograd",
        types: "stan",
        options: "garsonjera",
        size: 25,
        price: 44000
    },
    {
        city: "Zagreb",
        types: "stan",
        options: "dvosoban",
        size: 60,
        price: 120000
    },
    {
        city: "Ljubljana",
        types: "kuća",
        options: "trosoban",
        size: 120,
        price: 300000
    },
    {
        city: "Sarajevo",
        types: "stan",
        options: "jednosoban",
        size: 45,
        price: 80000
    },
    {
        city: "Podgorica",
        types: "stan",
        options: "garsonjera",
        size: 30,
        price: 50000
    },
    {
        city: "Skopje",
        types: "kuća",
        options: "četvorosoban",
        size: 150,
        price: 180000
    },
    {
        city: "Novi Sad",
        types: "stan",
        options: "trosoban",
        size: 80,
        price: 95000
    },
    {
        city: "Split",
        types: "stan",
        options: "jednosoban",
        size: 50,
        price: 130000
    },
    {
        city: "Banja Luka",
        types: "zemljište",
        options: "plac",
        size: 500,
        price: 60000
    },
    {
        city: "Priština",
        types: "stan",
        options: "dvosoban",
        size: 70,
        price: 110000
    },
    {
        city: "Kragujevac",
        types: "kuća",
        options: "petosoban",
        size: 180,
        price: 150000
    }
];

let estates = document.querySelector("#estates");
let search = document.querySelector("#search");

search.addEventListener("click", function() {
    estates.innerHTML = "";
    realEstates.forEach(val => {
        let container = document.createElement("div");
        container.classList.add("container");

        let h1 = document.createElement("h1");
        h1.classList.add("cityType");
        h1.textContent = val.city + " " + val.types;

        let opt = document.createElement("p");
        opt.classList.add("opt");
        if (val.types === "kuća" || val.types === "zemljište") {
            opt.textContent = "Options: --";
        } else {
            opt.textContent = `Options: ${val.options}`;
        }
   
        let sizes = document.createElement("p");
        sizes.classList.add("sizes");
        sizes.textContent = `Sizes: ${val.size}`;
        

        let prices = document.createElement("p");
        prices.classList.add("prices");
        prices.textContent = `Prices: ${val.price}`;

        container.append(h1,opt,sizes,prices);
        estates.appendChild(container);

    })
})
































