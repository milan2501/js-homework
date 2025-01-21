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
