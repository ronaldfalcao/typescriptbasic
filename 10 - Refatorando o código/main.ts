interface ICar{
	name: string;
	color: string;
	power: number;
	getCar(): void;
}

class Car implements ICar{
	
	constructor( 
		public name: string,
		public color: string,
		public power: number
	){};

	getCar(): void{
		console.log(this.name, this.color, this.power);
	};

}

var fusca = new Car("Fusca", "Preto", 1.3);
fusca.getCar();