////condicionales ?
//// if
/// if else
/// else if
//// switch

///sintaxis
const numero1 = 4;
const numero2 = 10;
const numero3 = 15;
if (numero1 < numero2) {
    console.log("Numero 1 menor que numero 2");
}

if (numero1 < numero2) {
    console.log("Numero 1 menor que numero 2");
} else {
    console.log("Numero 1 no mayor que numero 2");
}

if (numero1 < numero2) {
    console.log("Numero 1 menor que numero 2");
} else if(numero1 < numero3){
    console.log("Numero 1 menor que numero 3");
} else {
    console.log("Numero 1 mayor que numero 3");
}

if (numero1 < numero2) {
    console.log("Numero 1 menor que numero 2");
} else if(numero1 < numero3){
    console.log("Numero 1 menor que numero 3");
} else if(numero2 < numero3){
    console.log("Numero 2 menor que numero 3");
} else {
    console.log("Es el caso por defecto");
}

const operacion = 1;

switch (operacion) {
    case 1: 
        console.log("Es la operacion 1");
    break;
    case 2:
        console.log("Es la operacion 1");
    break;
    default:
        console.log("No hay operacion"); 
}

//// operadores o metodos de JS con arreglos

const miArray = ["banana", "pera", "mora", "uva", "pera"];

///operador filter
function filtrado(fruta) {
    return fruta === "pera"
}

const miArrayResultado = miArray.filter(
    filtrado
);

/// filter por letra a

function filtradoPorA(fruta) {
    const frutaArray = fruta.split("");
    return frutaArray.includes("a")
}

const miArrayResultadoPorA = miArray.filter(
    filtrado
);

///find

const elemento = miArray.find((fruta) => fruta === "banana")

///sort me permite organizar alfabeticamente los arries

const frutasAlfabeticamente = miArray.sort();

/// ejemplo de precios

const exitoMecato = [
    {nombre: "chocorramo", precio: 2000, categoria: "ponque", array: ["uva"]},
    {nombre: "gansito", precio: 1000, categoria: "ponque"},
    {nombre: "cocacola", precio: 4000, categoria: "bebida"},
    {nombre: "colombiana", precio: 5000, categoria: "bebida"}
];

const mecatoOrganizado = exitoMecato.sort(
    (a,b) => {
        return a.precio - b.precio
    }
);

///push no retorna nada, modifica el array actual
miArray.push("uchua");
//["banana", "pera", "mora", "uva", "pera", "uchua"]
///pop
miArray.pop();
//["banana", "pera", "mora", "uva", "pera"]
const miNuevoArray = deepClone(miArray);
/// operador spread
const miNuevoArray2 = [...miArray];

///some retorna un bool
const ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}


/// split

const parrafo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const palabras = parrafo.split(" ");

///cuantas palabras tiene mi parrafo?

// replace texto

const palabras2 = parrafo.replaceAll(" ", "x");

///objetos 

const miNuevoObjeto = {};

// Objetos vacios
const o1 = new Array();
const o2 = new Object(undefined);
const o3 = new Object(null);

// Objetos booleanos
const o = new Object(true);

// Objeto para un carro
const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
// { make: 'Ford',model: 'Mustang',year: 1969}
// Se peude reescribir como
const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
}; // { make: 'Ford',model: 'Mustang',year: 1969}

/// map
const marcas = ["gucci", "prada", "valentino", "ferragamo"];
for(marca in marcas) {
    console.log(marca);
}

for (let i= 0; i < marca.lenght; i++) {

}
//filter
/// devuelve un array con solo la marca gucci y valentino
const marcasMap = marcas.map((marca) => {
    if(marca==="gucci" || marca==="valentino") {
        return marca
    }
});








