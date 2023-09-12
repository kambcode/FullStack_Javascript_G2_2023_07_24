////// Tipos de Datos
/// Number, String, null, undefined, object, symbol, boolean


//// Array tipo de objeto, lista, grupo, 

/// sintaxis

let miArray = []; ///array empty 
/// creacion
let testArray = new Array(); /// forma creacion objeto

let miArray1 = [1,2,3,4,5,6];
let miArray2 = ["blue","green","pink"];
let frutas = ["manzana", "pera", "lulo"];
let arrayMixto = ["cuarderno", 123, () => {console.log(1)}, [], []];
let titulos = ["<h1></h1>","<h1></h1>"];
let absurdas = [[],[],[]];

console.log(frutas[0]); //manzana
console.log(miArray1[5]); //6
console.log(frutas[2]); //lulo
console.log(frutas.length); //3
console.log(frutas[frutas.length-1]); //lulo
console.log(miArray2.length); //3
console.log(arrayMixto.length); //5

///operador push
///agregar un elemento nuevo al final del array
frutas.push("banana");
console.log(frutas); // ["manzana", "pera", "lulo","banana"]
frutas.push("banana"); 
console.log(frutas); // ["manzana", "pera", "lulo","banana", "banana"]
console.log(frutas.length); //5
///operador pop
/// eliminamos el ultimo elemento del arreglo
frutas.pop();
console.log(frutas); //["manzana", "pera", "lulo","banana"]
frutas.pop();
console.log(frutas); //["manzana", "pera", "lulo"]

/// redefinir un elemento
frutas[1]="mora";
console.log(frutas); //["manzana", "mora", "lulo"]

////agregar un elemento al inicio

frutas.unshift("fresa");
console.log(frutas); // ["fresa","manzana", "mora", "lulo"]

/// elimina el primer elemento
frutas.shift();
console.log(frutas); // ["manzana", "mora", "lulo"]

///? quiero agregar un elemento en el medio

///? quiero mostrar solo elementos con la letra a

///? como podria partir un array en dos, o en 3


//// Loops, ciclos

// sintaxis
while (condicion) {
   /// codigo a ejecutar
}
///Ejemplo

let estudiantes = ['Sultano', 'Perano', 'Mendano', 'Pedrito'];

let i = 0;

while(estudiantes[i] !== 'Mendano'){
    i ++;
}

console.log(i)

//// sultano i=0
////i=1  perano
///i=2 mendano
//2

let index = 0;

while (index<=(estudiantes.length-1)) {
    console.log(estudiantes[index]);
    index++;
}
