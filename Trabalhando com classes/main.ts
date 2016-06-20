class Car{
	constructor(
		public name:string, 
		public color:string, 
		public power:number
	) 
	{ };

	printCar():void{
		console.log(this.name, this.color, this.power);
	}
}

var fusca = new Car("Fusca", "Preto", 10);

fusca.printCar();

class CarB{
	private _name: string;
	private _color: string;
	private _power: number;
	public static list: Array<string> = [];

	constructor(name: string, color: string, power: number) { 
		this._name = name;
		this._color = color;
		this._power = power;
		CarB.list.push(name);
		
	};

	get name():string{
		return this._name;
	}

	set name(value:string){
		this._name = value;
	}

	//Outra solução para o erro ES5, criar funções get e set...

	setName (value:string){
		this._name = value;
	}

	getName():string{
		return this._name;
	}
}

var brasilia = new CarB("Brasilia", "Amarela", 11);

//brasilia.name = "Fiat 147";//Tenta setar propriedade privada

console.log(brasilia);

console.log(CarB.list);

var variant = new CarB("Variant", "Azul Calcinha", 8);
console.log(CarB.list);

variant.name = "Variant 1.0";
console.log(variant.name);