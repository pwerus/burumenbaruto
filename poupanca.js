var prompt = require("prompt-sync")();

var deposito = parseFloat(prompt("Insira a quantia a ser depositada: "))
var tempo = parseFloat(prompt("Quantos meses deixará guardado o dinheiro? "))

var lucro = deposito * 0.05

switch (tempo) {
    case 1:
        console.log("Seu rendimento foi de " + lucro, "reais")
        break;
    case 2:
        console.log("Seu rendimento foi de " + lucro * 2, "reais")
        break;
    case 3:
        console.log("Seu rendimento foi de " + lucro * 3, "reais")
        break;
    case 4:
        console.log("Seu rendimento foi de " + lucro * 4, "reais")
        break;
    case 5:
        console.log("Seu rendimento foi de " + lucro * 5, "reais")
        break;
    case 6:
        console.log("Seu rendimento foi de " + lucro * 6, "reais")
        break;
    case 7:
        console.log("Seu rendimento foi de " + lucro * 7, "reais")
        break;
    case 8:
        console.log("Seu rendimento foi de " + lucro * 8, "reais")
        break;
    case 9:
        console.log("Seu rendimento foi de " + lucro * 9, "reais")
        break;
    case 10:
        console.log("Seu rendimento foi de " + lucro * 10, "reais")
        break;
    case 11:
        console.log("Seu rendimento foi de " + lucro * 11, "reais")
        break;
    case 12:
        console.log("Seu rendimento foi de " + lucro * 12, "reais")
        break;
    default:
        console.log("Insira um numero de 1 a 12")
    
}