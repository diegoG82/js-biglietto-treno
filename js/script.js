// TEST JS
// alert("ciao!")

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca :lente_a_destra:.


// INPUT

// Chiedo al passeggero il numero di km che vuole fare e la sua eta' trsformando i dati in numeri.
const kmDaFare = parseInt (prompt ("quanti km devi fare?"));
const age = parseInt (prompt ("Quanti anni hai?"));
console.log (kmDaFare, age);

// Calcolo il prezzo del biglietto intero

const prezzoDelBigliettoInt = kmDaFare * 0.21
console.log (prezzoDelBigliettoInt)

// LOGICA

// Se l'eta' del passeggero e' sotto i 18 anni avra' uno sconto del 20% quindi paghera' l'80% del totale.

// const discountMinor = (0.80);

// Se il passeggero ha 65 anni o piu' avra' uno sconto del 40% quindi paghera' il 60% del totale.

// const discountSenior = (0.60);

// Calcolo costo biglietto

let ticketPrice = prezzoDelBigliettoInt

if (age < 18 ){
    ticketPrice = (prezzoDelBigliettoInt * 20 / 100).toFixed(2);
}
else if (age >= 65){
    ticketPrice = (prezzoDelBigliettoInt * 40 / 100).toFixed(2);
}
// else{
//     ticketPrice = prezzoDelBigliettoInt.toFixed(2);
// }

console.log (ticketPrice);


// OUTPUT

document.getElementById("finalprice").innerHTML = `il costo del biglietto è di: ${ticketPrice}€`;
