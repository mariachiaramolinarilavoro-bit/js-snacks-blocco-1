/*
snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.


Cosa fare:
Leggi la tracchia che vedi sopra
Fai una cartella js-snacks-blocco-1
metti dentro una sotto cartella snack-1
metti nella sotto cartella due file index.html e main.js
svolgi l'esercizio
pusha
mandami messaggio qui con il link della repo quando hai fatto.
*/


// Snack 1
// L’utente inserisce due numeri, il software stampa il maggiore

let firstNumber = prompt("Inserire il primo numero");
let secondNumber = prompt("Inserire il secondo numero");

// Converto i valori in numeri
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

if (firstNumber > secondNumber) {
  console.log("Il numero maggiore è:", firstNumber);
} else if (secondNumber > firstNumber) {
  console.log("Il numero maggiore è:", secondNumber);
} else {
  console.log("I numeri sono uguali");
}