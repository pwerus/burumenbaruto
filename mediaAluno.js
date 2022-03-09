var prompt = require("prompt-sync")();

var prova = parseInt(prompt("Nota do aluno na prova:"))
var trabalho = parseInt(prompt("Nota do aluno no trabalho:"))
var tarefa = parseInt(prompt("Nota do aluno na tarefa:"))

var soma = prova + trabalho + tarefa
var media = soma / 3

console.log(media) 
if(media >= 60){
    console.log("Aprovado.")
}
if(media > 90) {
    console.log("Ganhou o osu!supporter tá só por dale nos estudo heinnnnn")
}
else {
    console.log("Tá ratiando larga de arriada vai estudar vagabundo esgualepado")
}