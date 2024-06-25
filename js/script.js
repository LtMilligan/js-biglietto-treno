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

}