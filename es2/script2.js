// Pari e Dispari;
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.;


function generaNumberRandom(numeroMinimo = 1, numeroMassimo = 5) {
    const numeroRandom = Math.floor(Math.random() * numeroMassimo) + 1;
    return numeroRandom;
}

function somma(sceltaUtenteNumero, generaNumberRandom) {
    const risultatoSomma = sceltaUtenteNumero + generaNumberRandom();
    return risultatoSomma;
}


// scelta del utente fra pari o dispari
const sceltaUtente = prompt("Scegli tra Pari o Dispari: ");
// l'utente inserisce un numero a scelta tra 1 ee 5
const sceltaUtenteNumero = prompt("Scegli un numero da 1 a 5: ");
// il pc genera un numero a caso da 1 a 5 e lo mostra
const numeroGenerato = alert("Il numero del computer è: " + generaNumberRandom());
const sommaDeiNumeri = somma(sceltaUtenteNumero, generaNumberRandom);

console.log(sommaDeiNumeri);

alert(`la somma totale è: ${sommaDeiNumeri}`);

// sommare il numero generato dal computer piu il numero inserito dall'utente
// const sommaDeiNumeri = sceltaUtenteNumero + numeroGenerato;


// il risultato della somma è pari?
// if (sommaDeiNumeri % 2 === 0) 
if ((somma(sceltaUtenteNumero, numeroGenerato) % 2 === 0)) {
    // verificare se l'utente ha scelto pari
    if (sceltaUtente === "Pari") {
        // se ha scelto pari vince l'utente
        alert("Ha vinto l'utente.");
    } else {
        alert("Ha vinto il computer.");
    }

    //  il risultato della somma è dispari?
} else {
    if (sceltaUtente === "Dispari") {
        // se ha scelto dispari vince l'utente
        alert("Ha vinto l'utente.");
    } else {
        alert("Ha vinto il computer.");
    }
}
// altrimenti l'utente perde