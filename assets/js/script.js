const Km = prompt('Quanti KM devi percorrere?');
console.log ('KM da percorrere: ' + Km);

const eta = prompt('Quanti anni hai?');
console.log ('Età: ' + eta);

const prezzoKm = Km * 0.21;
console.log ('Prezzo per KM: ' + prezzoKm);

if (eta < 18) {
    alert ('Hai diritto a uno sconto del 20%. Il prezzo totale del tuo biglietto è: ' + (prezzoKm -((prezzoKm*20)/100)) + ' €')
} else if (eta > 65) {
    alert ('Hai diritto a uno sconto del 40%. Il prezzo totale del tuo biglietto è: ' + (prezzoKm -((prezzoKm*40)/100)) + ' €')
}