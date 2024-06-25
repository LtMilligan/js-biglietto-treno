// GENERO UNA FUNZIONE PER EVITARE CHE I CAMPI RICHIESTI VENGANO ACCETTATI VUOTI

let askPrompt = (message) => {
    const data = prompt(message);
    if (data == '') {
        alert('Il campo non può essere vuoto');
        return askPrompt(message);
    }
    return data;
};

// FACCIO UNA FUNZIONE PER GENERARE IL PREZZO DEL BIGLIETTO DA AGGIUNGERE ALL'EVENTO ONCLICK

let generateTicketPrice = () => {
    // DICHIARO UNA COSTANTE PER RICHIEDERE I KM DA PERCORRERE
    const distanceKm = askPrompt('Inserisci il numero di Km da percorrere');
    if (!distanceKm) return false;
    // DICHIARO UNA COSTANTE PER RICHIEDERE L'ETA DEL PASSEGGERO
    const eta = askPrompt('Inserisci la tua età');
    if (!eta) return false;
    // DICHIARO VARIABILE CONTO CON RELATIVO CALCOLO PER MODIFICA IN BASE A ETA
    let percDiscount = 0;
    if (eta < 18) {
        percDiscount = 0.2;
    }
    else if (eta > 65) {
        percDiscount = 0.4;
    }
    // DICHIARO UNA COSTANTE PER CALCOLARE IL PREZZO PIENO DEL BIGLIETTO
    const priceFullTicket = distanceKm * 0.21;
    // DICHIARO UNA COSTANTE PER CALCOLARE IL PREZZO CON EVENTUALE SCONTO
    const finalPrice = priceFullTicket - (priceFullTicket * percDiscount)
    // FACCIO L'INNERHTML DEL PREZZO FINALE
    document.getElementById('pass-gen').innerHTML = finalPrice;
}