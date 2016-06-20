///<reference path="src/IProduct.ts"/>
///<reference path="src/Product.ts"/>

module App{
	var prod = new Product("Caneca", "Caneca de cerâmica 300ml", 32.45);

	console.log(prod);
	document.getElementById("app").innerHTML = `
	<div id="produto">
		<b>Nome do Produto:</b> ${prod.name}<br/>
		<b>Descrição do produto:</b> ${prod.description}<br/>
		<b>Preço do produto:</b> R$ ${prod.value}<br/>
	</div>
	`;
}