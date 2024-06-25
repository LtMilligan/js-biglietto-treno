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
}