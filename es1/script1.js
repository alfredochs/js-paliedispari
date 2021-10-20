// // Palidroma
// // Chiedere all’utente di inserire una parola
// // Creare una funzione per capire se la parola inserita è palindroma

const parolaDaInvertire = String(prompt("Inserisci una parola: "));

function valutaParolaInserita(str) {
    const parolaArray = str.split("");
    const parolaReverse = parolaArray.reverse("");
    const unireReverse = parolaReverse.join("");
    return unireReverse;
}
const parolaDaFunzione = valutaParolaInserita(parolaDaInvertire);

if (parolaDaInvertire === parolaDaFunzione) {
    alert("La parola è palindroma");
} else {
    alert("Non è palindroma");
}
