// Exercício 1:
//  Crie uma função chamada calcularDesconto que receba um preço como parâmetro e retorne o valor com 10% de desconto.
// Exemplo: se entrar com 100, deve retornar 90

// function ehVazio(texto) {
// if (texto.length === 0) {
//  return true;
//  } else {
// return false;
// }
// }




// Exercício 2:
// Crie uma função chamada ehVazio que receba uma string e retorne true se ela estiver vazia ou false caso tenha conteúdo.

// Dica: use .length ou !valor.


// function ehVazio(texto) {
// return texto.length === 0;
// }
// console.log(ehVazio('agora'))





// Exercício 3:
// Crie uma função chamada formatarNome que receba uma string com o nome e retorne ela toda em maiúsculas, usando .toUpperCase().

// function formatarNome(texto) {
//   return texto.toUpperCase()
// }
// console.log(formatarNome(maria))





//  Exercício 4: 
// Crie uma função chamada ehMaiorDeIdade que receba uma idade e retorne true se for 18 ou mais, ou false se for menor de 18.

// Usar return direto com a condição.

// function ehMaiorDeIdade(idade) {
//   if (idade < 18) {
//     return "menor de idade";
//   } else {
//     return "maior de idade";
//   }
// }
// console.log(ehMaiorDeIdade(25)); // "maior de idade"


// function ehMaiorDeIdade(idade) {
//   return idade >= 18;
// }
// console.log(ehMaiorDeIdade(45)); // true






// Exercício 5:
// Crie uma função chamada calcularMedia que receba dois números como parâmetros e retorne a média aritmética entre eles.

// Depois, exiba o resultado no console.

// function calcularMedia(n1, n2) {
//   let media = (n1 + n2) / 2;
//   return media;
// }

// console.log(calcularMedia(2, 8)); // saída: 5





// Exercício 6:
// Crie uma função chamada mensagemStatus que receba uma nota (0 a 10) e use o operador ternário para retornar:

// "Aprovado" se a nota for maior ou igual a 6

// "Reprovado" caso contrário

// function mensagemStatus(nota) {
//   if (nota >= 6) {
//     return "Aprovado";
//   } else {
//     return "Reprovado";
//   }
// }
// console.log(mensagemStatus(8)); // Aprovado

// Conforme pedido no exercicio

// function mensagemStatus(nota) {
//   return nota >= 6 ? "Aprovado" : "Reprovado";
// }
// console.log(mensagemStatus(8)); // Aprovado







// Exercício 7:
// Crie uma função chamada formatoMoeda que receba um número e retorne ele formatado como moeda brasileira, usando .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).

// function formatoMoeda(valor) {
//   return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
// }

// console.log(formatoMoeda(200)); // R$ 200,00







// Exercício 8:
// Crie uma função chamada verificarInput que receba uma string e retorne true se ela estiver vazia ou false se tiver conteúdo.
// Mas desta vez, use !texto ao invés de .length.

// function verificarInput(texto) {
//   return !texto;
// }

// console.log(verificarInput(""));     // true (está vazio)
// console.log(verificarInput("abc"));  // false (tem conteúdo)







// Exercício 9:
// Crie uma função chamada verificarParOuImpar que receba um número e retorne:

// "Par" se o número for par

// "Ímpar" se o número for ímpar

// function verificarParOuImpar(n) {
//   return n % 2 == 0 ? "Par" : "Ímpar";
// }

// console.log(verificarParOuImpar(7)); // Ímpar








// Exercício 10:
// Crie uma função chamada mostrarResultadoFinal que receba uma nota como parâmetro.

// Se a nota for menor que 0 ou maior que 10, retorne "Nota inválida".

// Senão, use o operador ternário para retornar:

// "Aprovado" se a nota for maior ou igual a 6

// "Reprovado" caso contrário

// function mostrarResultadoFinal(nota) {
//   if (nota < 0 || nota > 10) {
//     return "Nota inválida";
//   } else {
//     return nota >= 6 ? "Aprovado" : "Reprovado";
//   }
// }

// console.log(mostrarResultadoFinal(9)); // Aprovado






// Exercício 11 (nova rodada):
// Crie uma função chamada calcularPorcentagem que receba dois números:

// valor
// porcentagem

// E retorne o valor resultante da porcentagem aplicada.
// Exemplo: calcularPorcentagem(200, 10) → deve retornar 20.

// function calcularPorcentagem(valor, porcentagem) {
//   return (porcentagem * valor) / 100;
// }

// console.log(calcularPorcentagem(200, 10)); // 20






// Exercício 12:
// Crie uma função chamada gritarTexto que receba uma string e retorne ela toda em maiúsculas.

// Se estiver vazia, retorne "Texto vazio!"

// Dica: use .toUpperCase() e if.

// function gritarTexto(texto){
//   if (texto.length === 0){
//     return "Texto vazio"
//   } else {
//     return texto.toUpperCase()
//   }
// }
// console.log(gritarTexto('auuuuuuuuu'))
// console.log(gritarTexto(''))






