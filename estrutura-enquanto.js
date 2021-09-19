/*
Var
// Seção de Declarações das variáveis 
   nome: caractere
   idade, limite, cont: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite a quantidade de vezes que vai ser verificado a idade: ")
   leia(limite)
   cont := 0
   enquanto cont < limite faca
       escreva("Digite o nome da pessoa: ")
       leia(nome)
       escreva("Digite a idade do ", nome, ": ")
       leia(idade)
       se idade > 18 entao
           escreval(nome, " Você é maior de idade!")
       senao
           escreval(nome, " Você é menor de idade!")
       fimse
       cont := cont + 1
   fimenquanto
*/
function bCalc() {
    var nome, idade, limite, cont
    limite = prompt("Digite a quantidade de vezes que vai ser verificado a idade: ")
    cont = 0
    while (cont < limite){
        nome = prompt("Digite o nome da pessoa: ")
        idade = prompt("Digite a idade do " + nome +": ")
        if ( idade > 18 )
            document.getElementById("paragrafo").innerText = nome + " voc\u00ea \u00e9 maior de idade!"
        else
            document.getElementById("paragrafo").innerText = nome + " voc\u00ea \u00e9 menor de idade!"
        cont++
    }   
}