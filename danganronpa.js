var prompt = require("prompt-sync")();

var danganronpa = parseInt(prompt("Qual danganronpa está jogando? (Insira o número) "))
var capituloDangan = parseInt(prompt("Qual capítulo você está? (Insira o número) "))

if(danganronpa == 1){ 
    
    switch(capituloDangan) {
        case 1:
            console.log("Sayaka morreu.")
            break;
        case 2:
            console.log("Chihiro morreu.")
            break;
        case 3:
            console.log("Hifumi e taka morrem.")
            break;
        case 4:
            console.log("Sakura morre.")
            break;
        case 5:
            console.log("Fio mistério")
            break;
        default:
            console.log("Tá na noia porra não tem mais que cinco capítulos")
}
}
if(danganronpa == 2) {
    
    switch(capituloDangan) {
        case 1:
            console.log("IMPOSTER MORRE.")
            break;
        case 2:
            console.log("MAHIRU MORRE.")
            break;
        case 3:
            console.log("IBUKI E HIYOKO MORREM.")
            break;
        case 4:
            console.log("NEKOMARU MORRE.")
            break;
        case 5:
            console.log("KOMAEDA MORRE.")
            break;
        default:
            console.log("Tá na noia porra não tem mais que cinco capítulos")

    }
}

