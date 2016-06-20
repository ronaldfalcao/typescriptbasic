//Declarando variáveis

//Boleanos
var teste: boolean = false;

//Numéricos
var id: number = 2;
var decimal: number = 5.4;
var hexadecimal: number = 0xf00d;
var binary: number = 0b1010;
var octal: number = 0o744;

//Strings
var name: string = "Teste com TypeScript";
var cidade: string = 'Campinas';
var truncado: string = ` Texto ${name} 
<br/>${cidade}
`;

//Arrays
var cores: string[] = ["Amarelo", "Vermelho", "Azul", "Laranja", "Branco"];
var fibonacci: Array<number> = [1, 1, 2, 3, 5, 8, 13, 21];

//Enum
enum estadoCivil { Solteiro, Casado, Divorciado, Viúvo };
enum timesFutebol { Portuguesa = 1, Santos, Coritiba, Fluminense};
console.log(estadoCivil.Solteiro);
console.log(timesFutebol.Portuguesa);
console.log(estadoCivil[2]);

//Any (Variável dinâmica como o padrão do JS)
var list: any = 23;
list = "String de teste!";
console.log(list);

//
function printMenssage(message: string):void{
	console.log("Mensagem: " + message);
}

printMenssage("Mensagem printada!!!!!");