/// Operador modulo %


let divison = 5 / 4 ; ///1.222
let modulo = 5 % 4; /// 1 residuo 1

let division1 = 4 / 2; ///2 residuo 0
let modulo1 = 4 % 2 /// 0 
let modulo2 = 5 % 2 /// 1

function par(number1) {
    let resultado = (number1 % 2 === 0) ? true : false
    return resultado
}

console.log(par(5));// false
console.log(par(4));// true


//// Comparatodres aritmeticos

// === 
// <
// >
// >=
// <=
// !==

///Comparador booleano o logico
// !
// &&
// ||


function mayorDeEdad(edad) {
    let resultado = edad > 18 ? true : false
    return resultado
}

function mayorEdad(edad) {
    return edad >= 18
}

function esIgualA50(numero) {
    let resultado = numero === 50 ? true : false;
    return resultado
}

function esDiferenteDe0(numero) {
    return numero !== 0
}

function menorEdad(edad) {
    return edad < 18
}

let femenino = false; 

function esMujer(femenino) {
    return femenino 
}

function esHombre(femenino) {
    return !femenino
}

let estaLloviendo = false;
let tengoParaguas = false;

function sacoParaguas(estaLloviendo, tengoParaguas) {
    return estaLloviendo && tengoParaguas
}

let paraguas = sacoParaguas(true, false);

//// Tengo una cuenta bancaria 
//// PERMISO DE RETIRO MI PAPA Y YO

function permisoParaRetiro(permisoPapa, permisoYo) {
    return permisoPapa || permisoYo
}

////Tengo dinero para retirar

function tengoDineroParaRetiro(ahorros,retiro) {
    return ahorros >= retiro
}

function logIn(usuarioIntroducido, usarioRegistrado) {
    return usuarioIntroducido === usarioRegistrado
}


let resultado = (edad > 18 )? true: false;

let valor_x_limitado_a_1000 = (x < 1000) ? x : 1000; /// condicional ternario

/// Sintaxis 

// if () {

// }
let pregunta = 'Está lloviendo?'
console.log(pregunta)
const estaLloviendo1 = false
let respuesta;

if (estaLloviendo1){
    respuesta = 'Si, está lloviendo, mejor llevas sombrilla'
}else{
    respuesta = 'No, no está lloviendo, puedes dejar la sombrilla'
}
let miEdad = 25;
let respuestaGerman;
if (miEdad>18) {
    respuestaGerman = "Si eres mayor de edad"
} else {
    respuestaGerman = "No eres mayor de edad"
}

let carga = 20; // 0 a 100
let permisoParaPrender; // true si es mayor a 30%

if(carga> 30) {
    permisoParaPrender = true
} else {
    permisoParaPrender = false
}

console.log(permisoParaPrender);

/// else if
let grado = 8;
let primaria; /// 1 hasta 5
let bachillerato; /// 5 hasta 11
let kinder; /// parbulos -kinder

if (grado > 5 && grado<11) {
    primaria = false;
    bachillerato = true;
    kinder = false;
} else if(grado > 1 && grado < 5) {
    primaria = true;
    bachillerato = false;
    kinder = false;
} else if(grado === 'kinder' && grado === "parbulos") {
    primaria = false;
    bachillerato = false;
    kinder = true;
} else {
    primaria = false;
    bachillerato = false;
    kinder = false;
}


///Switch case
/// SINTAXIS

// switch (opcion) {
//     case 1:
//         /// codigo a realizar
        //break;
//     case 2:
//     /// codigo a realizar
//break;
//     case 3:
//     /// codigo a realizar
//break;
//     case 4:
//     /// codigo a realizar
//break;
//     case 5:
//     /// codigo a realizar
//break;
// }


const opcion = "suma"
console.log('Indica tu opción, 1 para sumar, 2 para restar y 3 para multiplicar.')

function calculadora(opcion, primerNumero, segundoNumero) {
    switch(opcion){
        case "suma":
            return primerNumero + segundoNumero;
            break;
        case "resta":
            return primerNumero - segundoNumero;
            break;
        case "multi":
            return primerNumero * segundoNumero;
            break;
        case "div":
            return primerNumero / segundoNumero;
            break;
        default:
            console.log('Opcion invalida, por favor digita una opción posible')
            return null;
    }
}

calculadora(opcion, 2, 3) // 5


//// comparacion aritmetica igualdad == ===

let comparacion = 2 == '2'; //true
let comparacion2 = 2 == 2 // true //true
let comparacion3 = 2 === '2' //false //false //false
let comparacion4 = 2 === "two" //false //false
let comparacion5 = 2 == '2.0' //false //false

let comparacion6 = 2 !== '2' //true
let comparacion7 = 2 != '2' // false

let comparacion8 =  '22'+ 2 + 2 + '2' //2242 //22222

let comparacion9 = !4 /// false
let comparacion10 = 4 || 5 /// true