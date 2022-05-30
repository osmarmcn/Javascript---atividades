let numero = document.getElementById('txtnumero')
let tabuada = document.getElementById('tabuada')
//const res = document.getElementById('res')
function conta(){
    if(numero.value.length == 0 || numero.value.length < 0){
        alert('digite um numero novamente')
    }else{
        var num = Number(numero.value)
        //res.innerHTML = `calculando....`
        tabuada.innerHTML = ''
        for(c = 1; c <=10; c++){
            const item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tabuada.appendChild(item)
        }
    }
}


/* pode criar uma tabuada usando o a tag paragrafo ou atraves de um select e option
com tag p :
for(c = 1; c <=10; c++){
    res.innerHTML += `<p>${num} x ${c} = ${num*c}</p>`
*/
// item.text - vai modidificar o que está dentro do optionque foi criado
// tabuada.appendchild - é para criar um elemento filho e msotrar o que foi descrito no item.text
// tabuada.innerhtml = '' serve para limpar quando for usar varias vezes sem deixar que a contagem continue de outra sequência de outro número. isso ocorre pois ele não ta recebendo nada.
/* pode usar o while para fazer o procedimento:
c = 1
while(c <= 10){
    const item = document.createElement('option')
    item.text = `${num} x ${c} = ${num*c}`
    tabuada.appendChild(item)
    c++
}
*/