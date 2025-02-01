//First task: Kreiraj niz numbers sa nekoliko brojeva, a zatim napiši petlju koja prolazi kroz sve brojeve i koristi if-else strukturu da ispise "Even" za parne i "Odd" za neparne brojeve.
let array = [1,2,3,4,5,6];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i], "Even");
    } else {
        console.log(array[i], "Odd");
    }
}

//Second task: Kreiraj objekat car sa svojstvima make, model, year, i color, a zatim napiši for-in petlju koja prolazi kroz sva svojstva objekta i koristi switch strukturu da ispisuje poruke specifične za svako svojstvo (npr. "Make: Toyota", "Model: Corolla").
let car = {
    make: "Volkswagen",
    model: "Golf 6",
    year: 2011,
    color: "black"
};
for (let property in car) {
    switch (property) {
        case "make": console.log(car[property]);
            break;
        case "model": console.log(car[property]);
            break;
        case "year": console.log(car[property]);
            break;
        case "color": console.log(car[property]);
            break;
        default: console.log("Unknown property!")
    }
}

//Third task: Kreiraj niz students koji sadrži objekte sa svojstvima name i grade, a zatim napiši for petlju koja prolazi kroz niz i koristi if-else strukturu da ispise "Pass" za ocene 50 i više, i "Fail" za ocene ispod 50.
let students = [
    {name: "Milan", grade: 56},
    {name: "Zoran", grade: 44},
    {name: "Milica", grade: 85},
    {name: "Ivana", grade: 77},
];
for (let i of students) {
    if (i.grade > 50) {
        console.log(i.name, "Pass");
    } else {
        console.log(i.name, "Fail")
    }
}

//Fourth task: Kreiraj niz grades koji sadrži ocene učenika, a zatim napiši petlju koja prolazi kroz niz i koristi if-else strukturu da ispise "Excellent" za ocene iznad 90, "Good" za ocene između 75 i 90, "Average" za ocene između 50 i 75, i "Fail" za ocene ispod 50.
let grade = [55,74,20,34,84,54,67,97,100,84,66,73];
for (let grades of grade) {
    if (grades < 50) {
        console.log(grades, "Fail");
    } else if (grades >= 50 && grades < 75) {
        console.log(grades, "Average");
    } else if (grades >= 75 && grades < 90) {
        console.log(grades, "Good");
    } else if (grades >= 90) {
        console.log(grades, "Excellent")
    } else {
        console.log("Enter the grade!")
    }
}

//Fifth task: Kreiraj niz fruits sa nekoliko različitih voća, a zatim napiši petlju koja prolazi kroz niz i koristi switch strukturu da ispise boju svakog voća (npr. "Apple is red", "Banana is yellow").
let fruits = ["apple", "bannana", "orange", "lemon"];
for (let fruit of fruits) {
    switch (fruit) {
        case "apple": console.log(fruit, "is a red");
            break;
        case "bannana": console.log(fruit, "is a yellow");
            break;
        case "orange": console.log(fruit, "is an orange");
            break;
        case "lemon": console.log(fruit, "is a yellow");
            break;
        default: console.log("What else?");
    }
}

//Sixt task: Kreiraj objekat book sa svojstvima title, author, year, i genre, a zatim napiši for-in petlju koja prolazi kroz sva svojstva objekta i koristi if-else strukturu da ispise poruku "Old book" ako je godina izdanja pre 2000, inače "New book".
let book = {
    title: "The Republic",
    author: "Plato",
    year: -325,
    genre: "Philosophy"
};
for (let edition in book) {
    if (book.year >= 25) {
        console.log("New book!");
        break;
    } else {
        console.log("Old book!");
        break;
    }
}

//Seventh task: Kreiraj niz employees koji sadrži objekte sa svojstvima name i salary, a zatim napiši for petlju koja prolazi kroz niz i koristi if-else strukturu da ispise "High salary" za plate iznad 50000, "Medium salary" za plate između 30000 i 50000, i "Low salary" za plate ispod 30000.
let employees = [
    {name: "Marko", salary: 25000},
    {name: "Jovana", salary: 45000},
    {name: "Stefan", salary: 85000},
    {name: "Jelena", salary: 170000}
];
for (let sums in employees) {
    if (employees[sums].salary < 30000) {
        console.log(employees[sums].name, "has low salary.");
    } else if (employees[sums].salary >= 30000 && employees[sums].salary < 50000) {
        console.log(employees[sums].name, "has medium salary.");
    } else if (employees[sums].salary >= 50000) {
        console.log(employees[sums].name, "has high salary.");
    }
}

//Eight task: Kreiraj niz cities sa nekoliko imena gradova, a zatim napiši petlju koja prolazi kroz niz i koristi switch strukturu da ispise poruku specifičnu za svaki grad (npr. "Welcome to New York", "Welcome to Los Angeles").
let cities = ["Moscow", "New York", "Dublin", "Paris", "Casablanca", "Belgrade"];
for (let city of cities) {
    switch (city) {
        case "Moscow": console.log(`Welcome to ${city}`);
            break;
        case "New York":  console.log(`Welcome to ${city}`);
            break;
        case "Dublin":  console.log(`Welcome to ${city}`);
            break;
        case "Paris":  console.log(`Welcome to ${city}`);
            break;
        case "Casablanca":  console.log(`Welcome to ${city}`);
            break;
        case "Belgrade":  console.log(`Welcome to ${city}`);
            break;
        default: console.log("No more cities!")
    }
}





































































