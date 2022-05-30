var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
diaSem = 3
switch (diaSem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
        break
    default:
        console.log('erro!')


}



/* getday: ele vai mostrar o dia da semana ou melhor o dia de hoje, os dias da semana são contados como numeros e não como nós costumamos.
0 = domingo
1 = segunda
2 = terça 
3 = quarta
4 = quinta
5 = sexta
7 = sabado
*/