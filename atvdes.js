
function fnAprovado(nome ="", nota1,nota2,nota3){
    let media = (nota1 + nota2 + nota3) / 3 

    if(media >= 7){
        console.log(" o aluno " + nome + ", esta aprovado:" + media)
    }
    else{
        console.log(" o aluno " + nome + ", esta reprovado:" + media)
    }
    

    
}


function fnDiferenca(numero1,numero2){
    let diferenca = numero1 - numero2
    
         console.log("A diferença entre o " + numero1 + " e o " + numero2 + " é de "  + diferenca)
    

}


function fnTabuada(n1){
   
for (var i = 1; i <= 10; i++){
    let resultado = (n1 * i)
     console.log(n1 + " x " + i + " = " + resultado)

  
}

}

function fnIdade(idade){

if(idade < 12){
    console.log("criança")
}else if (idade <= 17){
    console.log("adolecente")
}else if (idade < 59){
    console.log("adulto")
}else if (idade >= 60){
    console.log("idoso")
}

}

function fnRetangulo(largura,altura){
 let resultado = largura * altura
    console.log("o resultado do calculo é " + largura + " X " + altura ,   resultado )
 
}