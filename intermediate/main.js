// Erstellen des Arrays mit Automarken
var automarken = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];

// Alphabetische Sortierung des Arrays
var sortierteMarken = automarken.sort();

// Ausgabe des sortierten Arrays in der Konsole
console.log("Sortierte Automarken:", sortierteMarken);

var fruechte = ["Apfel", "Banane", "Kiwi", "Mango", "Birne"];
console.log("Ursprüngliches Array:", fruechte);

fruechte.push("Orange");
console.log("Frucht `Orange` hinzugefügt:",fruechte);

fruechte.shift();
console.log("Erste Frucht `Apfel` entfernt", fruechte);

fruechte.pop();
console.log("Letzte Frucht 'Orange' entfernt:", fruechte);

fruechte.unshift();
console.log("Frucht `Erdbeere` am anfang hinzugefügt", fruechte);





var tiere = ["Pderd", "hund", "Elefant", "Giraffe"];
console.log("Ursprüngliches Array:", tiere);

tiere.unshift("Katze");
console.log("Tierart 'Katze' am Anfang hinzugefügt:", tiere);


tiere.pop();
console.log("Letzte Tierart 'Giraffe' entfernt:", tiere);


tiere.splice(2, 1);
console.log("Zweite Tierart 'Elefant' entfernt:", tiere);


tiere.push("Tiger");
console.log("Tierart 'Tiger' am Ende hinzugefügt:", tiere);


var sortiertesArray = tiere.sort().reverse();


console.log("Umgekehrte alphabetische Sortierung:", sortiertesArray);