//debug per vedere se funge

console.log("funge?");

// creo variabili o anche costanti

const distanceToDo = document.querySelector("#distanzaKm");
const userAge = document.querySelector("#userAge");


//creo anche la costante del form che sarà alla fine della fiera il padre di tutto

const userForm = document.querySelector(".form");

//creo const per inserire risultati da visualizzare
const result = document.getElementById("risultati");

//prezzo biglietto = 0,21 €/ km
const kmPrice = 0.21;

//do inizio al tutto ossia quando si clicca succede...

userForm.addEventListener("submit", (e) => {//(e) = dovrebbe stare per evento, ma da cercare 
    e.preventDefault(); // questo praticamente impedisce il comportamento di default, ossia non darmi tempo di completare il form ma inviarlo subito, senza dati inseriti
    //debug
    console.log("form inviato");

    // ELABORAZIONE 
    //creo nuove variabili perchè devo trasformare questi due da stringhe a numeri
    let distance = Number(distanceToDo.value);
    let age = Number(userAge.value);

    let ticketPrice = kmPrice * distance;
    let discountPrice = ticketPrice; // inizializzo con prezzo pieno

    //messaggio
    let message = "Prezzo pieno, nessuno sconto applicato.";



    if (age < 18) {
        //qua 20% di sconto
        discountPrice = (ticketPrice / 100) * 80;
        message = "hai diritto ad uno sconto del 20%"
    } else if (age > 65) {
        //qua 40% di sconto
        discountPrice = (ticketPrice / 100) * 60;
        message = "hai diritto al 40% di sconto, sei vecchio!"
    } else { }
    
    //formattazione a due decimali soltanto
   
    let ticketPriceFormatted = ticketPrice.toFixed(2);
    let discountPriceFormatted = discountPrice.toFixed(2);


    result.innerText = `${message}\nPrezzo pieno: €${ticketPriceFormatted}\nPrezzo scontato: €${discountPriceFormatted}`;

})




