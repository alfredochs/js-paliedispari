// Pari e Dispari;
// Dichiariamo chi ha vinto.;

// 

let numeroGenerato = generaNumberRandom();

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const sceltaUtente = prompt("Scegli tra pari o dispari: ");
const sceltaUtenteNumero = parseInt(prompt("Scegli un numero tra 1 e 5: "));

// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
const numeroPc = alert("Il numero del PC è :" + numeroGenerato);

// Sommiamo i due numeri
const somma = sceltaUtenteNumero + numeroGenerato;
console.log(sceltaUtenteNumero, numeroGenerato);
const risultatoSommaAschermo = alert("la somma dei numeri è: " + somma);



// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
function pariOdispari(num1, num2) {
    let add = num1 + num2;
    if (add % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}
const parODis = pariOdispari(sceltaUtenteNumero, numeroGenerato);
const risultatoPariOdispari = alert("la somma è: " + parODis);

if (sceltaUtente === "pari") {
    if (somma % 2 === 0) {
        alert("Ha vinto l'utente.");
    } else {
        alert("Ha vinto il pc.");
    }
} else if (sceltaUtente === "dispari") {
    if (!(somma % 2 === 0)) {
        alert("Ha vinto l'utente");
    } else {
        alert("Ha vinto il pc.");
    }
}

function generaNumberRandom(numeroMinimo = 1, numeroMassimo = 5) {
    const numeroRandom = Math.floor(Math.random() * numeroMassimo + 1);
    return numeroRandom;
}



// // scelta del utente fra pari o dispari
// // l'utente inserisce un numero a scelta tra 1 ee 5
// // il pc genera un numero a caso da 1 a 5 e lo mostra
// // sommare il numero generato dal computer piu il numero inserito dall'utente
// // il risultato della somma è pari?
//     // verificare se l'utente ha scelto pari
//         // se ha scelto pari vince l'utente
//     //  il risultato della somma è dispari?
//         // se ha scelto dispari vince l'utente
// // altrimenti l'utente perde
