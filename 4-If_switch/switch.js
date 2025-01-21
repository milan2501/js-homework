//Odradio sam koji vise zadatak metodom Switch-a.

//First task: Kreiraj promenljivu temperatura koja sadrži trenutnu temperaturu u stepenima Celzijusa, a zatim napiši if-else strukturu koja ispisuje "Hladno je" ako je temperatura manja od 15, "Umereno je" ako je između 15 i 25, i "Vruće je" ako je veća od 25.
let temperature = 18;
switch (true) {
    case (temperature < 15):
        console.log("It's cold!");
        break;
    case (temperature >= 15 && temperature < 25):
        console.log("It's moderately.");
        break;
    case (temperature >= 25):
        console.log("It's hot!");
        break;
}

//Second task: Kreiraj promenljivu dobaDana koja može imati vrednosti "jutro", "popodne", ili "veče", a zatim napiši if-else strukturu koja ispisuje odgovarajuću poruku kao što su "Dobro jutro", "Dobar dan", ili "Dobro veče" na osnovu vrednosti te promenljive.
let timeOfDay = "morning";
switch (true) {
    case (timeOfDay === "morning"):
        console.log("Good morning!");
        break;
    case (timeOfDay === "midday"):
        console.log("Good afternoon!");
        break;
    case (timeOfDay === "evening"):
        console.log("Good evening");
    default: console.log("Choose one part of the day!")
}

//Third task: Kreiraj promenljivu godineRada koja sadrži broj godina koliko osoba radi u nekoj firmi, a zatim napiši if-else strukturu koja ispisuje "Početnik" ako je broj godina manji od 2, "Iskusan radnik" ako je između 2 i 5, i "Veteran" ako je veći od 5.
let agesOfWork = 5;
if (agesOfWork <= 2) {
    console.log("Beginner");
} else if (agesOfWork > 2 && agesOfWork < 5) {
    console.log("Experienced worker");
} else if (agesOfWork >= 5) {
    console.log("Veteran");
} else {
    console.log("Please insert the ages of work!")
}

//Fourth task: Kreiraj promenljivu age koja sadrži broj godina, a zatim napiši if-else strukturu koja ispisuje "Child" ako je broj godina manji od 12, "Teen" ako je između 12 i 18, i "Adult" ako je veći od 18.
let age = 18;
if (age < 12) {
    console.log("Child");
} else if (age >= 12 && age < 18) {
    console.log("Teen");
} else if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Please insert the age!")
}

//Fifth task: Kreiraj promenljivu dayOfWeek koja sadrži naziv dana u nedelji, a zatim napiši switch strukturu koja ispisuje "It's a weekend!" za subotu i nedelju, a "It's a weekday." za ostale dane.
let dayOfWeek = "Monday";
switch (true) {
    case (dayOfWeek === "Monday"):
        console.log("It's a weekday.");
        break;
    case (dayOfWeek === "Tuesday"):
        console.log("It's a weekday.");
        break;
    case (dayOfWeek === "Wednesday"):
        console.log("It's a weekday.");
        break;
    case (dayOfWeek === "Thursday"):
        console.log("It's a weekday.");
        break;
    case (dayOfWeek === "Friday"):
        console.log("It's a weekday.");
        break;
    case (dayOfWeek === "Saturday"):
        console.log("It's a weekend!");
        break;
    case (dayOfWeek === "Sunday"):
        console.log("It's a weekend!");
        break;
    default: console.log("Enter the day!")
}

//Sixth task: Kreiraj promenljivu score koja sadrži broj poena, a zatim napiši if-else strukturu koja ispisuje "Fail" ako je broj poena manji od 50, "Pass" ako je između 50 i 75, i "Excellent" ako je veći od 75.
let score = 45;
if (score < 50) {
    console.log("Fail");
} else if (score >= 50 && sore < 75) {
    console.log("Pass");
} else if (score >= 75) {
    console.log("Excellent")
}

























