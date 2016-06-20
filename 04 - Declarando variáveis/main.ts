//Escopo de variáveis...

var car: string = "Ferrari";//Variável Global

function getCar (value:string):string{
	var car = value; //Variável local...
	return car;
}

getCar("Fusca");

console.log(car);
console.log(getCar("Fusca"));

function testeScopo(){
	return car;
}

console.log(testeScopo());

//Escopo em funções
function testeA(){
	var a = 1;
	a = 2;
	var b = testeB();
	a = 3;
	return b;
	
	function testeB(){
		return a;
	}
	
}

//Erro na chamada, variável fora do escopo...
function f(value: boolean){
	let a = 100
	if (value){
		let b = a + 1;
		return b; //Funciona porque a variável é local...
	}

	//return b;// erro porque a variável b tem escopo local no IF
}

console.log(f(true));

console.log(testeA());