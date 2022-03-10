var prompt = require("prompt-sync")();

var idade = parseInt(prompt("Insira sua idade: "))

if (idade >= 10 || idade <=13) {
    console.log("Você é pré adolescente")
}
if (idade >=0 || idade <=10) {
    console.log("Você é criança")
}
if (idade >= 14 || idade <=18) {
    console.log("Você é adolescente")
}
if (idade >= 19 || idade <=60) {
    console.log("Você é adulto")
}
else {
    console.log("Você é idoso")
}