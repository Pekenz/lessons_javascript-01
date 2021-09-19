/*
Var
// Seção de Declarações das variáveis 
   num, fatorial, cont: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite um numero: ")
   leia(num)
   fatorial := 1
   para cont de 1 ate num faca
        fatorial := fatorial * cont
   fimpara
   escreva("o fatorial de ", num, " é: ", fatorial)
*/

function bCalc() {
    var num, fatorial

    num = prompt("Digite o numero: ")
    fatorial = 1
    for (var cont = 1; cont <= num; cont++){
        fatorial = fatorial * cont
    }

    document.getElementById("paragrafo").innerText = "O fatorial de " + num + " \u00e9: " + fatorial

}