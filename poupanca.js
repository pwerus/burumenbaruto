var prompt = require("prompt-sync")();

var deposito = parseFloat(prompt("Insira a quantia a ser depositada: "))
var tempo = parseFloat(prompt("Quantos meses deixará guardado o dinheiro? "))

var porcentagem = 0.05 / 100 * deposito
var lucro = porcentagem * tempo + deposito

console.log("O lucro foi de " + lucro)
