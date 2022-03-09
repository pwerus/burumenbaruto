var prompt = require("prompt-sync")();

var numero = prompt("Insira um número: ")
var resultado = parseInt(numero)

if(resultado < 0) {
    console.log("O número é negativo.")
}
else {
    console.log("O número é positivo.")
}

