function exibir(...letras: string[]): void {
    let rest_parameter = ""
    for (let letra of letras)
    rest_parameter += letra
    console.log(rest_parameter)
}
exibir("a", "b")
exibir("a", "b", "c")
exibir("a", "b", "c", "d")