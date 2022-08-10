const prompt = require('prompt-sync')()

function main(){
  console.log("***** Insira -1 para pausar *****\n")
    let numero = Number(prompt('Digite um numero: '))
    let quantidade = 0;
    let soma = 0;
    const pausa = -1;
    while(numero !== pausa){
      soma += numero
      quantidade++
      numero = Number(prompt('Digite um numero: '))
    }
    console.log(`A soma é ${soma}`)
    console.log(`A média é ${soma/quantidade}`)
       
}

main()