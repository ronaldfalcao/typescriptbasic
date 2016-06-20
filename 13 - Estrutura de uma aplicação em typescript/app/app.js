var App;
(function (App) {
    var Product = (function () {
        function Product(name, description, value) {
            this.name = name;
            this.description = description;
            this.value = value;
        }
        ;
        return Product;
    }());
    App.Product = Product;
})(App || (App = {}));
///<reference path="src/IProduct.ts"/>
///<reference path="src/Product.ts"/>
var App;
(function (App) {
    var prod = new App.Product("Caneca", "Caneca de cerâmica 300ml", 32.45);
    console.log(prod);
    document.getElementById("app").innerHTML = "\n\t<div id=\"produto\">\n\t\t<b>Nome do Produto:</b> " + prod.name + "<br/>\n\t\t<b>Descri\u00E7\u00E3o do produto:</b> " + prod.description + "<br/>\n\t\t<b>Pre\u00E7o do produto:</b> R$ " + prod.value + "<br/>\n\t</div>\n\t";
})(App || (App = {}));
