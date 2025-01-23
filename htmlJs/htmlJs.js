//First task: Kreiraj promenljivu grade koja prima ocenu unetu od strane korisnika putem prompt funkcije, a zatim napiši if-else strukturu koja koristi alert da ispise "Excellent" za ocene iznad 90, "Good" za ocene između 75 i 90, "Average" za ocene između 50 i 75, i "Fail" za ocene ispod 50.
// let grade = prompt("Enter your grade:");
// grade = parseFloat(grade);

// if (!isNaN(grade)) {
//     if (grade < 50) {
//         alert("Fail");
//     } else if (grade <= 50 && grade < 75) {
//         alert("Average");
//     } else if (grade >= 75 && grade < 90) {
//         alert("Good");
//     } else if (grade >= 90 && grade <= 100) {
//         alert("Excellent")
//     } else {
//         alert("Enter number lower than 100!")
//     }
// } else {
//     alert("Please, enter number!");
// }

//Second task: Kreiraj niz shoppingList koji sadrži nekoliko artikala unetih od strane korisnika putem prompt funkcije (koristi split(',') da bi razdvojio stvari u nizu), a zatim napiši for petlju koja prolazi kroz niz i koristi switch strukturu da ispise specifične poruke za određene artikle (npr. "Buy fruits", "Buy vegetables") koristeći alert za prikaz poruka.
// let input = prompt("Enter products:");
// let products = input.split(" ");

// for (let product of products) {
//     switch (product) {
//         case "fruits": alert(`Buy ${product}`);
//             break;
//         case "vegetables": alert(`Buy ${product}`);
//             break;
//         case "juice": alert(`Buy ${product}`);
//             break;
//         case "milk": alert(`Buy ${product}`);
//             break;
//         default: alert(`Buy ${product}`);
//             break;
//     }
// }


//Third task: Kreiraj promenljivu weather koja prima stanje vremena (npr. "sunny", "rainy", "cloudy") uneto od strane korisnika putem prompt funkcije, a zatim napiši switch strukturu koja koristi alert da ispise poruku kao što je "Wear sunglasses" za "sunny", "Take an umbrella" za "rainy", itd.
// let weather = prompt("Enter type of weather:");

// switch(weather) {
//     case "windy": alert("Take a jacket!");
//         break;
//     case "rainy": alert("Take an umbrella!");
//         break;
//     case "sunny": alert("Take a sunglasses!");
//         break;
//     default: alert("Think about weather!");
//         break;
// }


//Fourth task: Kreiraj niz colors koji sadrži nekoliko boja unetih od strane korisnika putem prompt funkcije (koristi split(',') da bi razdvojio boje), a zatim napiši for petlju koja prolazi kroz niz i koristi switch strukturu da ispise specifične poruke za određene boje (npr. "Red is vibrant", "Blue is calm").
// let insertedColor = prompt("Enter the color:");
// let colors = insertedColor.split(" ");

// for (let color of colors) {
//     switch (color) {
//         case "red": alert(`${color} is a vibrant`);
//             break;
//         case "blue": alert(`${color} is a calm`);
//             break; 
//         case "green": alert(`${color} is a relaxing`);
//             break;
//         case "Yellow": alert(`${color} is a warmly`);
//             break;
//         default: alert(`${color} is a nice color`);
//     }
// }


//Fifth task: Kreiraj promenljivu userName koja prima ime uneto od strane korisnika putem prompt funkcije, a zatim napiši if-else strukturu koja koristi alert da ispise "Hello, [userName]!" ako je ime kraće od 5 karaktera, a "Welcome, [userName]!" ako je ime duže ili jednako 5 karaktera.
// let userName = prompt("Enter your name:");
// if(userName.match(/^[a-zA-Z]+$/)) {
//     if (userName.length < 5) {
//         alert(`Hello, ${userName}`);
//     } else {
//         alert(`Welcome, ${userName}`);
//     }
// } else {
//     alert("Invalid enter!")
// }















































































