var agora = new Date() // para identifcar a hora do momento se usa o date
var hora = agora.getHours // esse comando é para mostrar a hora que está no sistema
console.log(`agora são ${hora}hrs`)
if (hora < 12){
    console.log('bom dia!')
}else if (hora <=18){
    console.log('boa tarde!')
}else{
    console.log('boa noite!')
}