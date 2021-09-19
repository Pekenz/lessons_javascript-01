function bCalc() {
    var sairLoop, val01, val02
    do {
        val01 = prompt("Digite o primeiro valor: ")
        val02 = prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt(val01) + parseInt(val02))
        sairLoop = prompt("Deseja sair? S/N")
    }while(sairLoop == "N" || sairLoop == "n")
    
} 