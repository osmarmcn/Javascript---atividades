var num = document.getElementById('textnum')
var lista = document.getElementById('textlista')
var res = document.getElementById('res')
var nume = Number(num.value)
var valores = []



function adicionar(){
    if(numero(nume) && list(nume, valores)){
        alert('ok')
        function numero(n){
            if(Number(n) >=1 && Number(n) <= 100){
                 return true
            }else{
                return false
            }
        }
        function list(n,l){
            if(l.indexOf(Number(n)) != -1){
                 return true
            }else{
                return false
                }
        }
    }else{

    }
}










/*let num = document.querySelector('textnum')
let lista = document.querySelector('textlista')
let res = document.querySelector('div#res')
let valores = []
const numero = parseInt(num.value)
function lNumero (n){
    if (n > 1 && n < 100){
        return true
    }else{
        return false
    }
}
function lList(n,l){
    if(l.indexOf(Number(n)) !=-1){
        return true
    }else{
        return false
    }
}
function add(){
    if (lNumero(numero) && lList(numero, valores)){
        valores.push(numero)
        let item = document.createElement('option')
        item.text = `o valor adcionado foi ${numero}`
        lista.appendChild(item)
    }else{
        alert('numero já digitado ou valores fora do parâmetro')
    }
}
*/



/* 1-  num(num.value) && list(lista.value) - vai analisar o numero que foi digitado se correspodne a um numero e se o numero caso ja digitado não se repita
*/
/* 2 - o array valores = [] (é vetor globoal) está vazio pois vai ser determinado os numeros que vão está entre 1 a 100, sendo que, o usuario que vai colocar os numeros dentro do array.
*/
/* 3 -  as functions num e list pode está dentro da function if ou fora com já está não tem problema é masi questão de ornaziação.
ex:
if(numero(number(num.value)) && list(number.value,valores)){
    function numero(n){
        if(number(n) >= 1 && number(n) <= 100){
            return true
        }else{
            return false
        }
    }   
    function list(n,l){
        if(l.indexOf(number(n)) != -1){
            return true 
        }else{
            return false
        }
    } 
}else{
    console.log('numero já encontrado na lsita ou repetido')
}
*/
/* 4 -  function num (n) - recebe só um parâmetro, pois vai so avaliar se o que foi digitado é um numero.
    function list(n,l) - como já foi verificado se 'num' é um numero aqui vai ver se o numero digitado está dentro da lista e não foi repitido
*/
/* 5 - o if(l.indexOf(number(n)) !=-1){
    retun true
} - indica que o numero que está na lsita ainda não foi digitado assim pode fazer parte do array
*/
/* 6 - após criar o elemento será descrito um texto modificativo 'item.text': aqui como é uma string não a necessidade de declarar number é opcional item.text = `o valor digitado é ${number(num.value)}` ou só '(num.value)'
para adcionar o elemento que no caso é a lista usa-se appendChild(item)
que é adcionar filho a lista que é o pai, asssim, cada numero que for digitado cria um option que foi criado com document.createElementy('option').
*/