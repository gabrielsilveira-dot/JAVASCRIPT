function verificar() {
    //pagar o ano atual
    var dataatual = new Date().getFullYear();
    //pegar o valor do campo do input no html
    var datanascimento = document.getElementById("datadenascimento").value;
    //pegar o valor do compa input radio no HTML (masculino ou Feminino)
    var sexo = document.getElementsByName("sexo");
    // localizando em uma variavel o local do paragrafo no HTML onde será mostrado o resultado)
    var resultado = document.getElementById("resultado");
    // validação se foi digitado algo no campo ou se o digitado confere com um ano menor que o atual
    if (datanascimento > dataatual || datanascimento.length == 0) {
        window.alert("Digite novamente");
        // se passou farei a operação, sendo a variavel idade o resultado de saida
    } else {
        var idade = dataatual - Number(datanascimento);
        // GPT ajudou aqui, checou se sexo !sexo [0] ou [1] esta marcado, se não estiver vai dar um alert
        if (!sexo[0].checked && !sexo[1].checked) {
            window.alert("Por favor, selecione o sexo antes de continuar.");
            return;
        }        
        //após o resultado, verifico qual input de sexo foi clicado
        if (sexo[0].checked) {// .checked verifica se esta com valor nele, se tiver mostra o resukltado
            resultado.textContent = `Sem levar em consideração o mes e o dia vc tem ${idade} anos`;
            imagem.src = "imagens/homem.jpeg"; // imagem homem
        } else { // se não tiver no primeiro como só tenho 2 estara nesse
            resultado.innerHTML = `Sem levar em consideração o mes e o dia vc tem <strong>${idade}</strong> anos`;
            imagem.src = "imagens/mulher.jpg";// imagem mulher
        }
    }
}
