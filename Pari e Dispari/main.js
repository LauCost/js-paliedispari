//Chiede all'utente di scegliere tra pari e dispari
let scelta = prompt("Scegli pari o dispari").toLowerCase();

//Chiede all'utente di scegliere un numero da 0 a 10
let numeroUtente = Number(prompt("Inserisci un numero da 0 a 10"));

//Genera un numero casuale da 0 a 10
let numeroPC = Math.floor(Math.random() * 11);

//Calcola la somma tra il numero scelto dal PC e dall'utente
let numeroFinale = numeroUtente + numeroPC

//Stampa il risultato
console.log("La tua scelta " + scelta)

//Stampa il risultato
console.log("Il numero scelto dal PC: " + numeroPC);

//Stampa il risultato
console.log("Numero scelto dall'utente: " + numeroUtente)

//Stampa il risultato
console.log("Numero finale: " + numeroFinale)

//Verifica se il numero finale sia pari o dispari
function pariDispari(numeroFinale) {

    if (numeroFinale % 2 == 0) {

        return "pari"

    } else {

        return "dispari"
    }
}

//Concatena la scleta dell'utente e il numero finale e verifica che rispetti le varie proprietà per decidere se l'utente ha vinto o no
if (scelta == "pari" && pariDispari(numeroFinale) == "pari") {

    //Stampa il risultato
    console.log("Hai Vinto!!!");

} else if (scelta == "dispari" && pariDispari(numeroFinale) == "dispari") {

    //Stampa il risultato
    console.log("Hai Vinto!!!");

} else {

    //Stampa il risultato
    console.log("Hai Perso!!!");

}






