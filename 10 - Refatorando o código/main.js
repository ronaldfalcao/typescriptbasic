var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    ;
    Car.prototype.getCar = function () {
        console.log(this.name, this.color, this.power);
    };
    ;
    return Car;
}());
var fusca = new Car("Fusca", "Preto", 1.3);
fusca.getCar();
//# sourceMappingURL=main.js.map