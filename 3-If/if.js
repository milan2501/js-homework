//First task: Kreiraj promenljivu koja sadrži tvoje godine, a zatim napiši if-else strukturu koja ispisuje "Maloletan" ako je broj godina manji od 18, inače ispisuje "Punoletan".
let age = 28;
if (age >= 18) {
    console.log("punoletan");
} else {
    console.log("maloletan");
};

//Second task: Kreiraj niz sa nekoliko različitih brojeva, napiši if-else strukturu koja proverava da li je zbir prvog i poslednjeg broja u nizu veći od 50 i ispiši odgovarajuću poruku.
let array = [5,10,12,47,43];
let firstNumber = array[0];
let lastNumber = array[array.length - 1];
let sum = firstNumber + lastNumber;
if (sum > 50) {
    console.log("Sum is greater than 50");
} else {
    console.log("Sum is smallest than 50");
};

//Third task: Kreiraj promenljivu koja sadrži ime nekog voća, a zatim napiši if-else strukturu koja ispisuje "Ovo je jabuka" ako je vrednost "jabuka", "Ovo je banana" ako je vrednost "banana", i "Neko drugo voće" za sve ostale vrednosti.
let fruit = "Apple";
if (fruit === "Apple") {
    console.log("This is apple");
} else if (fruit === "Peach") {
    console.log("This is peach");
} else {
    console.log("Some else fruits");
};
