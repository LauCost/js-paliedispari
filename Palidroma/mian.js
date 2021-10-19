//Chiedo all'utente di inserire la parola
let parola = prompt("Scegli la tua parola");

//Assegna alla variabile la parola girata
let parolaGirata = giraParola(parola);

//Funzione nel quale viene invertita la parola 
function giraParola(parola) {

    let parolaReverse = '';

    for (var i = parola.length - 1; i >= 0; i--) {
        parolaReverse += parola[i];
    }
    return parolaReverse;
}

//Verifica se la parola girata è uguale alla parola
if (parolaGirata == parola) {

    console.log("è palidroma")

} else {

    console.log("Non è palidroma");
}