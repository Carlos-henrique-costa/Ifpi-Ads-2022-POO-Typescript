const prompt = require('prompt-sync')();

const numero = Number(prompt('Digite um numero: '))
const antecessor = parseInt((numero + numero) / 2)
const sucessor = parseInt((numero))

console.log(`o antececor é: ${antecessor} e o sucessor eh: ${sucessor + 1}`)