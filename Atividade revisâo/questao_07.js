const prompt = require('prompt-sync')()

function main(){

    const n = 5
    var vetor = Array(n)

    for( let i = 0; i < n; i++){
        vetor[i] = Number(prompt(`Posição : ${i}: `))
    }
    
    console.log(`Vetor crescente: ${vetor.sort()}`)
    console.log(`Vetor decrescente: ${vetor.reverse()}`)

}
main()