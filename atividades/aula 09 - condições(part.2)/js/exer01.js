var idade = 70
if(idade < 16 ){
    console.log('seu voto não é obrigatório')
}else{
    if(idade >= 16 && idade < 18){
        console.log('seu voto é facutativo')
    }else{
        if(idade >= 60){
            console.log('seu voto é facultativo pela idade')
        }else{
            if(idade > 18){
                console.log('você é maior de idade, seu voto é obrigatório')
            }
        }
    }
}