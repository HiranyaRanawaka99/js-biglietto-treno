const Km = prompt('Quanti KM devi percorrere?');
//console.log ('KM da percorrere: ' + Km);

const eta = prompt('Quanti anni hai?');
//console.log ('Età: ' + eta);

const prezzoKm = Km * 0.21;
//console.log ('Prezzo per KM: ' + prezzoKm);


/*Stampiamo in HTML */

document.getElementById('km').innerHTML = 'KM da percorrere: ' + Km;

document.getElementById('eta').innerHTML = 'La tua età: ' + eta;


if (eta < 18) {
    document.getElementById('sconto').innerHTML = 'Hai diritto a uno sconto del 20%. Il prezzo totale del tuo biglietto è: ' + (prezzoKm -((prezzoKm*20)/100)).toFixed(2) + ' €'
} else if (eta > 65) {
    document.getElementById('sconto').innerHTML = 'Hai diritto a uno sconto del 40%. Il prezzo totale del tuo biglietto è: ' + (prezzoKm -((prezzoKm*40)/100)).toFixed(2) + ' €'
} else {
    document.getElementById('sconto').innerHTML = 'Il prezzo totale del tuo biglietto è: ' + prezzoKm.toFixed(2) + '€'
}


