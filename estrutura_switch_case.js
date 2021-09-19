
function bCalc() {
    var num1, num2, res, op
    num1 = prompt("Digite o primeiro valor: ")
    op = prompt("Digite a operação, Exemplo: +, -, *, /:" )
    num2 = prompt("Digite o segundo valor: ")
    switch(op){
        case "+":
            res = parseInt(num1) + parseInt(num2)
            break;
        case "-":
            res = parseInt(num1) - parseInt(num2)
            break;
        case "*":
            res = parseInt(num1) * parseInt(num2)
            break;
        case "/":
            res = parseInt(num1) / parseInt(num2)
            break;
    }
    document.getElementById("paragrafo").innerText = res
}