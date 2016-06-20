interface ITypeFunc{
	(a: number, b: number): boolean;
}

var add: ITypeFunc;

add = function(varA: number, VarB: number): boolean {
	  	return true;
};

console.log(add(2, 3));

interface IColor{
	(codeColor: string, title?: string): { codeColor: string, title?: string };
}

var getColor: IColor;

getColor = function(codeColor: string, title?: string): { codeColor: string, title?: string }{
		   if (title){
			   return { codeColor: codeColor, title: title };
		   }	
		   else{
			   return { codeColor: codeColor };	
		   }
};

console.log(getColor("Vermelho"));
console.log(getColor("Verde", "green"));

//Interfaces para arrays...
interface IArrayTypes{
	[index: number]: string;
}

var a: IArrayTypes;

//a = [1, 2, 3, 4, 5, 6, 7];
a = ["A", "B", "C", "D", "E", "F"];

console.log(a);