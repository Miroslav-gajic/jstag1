// let variable = "hello world";
// console.log(variable);

// let inte = "33";
// console.log(inte);

// let float = 1.123;
// console.log(float);

// let bool = true;
// let bool1 = false;
// console.log(bool);

// let nix = null;
// console.log(nix);

// let und = undefined;
// console.log(und);

// let decl;
// console.log(decl);

// console.log(Number(inte));
// console.log(typeof String(float));

// console.log(1+1);

// console.log("hello world" + " " + "world" + variable);
// console.log(`hello world ${inte}`)

// let var1;
// console.log(var1);
// var1 = "anders";
// console.log(var1);

// const var2 = "wert";
// console.log(var2);

// console.log(var2.toLowerCase(""));

// let  fgdfxgvdfgd = "sdfsd";

// const arr = [11,"dfs",var1,false,["faf",32]];
// console.log(arr);

// // const feld = [[1,2,3], [4,5,6], [7,8,9]];
// // console.log(feld);
// arr.push("push");
// console.log(arr);

// arr.pop();
// console.log(arr.pop);

var name = "Miroslav";
var age = 24;

var players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];
var dritterSpieler = players[2];

// Konsolenprotokoll mit der ersten Nachricht
console.log("Hallo, mein Name ist " + name);

// Konsolenprotokoll mit der zweiten Nachricht, die sowohl den Namen als auch das Alter verwendet
console.log("Hi, my name is " + name + " and I am " + age + " years old");

// Anzeige der Nachrichten auf der Webseite
document.getElementById('output').innerHTML = "<p>" + "Hallo, mein Name ist " + name + "</p>"
    + "<p>" + "Hi, my name is " + name + " and I am " + age + " years old" + "</p>";


console.log("Der wertvollste Spieler des Spiels ist " + dritterSpieler);
