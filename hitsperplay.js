var prompt = require("prompt-sync")();

var playcount = prompt("Insert your total playcount: ")
var hits = prompt("Insert your total hits: ")
var hitsperplay = (hits / playcount)

console.log(hitsperplay)

if(hitsperplay < 200) {
    console.log("Filha da puta ta ratiando farmer desgraçado para de jogar sotarks e vai jogar mapa decente arrombado para de dar retry")
}
else {
    console.log("Boa cupixa tá só por dale hein")
}