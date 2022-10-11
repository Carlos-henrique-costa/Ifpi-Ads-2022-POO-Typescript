class saudacao{
    texto:string
    destinatario:string

    constructor(texto:string, destinatario:string){
        this.texto = texto
        this.destinatario = destinatario
    }

    obterSaudacao():string{
        return `${this.texto}, ${this.destinatario}`
    }
}

let s:saudacao = new saudacao("Bom dia", "João")
console.log(s.obterSaudacao())