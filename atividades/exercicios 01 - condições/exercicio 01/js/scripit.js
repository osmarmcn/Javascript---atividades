    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    //var hora = 17
function carregar(){
    msg.innerHTML= `A hora agora é  ${hora} horas`
    if ( hora >=0 && hora < 12){
        img.src ='imagens/manhã.jpg'
        document.body.style.backgroundColor = "lightsteelblue"
        document.body.style.color = "gray"
    }else if(hora > 12 && hora <18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = "rgb(170, 112, 40)"
    }else{
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = "dimgray"
    }

}


