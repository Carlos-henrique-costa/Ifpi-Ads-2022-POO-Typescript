const prompt = require('prompt-sync')();

const mes = Number(prompt('Digite um numero do mes [entre 1 e 12]: '))

if(mes === 1){
    console.log('Janeiro, 31 dias')
}else if(mes === 2){
    console.log('Fevereiro, 28 dias')
}else if(mes === 3){
    console.log('março, 31 dias')
}else if(mes === 4){
    console.log('Abril, 30 dias')
}else if(mes === 5){
    console.log('Maio, 31 dias')
}else if(mes === 6){
    console.log('Junho, 30 dias')
}else if(mes === 7){
    console.log('Julho, 31 dias')
}else if(mes === 8){
    console.log('Agosto, 31 dias')
}else if(mes === 9){
    console.log('Setembro, 30 dias')
}else if(mes === 10){
    console.log('Outubro, 30 dias')
}else if(mes === 11){
    console.log('Novembro, 30 dias')
}else if(mes === 12){
    console.log('Dezembro, 31 dias')
}else {
    console.log('Numero do mês invalido')
}