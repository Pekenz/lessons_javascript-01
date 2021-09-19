/*
Var
// Seção de Declarações das variáveis 
   sairLoop: caractere
   val01, val02: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   repita
         escreva("Digite o primeiro valor: ")
         leia(val01)
         escreva("Digite o segundo valor: ")
         leia(val02)
         escreval("Resultado: ", val01 + val02)
         escreval("Deseja sair? S/N")
         leia(sairLoop)
   ate sairLoop <> "N"

Fimalgoritmo
*/

function bCalc() {
    var sairLoop, val01, val02
    do {
        val01 = prompt("Digite o primeiro valor: ")
        val02 = prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt(val01) + parseInt(val02))
        sairLoop = prompt("Deseja sair? S/N")
    }while(sairLoop == "N" || sairLoop == "n")
    
} 