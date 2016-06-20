interface ICountString{
	valueTxt: string;
	countTxt(): number;
}

interface IPrintTxt{
	print(value: string): void;
}

class MyTxt implements ICountString, IPrintTxt{
	
	constructor(public valueTxt: string) { };
	
	countTxt():number{
		return this.valueTxt.length;
	};

	print(value:string):void{
		console.log("Texto: " + this.valueTxt);
	}
}

var t = new MyTxt("Bem vindo ao TypeScript");
t.print("");
console.log(t.countTxt());

//Herança de interfaces
interface ICarString{
	name: string;
	getCar(): string;
}

interface ICarColor{
	color: string;
	getColor(): string;
}

interface ICar extends ICarString, ICarColor{
	power: number;
	getPower(): number;
}

class Car implements ICarString{
	constructor(public name: string, public color: string, public power: number) { };
	
	getCar():string{
		return this.name;
	};

	getColor(): string { 
		return this.color
	};

	getPower(): number { 
		return this.power;
	};
}

var kombi = new Car("Kombi", "Bege", 15);
console.log("Nome do Carro: " + kombi.getCar() + " \nCor do carro: " + kombi.getColor() + " \nPotência (HP): " + kombi.getPower());