// Exercício 13:
// Crie uma função chamada tipoDoValor que receba qualquer valor como parâmetro e retorne uma string com o tipo do valor, usando typeof.

// function tipoDoValor (valor1){
//   return typeof valor1
// }
// console.log(tipoDoValor(false))







// Exercício 14:
// Crie uma função chamada classificarIdade que receba uma idade e retorne:

// "Criança" se for menor que 12

// "Adolescente" se for entre 12 e 17

// "Adulto" se for 18 ou mais

// Use if / else if / else.

// function classificarIdade (idade){
//   if (idade < 12){
//     return "criança"
//   } else if  (idade >= 12 && idade < 18) {
//     return "adolescente"
//   } else {
//     return "Adulto"
//   }
// }
// console.log(classificarIdade(18))






// Exercício 15:
// Crie uma função chamada arredondarParaCima que receba um número decimal e retorne ele arredondado para cima, usando Math.ceil().

// function arredondarParaCima(decimal){
//   return Math.ceil(decimal)
// }
// console.log(arredondarParaCima(5.1))







// Exercício 16:
// Crie uma função chamada formatarComDuasCasas que receba um número e retorne ele com duas casas decimais fixas, usando .toFixed(2).

// function formatarComDuasCasas(numero){
//   return numero.toFixed(2)
// }
// console.log(formatarComDuasCasas(87.1));








// Exercício 17:
// Crie uma função chamada somarComoMoeda que receba dois números, some os dois, e retorne o resultado formatado como moeda brasileira.

// function somarComoMoeda(n1, n2){
//   return (n1 + n2).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
// }
// console.log(somarComoMoeda(25, 50))







// Exercício 18:
// Crie uma função chamada quantidadeDeLetras que receba um texto como parâmetro e retorne o número de caracteres que ele possui.

// Use .length.

// function quantidadeDeLetras (texto){
//   return texto.length
// }
// console.log(quantidadeDeLetras('Otorrinolaringologista'))








// Exercício 19:
// Crie uma função chamada saoIguais que receba dois valores e retorne true se forem estritamente iguais (===), ou false caso contrário.

// function saoIguais (v1, v2){
//   return v1 === v2 
// }
// console.log(saoIguais(5, 5))
// console.log(saoIguais(1000, '1000'))









// Exercício 20:
// Crie uma função chamada exibirSaudacao que receba um nome e retorne a seguinte mensagem usando template string:

// "Olá, [nome]! Seja bem-vindo."

// Use crase e ${}.

// function exibirSaudacao (nome){
//   return `Olá, ${nome} ! Seja bem-vindo.`
// }
// console.log(exibirSaudacao('Gabriel'))




// Exercício 21 (Revisão):
// Crie uma função chamada dobroDoNumero que receba um número como parâmetro e retorne o dobro dele.

// function dobroDoNumero(numero) {
//   return numero * 2;
// } 

// console.log(dobroDoNumero(5)); // 10
// console.log(dobroDoNumero(10)); // 20






// Exercício 22 (Revisão):
// Crie uma função chamada nomeCompleto que receba dois parâmetros: nome e sobrenome.
// Ela deve retornar o nome completo usando template string.

// function nomeCompleto(nome, sobrenome) {
//   return `${nome} ${sobrenome}`;
// }   
// console.log(nomeCompleto("Gabriel", "Lima")); // Gabriel Lima
// console.log(nomeCompleto("Maria", "Silva")); // Maria Silva






// Exercício 23 (Revisão):
// Crie uma função chamada estaEntreZeroEDez que receba um número e retorne true se ele estiver entre 0 e 10 (inclusive), ou false se não estiver.

// function estaEntreZeroEDez(numero) {
//   return numero >= 0 && numero <= 10;
// }
// console.log(estaEntreZeroEDez(5)); // true
// console.log(estaEntreZeroEDez(15)); // false





// Exercício 24 (Revisão):
// Crie uma função chamada mostrarTipo que receba um valor qualquer e retorne o tipo desse valor usando typeof.

// function mostrarTipo(valor) {
//   return typeof valor;
// }
// console.log(mostrarTipo(5)); // number
// console.log(mostrarTipo("Olá")); // string  
// console.log(mostrarTipo(true)); // boolean
// console.log(mostrarTipo({})); // object







// Exercício 25 (Revisão):
// Crie uma função chamada verificarPar que receba um número e retorne:

// "Par" se for par

// "Ímpar" se for ímpar

// Use o operador % e return com if.


// function verificarPar(numero) {
//   if (numero % 2 === 0) {
//     return "Par";
//   } else {
//     return "Ímpar";
//   }
// }
// console.log(verificarPar(4)); // Par
// console.log(verificarPar(7)); // Ímpar

// function verificarPar(numero) {
//   return numero % 2 === 0 ? "Par" : "Ímpar";
// }