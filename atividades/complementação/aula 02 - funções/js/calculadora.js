    function calculadora(){
    let operacao = Number( prompt('escolha uma operação:\n 1 - soma(+) \n 2 - subtração (-) \n 3 - multiplicação (*) \n 4 - divisão \n 5 - divisão inteira (%) \n 6 - potência (**)'))

    if(!operacao || operacao <=0 || operacao >=7){
        alert('erro! digite a opção de forma correta')
    }else{
       
        let n1 = Number(prompt('digite um valor:'))
        let n2 = Number(prompt('dgite outro valor:'))
        let total // a variavel pode ficar sem nenhum valor ou deixa vazia como let total = '', no caso ao lado a variavel não estupula nenhum valor.

        if(!n1 || !n2){
            alert('erro você não digitou um numero')
        }else{
            const novaOperaçao = Number(prompt(`escolha qual opção: \n 1 - continuar  \n 2 - sair`))
            if(novaOperaçao == 1){
                calculadora()
            }else if(novaOperaçao == 2){
                alert('até logo!!')
            }else{
                alert('digite a opção correta')
                novaOperaçao()
            }

            switch(operacao){
                case 1:
                    total = n1 + n2
                    console.log(`${n1} + ${n2} = ${total}`)
                    novaOperaçao()
                    break
                
                case 2:
                    total = n1 - n2
                    console.log(`${n1} - ${n2} = ${total}`)
                    novaOperaçao()
                    break

                case 3:
                    total = n1 * n2
                    console.log(`${n1} + ${n2} = ${total}`)
                    novaOperaçao()
                    break
                case 4:
                    total = n1 / n2
                    console.log(`${n1} / ${n2} = ${total}`)
                    novaOperaçao()
                    break
                case 5:
                    total = n1 % n2 == 0
                    console.log(`${n1} % ${n2} = ${total}`)
                    novaOperaçao()
                    break
                case 6:
                    total = n1 ** n2
                    console.log(`${n1} ** ${n2} = ${total}`)
                    novaOperaçao()
                    break
            }
        }    
    }
}
calculadora()




   /* function calculadora(){
    let operacao = Number( prompt('escolha uma operação: 1 - soma(+) \n 2 - subtração (-) \n 3 - multiplicação (*) \n 4 - divisão \n 5 - divisão inteira (%) \n 6 - potência (**)'))
    if(!operacao || operacao <= 0|| operacao >=7){ // !- o diferente è para caso não seja um numero escolhido, a operação ser menor que zero e maior que sete dar um erro
        alert('erro! digite a opção correta')
        calculadora()
    }else{
        let n1 = parseFloat(prompt('digite um valor:'))
        let n2 = parseFloat(prompt('dgite outro valor:'))
        let total 

        if(!n1 || !n2){ //aqui caso os numeros digitados forem diferentes de numero vai aparecer um erro
            alert('forma incorreta digite um numero!')
            calculadora() // caso não seja digitado o numero vai ser chamado novamente a calculadora para ser feito o procedimento de maneira correta
        }else{

                function nOperacao(){
                let opcao = prompt('deseja continuar: 1 - sim \n 2 - não ')
                if(opcao ==1){
                    calculadora()
                }else if(opcao ==2){
                    alert('até mais')
                }else{
                    alert('digite uma opção!')
                    nOperacao()
                }
            }
            if(operacao ==1){
                total = n1+n2
                console.log(`${n1} + ${n2} = ${total}`)
                nOperacao()
            }else if(operacao ==2){
                if(total < 0){
                    total = n2 - n1
                    //Math.sign(total)
                    console.log(`${n2} - ${n1} = ${total}`)
                    nOperacao()
                }else{
                    total = n1 - n2
                    console.log(`${n1} - ${n2} = ${total}`)
                    nOperacao()
                }
            }else if(operacao == 3){
                total = n1*n2
                console.log(`${n1} x ${n2} = ${total}`)
                nOperacao()
            }else if(operacao == 4){
                total = n1/n2
                console.log(`${n1} / ${n2} = ${total}`)
                nOperacao()
            }else if(operacao ==5){
                total = n1 % n2
                console.log(`${n1}  ${n2} = ${total}`)
                nOperacao()
                
            }else if(operacao ==6){
                total = n1 ** n2
                console.log(`${n1} ** ${n2} = ${total}`)
                nOperacao()

            }
        }
    }
}
calculadora()
*/





