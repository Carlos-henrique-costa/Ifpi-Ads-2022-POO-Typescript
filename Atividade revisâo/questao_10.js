const prompt = require('prompt-sync')()

function main(){

    const milisegundos = Number(prompt('Digite a quantidade de milisegundos: '))

    const tempo = calcular_tempo(milisegundos)

    console.log(`Tempo: ${tempo}`)
}

function calcular_tempo(milisegundos){
    const hora = parseInt(milisegundos / 3.6e+6)
    const minuto = parseInt(milisegundos / 60000)
    const segundo = milisegundos / 1000
    const tempo = (`${hora}:${minuto}:${segundo}`)

    return tempo
}

main()