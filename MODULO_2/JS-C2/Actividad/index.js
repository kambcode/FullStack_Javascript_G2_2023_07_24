/// Variables

/// const, let, var

const mascota = "perro";
let nombre;
let mascota1 = "pajaro";

var mascota3 = "tigre";


/// no es fuertemente tipado
/// js no es compilado

mascota1 = 7;
nombre = "German";

{
    let name = "Daniel";
    var color = "blue"
}

alert(color);

//// funciones

//// definirla

function suma (sumando1, sumando2) {
    // todo el codigo
    let suma = sumando1 + sumando2;
    return suma
}

///llamarla
let resultado = suma(2,5);
alert("la suma de los numeros es " + resultado);

////Arrow Function

const miArrowFunction = (fecha) => {
    alert("Mi arrow function" + fecha);
};

miArrowFunction("12/09/2023");

/// Por expresion
const multiplicar = function(primerNumero, segundoNumero) {
    return primerNumero * segundoNumero;
}

//tipo de datos
//boolean
let miVariable = false;

/// number
let miNumber = 234234;

/// string
let miString = "mi texto";

/// null
let miNull = null;

/// Undefined
let miUnde = undefined;

/// Objeto

/// array, date, calendars, objetos typo strings
let miObjeto = {};
let myArray = ["azul", "blanco", "verde"];

/// symbol

/// operadores aritmeticos

let miSuma = 5 + 4; //+
let miResta = 5 - 4; //-
let miMulti = 5 * 4; //*
let miDiv = 5 / 4 ; // /
let miModul = 5 % 4 ; // % residuo 

/// operadores logicos

//and &&
// or ||

let miAnd = true && false;
let miOr = true || false;

