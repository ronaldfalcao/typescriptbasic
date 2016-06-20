//Forma de declarar um módulo
module App{

	export interface ICar{
		name: string;
	}

	export class Car {
		name: string;
		color: string;
	}

}

//Outra forma de declarar um módulo
module App{
	var variant = new Car();
	console.log(variant);
}

var fusca = new App.Car();
console.log(fusca);

module App{
	class CarB implements ICar{
		name: string;
		color: string;
	}

	var brasilia = new CarB();
	console.log(brasilia);
}