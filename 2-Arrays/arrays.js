//First task: Napraviti prazan array koji se zove "names", pronaci nacin kako da naknadno dodate 3 imena "marija", "petar" i "jovan" u taj array
let names = [];
let addNames = names.push("marija", "petar", "jovan");
console.log(names);

//Second task: Napraviti array "komponente" i ubaciti 3 komponente, "monitor", "tastatura", "mis", pronaci nacin kako da obrisete sve elemente in arraya
let komponente = ["monitor", "tastatura", "mis"];
let obrisaneKomponente = komponente.slice(komponente.length);
console.log(obrisaneKomponente);

//Third task: Napraviti array "books" koji sadrzi 3 knjige, pronaci nacin kako da naknadno dodati novu knjigu na prvo mesto
let books = ["Braca Karamazov", "Ana Karenjina", "Carobni breg"];
let addBook = books.unshift("Sveto Pismo");
console.log(books);
