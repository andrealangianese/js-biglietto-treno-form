//INPUT
    // chiedo a utente quanti kilometri vuole percorrere
let distanceToDo = parseInt(prompt("Scegli quanti kilometri vuoi percorrere!!"));
console.log(distanceToDo);

    // chiedo a utente l'età del passeggero per eventuali scontistiche

let userAge = parseInt(prompt("Scrivi la tua età per eventuali sconti"));
console.log(userAge);

const kmPrice = 0.21;
// ELABORAZIONE 
    //prezzo biglietto = 0,21 €/ km

let ticketPrice = kmPrice * distanceToDo ;
let ticketPrices = ticketPrice.toFixed(2)
console.log(ticketPrices);

    //sconto del 20% se ha meno di 18 anni

if (userAge < 18){
    discountPrice = (ticketPrice / 100) * 80;
}else if (userAge > 65) {
   discountPrice = ( ticketPrice / 100) * 60;
   
}else {}

let discountPrices = +discountPrice.toFixed(2); 
console.log (discountPrices);
    //sconto del 40% se ha più di 65 anni
//OUTPUT stampare con log e poi eventualmente da elaborare in pagina
document.getElementById("mio_id").innerHTML = discountPrice
