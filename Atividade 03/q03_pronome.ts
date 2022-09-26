function texto(nome: string, pronome: string): void{
    if(pronome === "ele"){
        console.log(`Olá Sr. ${nome}`)
    }else if(pronome === "ela"){
        console.log(`Olá Sra. ${nome}`)
    }else{
        console.log(`Olá Sr. ${nome}`)
    }
}
texto("Henrique", "ele")
texto("Maria", "ela")
texto("Maria", "")