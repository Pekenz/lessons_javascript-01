function bCalc() {
    var num1, num2, res, op
    num1 = prompt("Digite o primeiro valor: ")
    op = prompt("Digite a operação, Exemplo: +, -, *, /:" )
    num2 = prompt("Digite o segundo valor: ")
    
    
    if (op == "+"){
        res = parseInt(num1) + parseInt(num2)
    }
    else if(op == "-")
        res = parseInt(num1) - parseInt(num2)
    else if(op == "*")
        res = parseInt(num1) * parseInt(num2)
    else(op == "/")
        res = parseInt(num1) / parseInt(num2)
    document.getElementById("paragrafo").innerText = res
}