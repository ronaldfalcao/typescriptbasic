interface IPeople{
	name: string;
	age: number;
}

function people(value:IPeople):void{
	console.log(value);
}

people({ name: "Ronald", age: 36 });

//Erro por ferir a implementação da interface
//people({ name: "Ronald", age: "36" });

function people2(name:string, age:number):IPeople{
	return { name: name, age: age };
}

console.log (people2("Ian", 35));


interface IColor{
	title?: string; // (?)Torna o atributo opcional...
	codeColor: string;
}

//Parâmetro title fica opcional aqui também...
function getColor (codeColor:string, title?:string):IColor{
	if (title){
		return {title:title, codeColor:codeColor}
	}
	else{
		return { codeColor: codeColor };
	}
}

console.log(getColor("Vermelho", "#XXXXXX"));
console.log(getColor("Preto"));