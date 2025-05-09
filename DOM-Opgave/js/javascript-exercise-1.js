/**
 * Eksempel 1
 * Tilføjer/fjerner en css klasse med større skrifttype til alle elementer
 * Benytter metoden addEventListener til at lytte på et onclick event på knappen
 */
document.getElementById("example1").addEventListener("click", () => {
    //Henter array med alle child elementer til #contentarea
    let elements = document.querySelectorAll("#contentarea *");
    //Lopper array med elementer
    for(let item of elements) {
        //Tilføj klassen tx-big hvis den ikke eksisterer i et elements classList
        if(!item.classList.contains("tx-big")) {
            item.classList.add("tx-big");
        } else {
            //Ellers fjern klassen hvis den eksisterer i elementets classList
            item.classList.remove("tx-big");
        }
    }
});

/**
 * Eksempel 2
 * Toggler en css klasse med større skrifttype til alle elementer
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */
document.getElementById("example2").onclick = () => {
    //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
    document.querySelectorAll("#contentarea *").forEach( function(element) {
        //Toggler class tx-big til elementernes classList
        element.classList.toggle("tx-big");
    });
};

