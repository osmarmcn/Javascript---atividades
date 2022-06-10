/*let array = ['string',1, true]
console.log(array)
*/

//pode ter um array dentro de outro array
let array = ['string',1, true, ['array1'],['array2']]
console.log(array[4])

// manipular um array

/*
forEach() - ele executa uma função para cada indece de um array
push() - adciona um item no final do array
pop() - remove um item no final do array
shift() - remove um item no inicio do array
unshift() - adiciona um item no incio do array
indexOf() - retorna um indice de um valor
splice() - remove ou substitui um item pelo indice
slice() - retorna uma parte do array existente
*/
array.forEach(function(item,indice){
    console.log(item,indice)
})
array.push('novo item')
console.log(array)

array.pop()
console.log(array)

array.shift()
console.log(array)

array.unshift('novo item')
console.log(array)

console.log(array.indexOf())

array.splice(0,2)
console.log(array) // apagou os valores de de 0 a 2 deixando so os outros

let novo = array.slice(0,2)
console.log(novo)



let objeto = {
    String: 'string',
    number: 1,
    boleano: true,
    array: ['array']

}
console.log(objeto)
console.log(objeto.array)
console.log(objeto.String)


//desestruturação do objeto
var array1 = objeto.array
console.log(array1)

var string = objeto.String
console.log(string)

var numero = objeto.number
console.log(numero)

var {numero,boleano} = objeto // aqui vai selcionar dentro objeto o que deseja pegar no caso foi  o numero e boleano
console.log(numero, boleano)