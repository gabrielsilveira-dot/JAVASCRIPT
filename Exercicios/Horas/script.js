//Função procedimental do js para hors e minutos
var hora = new Date() .getHours ()
var minutos = new Date() .getMinutes()

//localizando o local do html e deixando uma variavel
var resultado = document.getElementById("resultado");


//saida de texto para o local de id resultado, no caso o paragrafo
resultado.textContent = `São ${hora} horas e ${minutos} minutos`

//variavel imagem pelo id imghora e fazendo condições
var imagem = document.getElementById("imghora")

  if (hora < 12) {
    imagem.src = "imagens/dia.jpg";
  } else if (hora >= 12 && hora < 18) {
    imagem.src = "imagens/tarde.jpg"; 
    document.body.style.backgroundColor= "#FCB674";
  } else {
    imagem.src = "imagens/noite.jpeg";
    document.body.style.backgroundColor= "#000A38";
  }