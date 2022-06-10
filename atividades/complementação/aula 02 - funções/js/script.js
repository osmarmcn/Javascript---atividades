//funções declarativas
// função declarativa tem que apresentar um nome obrigatoriamente

function nome(){
    console.log('ola função declarativa')
}
nome()

// expressões de funções
// nesse caso a nomeação é opcional 

var funcao = function funcao(){
    console.log('nome da função')
}
funcao()

//ou
var nome = function(){
    console.log('outra forma de função, sem o nome')
}
nome()

// arrow function
// são funções anonimas que não pode ser nomeada

var flecha = () =>{
    console.log('uma arrow function')
}
flecha()