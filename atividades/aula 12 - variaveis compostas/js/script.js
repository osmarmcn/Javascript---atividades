/*let num = [
    1,
    2,
    3,
    7, 
    9,
    12, 
    15
]
console.log(num)
*/

/*let n = [1,3,6,8,9]
console.log(n)
*/

/*let num = [2, 4, 6, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`para apresentar o numero da casa '3' é ${num[3]}`)
console.log(`a quantidade de elementos dentro do array é ${num.length}`)
*/

// caso coloque o push abaixo do sort ele vai organizar a ordem primeiro do array e depois vai acrescentar o valor (ficar atento a ordem de como è acrescido os comandos)

/*let valores = [1,2,4,6,3,9,8]
for(let posicao = 0;posicao <= valores.length; posicao++ ){
    console.log(`a posição ${posicao} possuindo valores de ${valores[posicao]}`)
    */


    //posicao - é o indice em que vai comceçcar a contagem 
    // valores.length- é cumpriemnto do array que vai até determinado valor 
    //posicao++ - é contador 
    //valores[posicao] - indica a posiÇão dos valores de acordo com a contagem que passa por dentro do array
    // posso colocar valores.sort()[posicao] para deixar em ordem 


//let valores = [2,3,5,6,8,4]
//valores.sort()
//for(posicao in valores ){
    //console.log(`a posição ${posicao} possui o valor ${valores[posicao]}`)
     /*esse modo é o mais simplificado, no qual não necessita de acrescentar contador e declarar com length */
//}

let score = [
    2,
    3,
    8,
    90,
    12,
    56
]
score.sort(orndenar)
function orndenar(a,b){
    return a - b
}
//score.sort((a,b) => a - b)
console.log(score)


