function volta(){
  var data = new Date()
  var ano = data.getFullYear() 
  var fano = document.getElementById('txtano')
  var res = document.querySelector('#res')
 if (fano.value.length ==0 || Number(fano.value > ano )){
     alert('[erro] verifique se foi digitado o ano corretamente')
 }else{
     var fsexo = document.getElementsByName('sexo')
     var idade = ano - Number(fano.value)
     var genero = ''
     var img = document.createElement('img')
    img.setAttribute('id','foto') 
     if(fsexo[0].checked){ 
         genero = 'masculino'
         if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src','imagem/bebehomem.png')
        }else if(idade > 10 && idade < 18){
            //adolescente
            img.setAttribute('src','imagem/jovemhomem.png' )
        }else if(idade >= 18 && idade < 60){
            //adulto
            img.setAttribute('src', 'imagem/adultohomem.png')
        }else{
            //idoso
            img.setAttribute('src','imagem/homemvelho.png' )
        }
     }else if(fsexo[1].checked){
         genero = 'feminino'
         if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src','imagem/bebemulher.png')
        }else if(idade > 10 && idade < 18){
            //adolescente
            img.setAttribute('src','imagem/jovemmulher.png' )
        }else if(idade >= 18 && idade < 60){
            //adulto
            img.setAttribute('src', 'imagem/adultamulher.png')
        }else{
            //idoso
            img.setAttribute('src','imagem/mulhervelha.png' )
        }
        }
        res.innerHTML =`tenho uma pessoa de genero ${genero}, com idade ${idade} anos `
        res.appendChild(img)
    }    
}
// getfullyears - full é para pegar os digitos do ano e não os dois ultimos

//fano.value.length == 0 - se ano for zero vai da erro ou fano for maior que ano atual vai da erro  

//explicando o uso do number no if - number é para converter o numero de string para interiro, contudo js fez isso sem usar o number

//variavel genero vazia -  a variavel genero fica vazia, pois vai caber uma escolha qual vai ser masc ou fem

//selecionando o sexo -  [0] determina no caso que é genero masc [1] fem, pois para identificar usa 0 ate numero de opções que tiver sendo o zero o inicio da contagem.

// pode criar um img pelo html ou também pode ser criado pelo js:
//vai ser criado uma tag img atraves - document.createElement('img') 'aqui cria uma tag html' pode ser criado até uma id atraves de outra variavel ou da mesmma que no caso é a img com esse comando  setAttribute('id',foto) cria a id e o elemento
//para aparecer a imagem indicando a idade da pessoa é necessário que use o res.appendChild para adicionar um elemento abaixo do texto que o innerHtml.