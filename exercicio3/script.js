//Crie a const para a frase aqui
const frase= 'Jorge tem uma casa verde e com portão azul, com os dizeres: "\" "BOAS VINDAS, mas não deixe o gato sair" "\"'
console.log(frase)

//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const novaFrase = frase.replace("verde","rosa")
console.log(novaFrase)
 
const fraseFinal = frase.replace("azul","laranja")
console.log(fraseFinal)

//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

console.log(fraseFinal.includes("verde","laranja"))

//EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”

const frase2 = "mas não deixe o gato sair"
console.log(frase.replace(frase2,frase2.toUpperCase()))