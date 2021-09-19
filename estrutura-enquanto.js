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