function getHello(name:String){
	return "Hello " + name;
}

var name = "Ronald B.F.";

//Se tirar o comentário dá erro porque 42 não é uma string.
//var name = 42;

document.body.innerHTML = getHello(name);

interface iCar{
	brand: string;
	name: string;
	power: number;
}

class Car {
	brand:string;
	name:string;
	power:number;
}

var getCar = function (car:iCar){
	console.log(car.brand, car.name, car.power);
};

var Camaro = new Car();
Camaro.brand = "Chevrolet";
Camaro.name = "Camaro";
Camaro.power = 45;

getCar(Camaro);