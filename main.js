function FnMensagem(nome) {
    console.log("seja bem vindo " + nome + ", ao sistema sandbox")
    
}

function fnSoma(numero1, numero2, operador = ""){
    let resultado = numero1 + numero2

if( operador == "somar"){
    resultado = numero1 + numero2
}else if (operador == "subtrair"){
    resultado = numero1 - numero2
}else if (operador == "multiplicar"){
    resultado = numero1 * numero2
}else if (operador == "dividir"){
    resultado = numero1 / numero2
}else{
    console.log("valor do operador esta invalido,calculo zerado")
}

console.log ("o resultado da operacao:"  + resultado)
}



