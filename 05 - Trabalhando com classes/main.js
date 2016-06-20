var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    ;
    Car.prototype.printCar = function () {
        console.log(this.name, this.color, this.power);
    };
    return Car;
}());
var fusca = new Car("Fusca", "Preto", 10);
fusca.printCar();
var CarB = (function () {
    function CarB(name, color, power) {
        this._name = name;
        this._color = color;
        this._power = power;
        CarB.list.push(name);
    }
    ;
    Object.defineProperty(CarB.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    //Outra solução para o erro ES5, criar funções get e set...
    CarB.prototype.setName = function (value) {
        this._name = value;
    };
    CarB.prototype.getName = function () {
        return this._name;
    };
    CarB.list = [];
    return CarB;
}());
var brasilia = new CarB("Brasilia", "Amarela", 11);
//brasilia.name = "Fiat 147";//Tenta setar propriedade privada
console.log(brasilia);
console.log(CarB.list);
var variant = new CarB("Variant", "Azul Calcinha", 8);
console.log(CarB.list);
variant.name = "Variant 1.0";
console.log(variant.name);
//# sourceMappingURL=main.js.map