const prompt = require('prompt-sync')()

const numero1 = Number(prompt('Digite o primeiro numero: '))
const numero2 = Number(prompt('Digite o segundo numero: '))

for(let i = numero1 + 1; i < numero2; i++){
    let inteiros = i
    console.log(`${inteiros}`)
}