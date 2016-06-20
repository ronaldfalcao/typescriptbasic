var MyTxt = (function () {
    function MyTxt(valueTxt) {
        this.valueTxt = valueTxt;
    }
    ;
    MyTxt.prototype.countTxt = function () {
        return this.valueTxt.length;
    };
    ;
    MyTxt.prototype.print = function (value) {
        console.log("Texto: " + this.valueTxt);
    };
    return MyTxt;
}());
var t = new MyTxt("Bem vindo ao TypeScript");
t.print("");
console.log(t.countTxt());
var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    ;
    Car.prototype.getCar = function () {
        return this.name;
    };
    ;
    Car.prototype.getColor = function () {
        return this.color;
    };
    ;
    Car.prototype.getPower = function () {
        return this.power;
    };
    ;
    return Car;
}());
var kombi = new Car("Kombi", "Bege", 15);
console.log("Nome do Carro: " + kombi.getCar() + " \nCor do carro: " + kombi.getColor() + " \nPotência (HP): " + kombi.getPower());
//# sourceMappingURL=main.js.map