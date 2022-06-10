var inumero = document.getElementById('txtinicio')
var fnumero = document.getElementById('txtfim')
var npasso = document.getElementById('txtpasso')
const res = document.getElementById('res')
function verificar(){
    var inicio = inumero.value 
    var fim = fnumero.value
    var passo = npasso.value 
    if (inicio.length ==0 || fim.length == 0 || passo.length == 0){
        alert('digite corretamente')
    }
    res.innerHTML = 'contando.... <BR>' 
    var i = Number(inicio)
    var f = Number(fim)
    var p = Number(passo)
    let c = i
    if( p <= 0){
        p=1
        alert('será desconsidero o valor zero e a contagem vais ser com 1 ')
    }
    if(i < f){
        while(c <= f){
        c += p
        //console.log(c)
        res.innerHTML += `${c}  \u{1F449} `
        }
    }else{
        for(c = i; c >= f; c-=p){
           // console.log(c)
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    
}


 /*no lugar do while pode ser usado o for:
 for(c = i; c <= f; c+=p){
     res.innerHTML += `${c} `
 }
 */
// para que seja feita contagem  as variaveis inicio,fim e passo tem que ser declarados como numeros ex: var i = number(inicio), como foi realziado
// `${c} `tem que da um espaço para não deixar os numeros juntos
/* no if pode declarar a variavel e value dentro da função ex:
if (inicio.value.length ==0 || fim.value.length == 0 || passo.value.length == 0)
*/
// O codigo \u - só funciona entre crase
// caso o passo seja 0 vai ser conseidero a contagem como 1


