class Conta{
    numero:string
    saldo:number
 
    constructor(numero:string, saldo:number){
        this.numero = numero
        this.saldo = saldo
    }

    sacar(valor:number):void {
        this.saldo = this.saldo - valor
    }

    depositar(valor:number):void {
        this.saldo = this.saldo + valor
    }

    consultarSaldo():number {
        return this.saldo
    }

    transferir(contaDestino:Conta, valor:number) {
        this.sacar(valor)
        contaDestino.depositar(valor)
    }
}

let c1: Conta = new Conta("1",100);
let c2: Conta = new Conta("2",100);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);

c1.transferir(c2,50);
console.log(c1.consultarSaldo());//90
console.log(c2.consultarSaldo());//90
console.log(c3.consultarSaldo());//90

/*a) O valor será o mesmo para as 3 variaveis, pois estão todas apontando para o mesmo lugar.
    c3->c1->c2
  b) É isolado por um serviço de coleta de lixo que percorre a 
    memória, excluindo objetos sem referência.
*/