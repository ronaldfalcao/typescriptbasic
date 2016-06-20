//Escopo de variáveis...
var car = "Ferrari"; //Variável Global
function getCar(value) {
    var car = value; //Variável local...
    return car;
}
getCar("Fusca");
console.log(car);
console.log(getCar("Fusca"));
function testeScopo() {
    return car;
}
console.log(testeScopo());
//Escopo em funções
function testeA() {
    var a = 1;
    a = 2;
    var b = testeB();
    a = 3;
    return b;
    function testeB() {
        return a;
    }
}
//Erro na chamada, variável fora do escopo...
function f(value) {
    var a = 100;
    if (value) {
        var b = a + 1;
        return b; //Funciona porque a variável é local...
    }
    //return b;// erro porque a variável b tem escopo local no IF
}
console.log(f(true));
console.log(testeA());
//# sourceMappingURL=main.js.map