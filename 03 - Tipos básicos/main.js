//Declarando variáveis
//Boleanos
var teste = false;
//Numéricos
var id = 2;
var decimal = 5.4;
var hexadecimal = 0xf00d;
var binary = 10;
var octal = 484;
//Strings
var name = "Teste com TypeScript";
var cidade = 'Campinas';
var truncado = " Texto " + name + " \n<br/>" + cidade + "\n";
//Arrays
var cores = ["Amarelo", "Vermelho", "Azul", "Laranja", "Branco"];
var fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];
//Enum
var estadoCivil;
(function (estadoCivil) {
    estadoCivil[estadoCivil["Solteiro"] = 0] = "Solteiro";
    estadoCivil[estadoCivil["Casado"] = 1] = "Casado";
    estadoCivil[estadoCivil["Divorciado"] = 2] = "Divorciado";
    estadoCivil[estadoCivil["Viúvo"] = 3] = "Viúvo";
})(estadoCivil || (estadoCivil = {}));
;
var timesFutebol;
(function (timesFutebol) {
    timesFutebol[timesFutebol["Portuguesa"] = 1] = "Portuguesa";
    timesFutebol[timesFutebol["Santos"] = 2] = "Santos";
    timesFutebol[timesFutebol["Coritiba"] = 3] = "Coritiba";
    timesFutebol[timesFutebol["Fluminense"] = 4] = "Fluminense";
})(timesFutebol || (timesFutebol = {}));
;
console.log(estadoCivil.Solteiro);
console.log(timesFutebol.Portuguesa);
console.log(estadoCivil[2]);
//Any (Variável dinâmica como o padrão do JS)
var list = 23;
list = "String de teste!";
console.log(list);
//
function printMenssage(message) {
    console.log("Mensagem: " + message);
}
printMenssage("Mensagem printada!!!!!");
//# sourceMappingURL=main.js.map