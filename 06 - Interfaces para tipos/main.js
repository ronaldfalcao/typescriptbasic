function people(value) {
    console.log(value);
}
people({ name: "Ronald", age: 36 });
//Erro por ferir a implementação da interface
//people({ name: "Ronald", age: "36" });
function people2(name, age) {
    return { name: name, age: age };
}
console.log(people2("Ian", 35));
//Parâmetro title fica opcional aqui também...
function getColor(codeColor, title) {
    if (title) {
        return { title: title, codeColor: codeColor };
    }
    else {
        return { codeColor: codeColor };
    }
}
console.log(getColor("Vermelho", "#XXXXXX"));
console.log(getColor("Preto"));
//# sourceMappingURL=main.js.map