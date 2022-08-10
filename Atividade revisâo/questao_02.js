const prompt = require('prompt-sync')();

const real = Number(prompt('Informe o valor em real: '))

const bitcoin = (real / 119083.20).toFixed(8)

console.log(`O valor em bitcoin é: ${bitcoin}`)