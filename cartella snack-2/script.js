//cartella: snack-2

//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

let firstWord = prompt("Inserire il prima parola");
let secondWord = prompt("Inserire il seconda parola");{

    if (firstWord.length < secondWord.length) {
        console.log(firstWord);
        console.log(secondWord);
    }   else if (firstWord.length > secondWord.length) {
        console.log(secondWord);
        console.log(firstWord);
    }   else {
        console.log("Le parole hanno stessa lunghezza:");
        console.log(firstWord);
        console.log(secondWord);
    }
}