/*let res = para(20)
function para(){
    if(20%2==0){
        return 'par'
    }else{
        return 'impar'
    }
    
}
console.log(res)
*/

/*let res = parimpar(9)
function parimpar(n){
    if(n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}
console.log(res)
//console.log(parimpar(6)) - pode ser outra forma de ser usada, retirando o let e só colocando dentro do console
*/

/*
//let res = soma(4,5)
function soma(n1,n2){
    return n1+n2
}
//console.log(res)
console.log(soma(4,5))

// com resultado indefinido
function som(n1,n2){ 
    return n1+n2
}
console.log(soma(4))

//não colocando um dos parâmetros e obtendo um resultado
function somar(n1=0, n2=0){
    return n1+n2
}
console.log(somar(3))


// o elemento soma que contem n1 e n2 vai ser substituido de acordo com que foi posto na chamada que é o console.log(soma(4,5)) ficando n1=4 e n2=5
//obs: caso um dos parâmetros não seja colocado vai da um resultado de NaN,, pois ele vai somar  o valor que um dos parâmetros possui com outro que não foi registrado.
//obs: caso queira que exiba um resultado de valor é colocar dentro do parâmetro n1 e n2 = 0 n1=0 e n2=0, assim, estabelece um valor que pode ser somado no caso.
*/

/*
// uma função dentro de uma variavel
var v = function(x){
    return x**2
}
console.log(v(10)) 
// o '10' aqui é um parâmetro que que substitui o x na função assim obtendo o resultado.
*/

/*
function factorial(n){
    fat=1
    for(c = n; c > 1; c--){
        fat = fat*c
        //fat*=c
    }
    return fat
}
console.log(factorial(6))
*/


/*
//recussividade - procurar aulas sobre o assunto
function factorial(n){
    if(n == 1){
        return 1
    }else{
        return n * factorial(n-1)
    }
}
console.log(factorial(7))
*/