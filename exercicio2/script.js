const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const semEspaco = minhaString.trim()
// a) Remova o excesso de espaços no final da string;

console.log(semEspaco)

// b) exiba, em um console.log()a quantidade de caracteres da string, antes e depois da remoção dos espaços;
 console.log(minhaString.length) // 58
 console.log(semEspaco.length)

 //c) Substitua os traços `________` por “sticioso”.
 console.log(minhaString.replace("________" , "sticioso"))