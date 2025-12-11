//debug per vedere se funge

console.log("funge?");

// creo variabili o anche costanti

const distanceKm =document.querySelector("#distanzaKm");
const etaUser = document.querySelector("#userAge");

//console log di debug

console.log(distanceKm, etaUser);

//creo anche la costante del form che sarà alla fine della fiera il padre di tutto

const userForm = document.querySelector(".form");

//console log di debug

console.log(userForm);

//do inizio al tutto ossia quando si clicca succede...

userForm.addEventListener("click", (e) => {//(e) = dovrebbe stare per evento, ma da cercare 
    e.preventDefault(); // questo praticamente impedisce il comportamento di default, ossia non darmi tempo di completare il form ma inviarlo subito, senza dati inseriti
    //debug
    console.log("form inviato");
    console.log(distanceKm.value);
    
})




