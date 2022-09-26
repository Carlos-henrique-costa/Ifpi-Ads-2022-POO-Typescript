function exibir() {
    var letras = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        letras[_i] = arguments[_i];
    }
    var soma = "";
    for (var _a = 0, letras_1 = letras; _a < letras_1.length; _a++) {
        var numero = letras_1[_a];
        soma += numero;
    }
    console.log(soma);
}
exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");
