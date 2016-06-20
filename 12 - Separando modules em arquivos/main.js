///<reference path="Color.ts"/>
//Modo de acessar o módulo...
var ColorModule;
(function (ColorModule) {
    var red = new ColorModule.Color();
    red.name = "Vermelho";
    red.code = "#FF1234";
    console.log(red.getColor());
})(ColorModule || (ColorModule = {}));
//Outra forma de acessar o módulo...
var blue = new ColorModule.Color();
blue.name = "Azul";
blue.code = "#FF666";
console.log(blue);
//# sourceMappingURL=main.js.map