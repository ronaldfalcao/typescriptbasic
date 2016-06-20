//Forma de declarar um módulo
var App;
(function (App) {
    var Car = (function () {
        function Car() {
        }
        return Car;
    }());
    App.Car = Car;
})(App || (App = {}));
//Outra forma de declarar um módulo
var App;
(function (App) {
    var variant = new App.Car();
    console.log(variant);
})(App || (App = {}));
var fusca = new App.Car();
console.log(fusca);
var App;
(function (App) {
    var CarB = (function () {
        function CarB() {
        }
        return CarB;
    }());
    var brasilia = new CarB();
    console.log(brasilia);
})(App || (App = {}));
//# sourceMappingURL=main.js.map