function bCalc() {
    var num, fatorial

    num = prompt("Digite o numero: ")
    fatorial = 1
    for (var cont = 1; cont <= num; cont++){
        fatorial = fatorial * cont
    }

    document.getElementById("paragrafo").innerText = "O fatorial de " + num + " \u00e9: " + fatorial

}