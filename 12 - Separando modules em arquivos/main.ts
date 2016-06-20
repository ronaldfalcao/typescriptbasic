///<reference path="Color.ts"/>

//Modo de acessar o módulo...
module ColorModule{
	var red = new Color();
	red.name = "Vermelho";
	red.code = "#FF1234";
	console.log(red.getColor());
}

//Outra forma de acessar o módulo...
var blue = new ColorModule.Color();

blue.name = "Azul";
blue.code = "#FF666";
console.log(blue);