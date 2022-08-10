const prompt = require('prompt-sync')()

function main(){
    const numero1 = Number(prompt('Digite o primeiro numero: '))
    const numero2 = Number(prompt('Digite o segundo numero: '))
    const numero3 = Number(prompt('Digite o terceiro numero: '))

    let maior = numero1
    let menor = numero1

    if(numero2 > maior){
        maior = numero2
    }else if(numero2 < menor){
        menor = numero2
    }
    if (numero3 > maior){
        maior = numero3
    }else if(numero3 < menor){
        menor = numero3
    }

    console.log(`O maior numero é: ${maior} 'e o menor: ${menor}`)
}

main()