// Chiedi all'utente di inserire il nome
let Name = prompt("Inserisci il tuo nome");

// Chiedi all'utente di inserire il cognome
let Surname = prompt("Inserisci il tuo cognome");

// Chiedi all'utente di inserire il colore preferito
let FavoriteColor = prompt("Inserisci il tuo colore preferito");

// Visualizza tutte le risposte insieme
// console.log("I tuoi datti:"+ Name + Surname + FavoriteColor + 23);
let datiElement = document.getElementById("dati");
datiElement.textContent = `I tuoi dati: ` + Name + Surname + FavoriteColor + 23;


