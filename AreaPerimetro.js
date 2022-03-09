var prompt = require("prompt-sync")();

var lado = prompt("Insira o número de um lado do quadrado: ")
var area = lado * lado
var perimetro = lado * 4

var sentence = `A área é ${area} e o perímetro é ${perimetro}`

console.log(sentence)