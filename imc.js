var prompt = require("prompt-sync")();

var peso = parseFloat(prompt("Insira seu peso: "))
var altura = parseFloat(prompt("Insira sua altura: "))

var imc = parseFloat(peso / (altura*altura));
console.log(imc)
if (imc >= 18.5 && imc < 25) {
    console.log("De acordo com o seu IMC, você está com um peso normal. Você terá menor risco de doenças cardíacas e vasculares.")
}
if (imc >= 17 && imc < 18.5) {
    console.log("De acordo com o seu IMC, você está abaixo do peso. Você pode ter fadiga, estresse ou ansiedade")
}
if (imc >= 16 && imc < 17) {
    console.log("De acordo com o seu IMC, você está desnutrido. Você pode ter queda de cabelo, infertilidade e ausência menstrual")
}
if (imc >= 25 && imc < 30) {
    console.log("De acordo com o seu IMC, você está acima do peso. Você pode ter fadiga, má circulação e varizes.")
}
if (imc >= 30 && imc < 35) {
    console.log("De acordo com o seu IMC, você está com Obesidade Grau I. Você pode ter diabetes, angina, infarto, aterosclerose")
}
if (imc >= 35 && imc <= 40) {
    console.log("De acordo com o seu IMC, você está com Obesidade Grau II. Você pode ter apneia do sono e falta de ar")
}
if (imc > 40) {
    console.log("De acordo com o seu IMC, você está com Obesidade Grau III. Você pode ter refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC")
}
