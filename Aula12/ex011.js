var idade = 19;

console.log(`Você tem ${idade} anos! Então; `);

if (idade < 16) {
  console.log("Você não pode votar");
} else if (idade < 18 || idade > 65) {
  console.log("Seu voto é opcional");
} else {
  console.log("Seu voto é obrigatorio");
}
