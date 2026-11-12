
function fnAprovado(nome = "", nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        console.log(" o aluno " + nome + ", esta aprovado:" + media)
    }
    else {
        console.log(" o aluno " + nome + ", esta reprovado:" + media)
    }



}


function fnDiferenca(numero1, numero2) {
    let diferenca = numero1 - numero2

    console.log("A diferença entre o " + numero1 + " e o " + numero2 + " é de " + diferenca)


}


function fnTabuada(n1) {

    for (var i = 1; i <= 10; i++) {
        let resultado = (n1 * i)
        console.log(n1 + " x " + i + " = " + resultado)


    }

}

function fnIdade(idade) {

    if (idade < 12) {
        console.log("criança")
    } else if (idade <= 17) {
        console.log("adolecente")
    } else if (idade < 59) {
        console.log("adulto")
    } else if (idade >= 60) {
        console.log("idoso")
    }

}
fnIdade(12)

function fnRetangulo(largura, altura) {
    let resultado = largura * altura
    console.log("o resultado do calculo é " + largura + " X " + altura, "=", resultado, "cm²")

}

fnRetangulo(10, 10)

function fnContagem(numeroUsuario) {
    let contador = 10
    while (contador >= 0) {
        console.log(contador)
        contador = contador - 1
    }
}

fnContagem(10)


function fnAumento(salario) {
    let aumento = (salario * 0.2) + salario
    if (salario < 1000) {
        console.log("O aumento será de 20% , novo dado salario é: " + aumento)
    } else if (salario > 1000 && salario < 2000) {
        console.log("O aumento será de 15% , novo dado salario é: " + aumento)
    } else if (salario > 2000) {
        console.log("O aumento será de 10% , novo dado salario é: " + aumento)
    }
}

fnAumento(2001)


function fnParimpar(numero) {
    if (numero % 2 == 0) {
        console.log("O Numero" + numero + " é PAR")
    } else {
        console.log("O Numero" + numero + " é IMPAR")
    }


}
fnParimpar(4)


function FnTemperatura(temperatura = 31, tipoTemperatura = "F", temperaturaConvertida) {

    if (tipoTemperatura == "C") {
        temperaturaConvertida = ((temperatura * 1.8) + 32)
        console.log("você escolheu Celsius!")
        console.log(temperaturaConvertida)
    } else if (tipoTemperatura == "F") {
        temperaturaConvertida = ((temperatura - 32) * (5 / 9))
        console.log("você converteu  Fahrenheit para Celsius!")

        console.log(temperaturaConvertida)

    }

}
FnTemperatura(31,"C",)




