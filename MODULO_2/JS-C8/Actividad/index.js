/**
 * =======================
 * Write a function that takes an array consisting of atleast "id" as a field to an object structure.
 * 
 * Expected Result:
 * {
 *  "guid-1": {
 *       id: "guid-1",
 *       name: "Item 1",
 *       value: 1
 *   },
 *   "guid-2": {
 *       id: "guid-2",
 *       name: "Item 2",
 *       value: 2
 *   },
 * }
 */

const items = [
    {
        id: "guid-1",
        name: "Item 1",
        value: 1
    },
    {
        id: "guid-2",
        name: "Item 2",
        value: 2
    }
]

const miObject = {
      "guid-1": {
           id: "guid-1",
           name: "Item 1",
           value: 1
       },
       "guid-2": {
           id: "guid-2",
           name: "Item 2",
           value: 2
       },
       "german": 10
     };

/// crear objeto
const miNuevoObject = {"mauricioKey": {"germanKey": "Profe"}};
//// miNuevoObject["mauricioKey"] = {"germanKey": "Profe"}
//// miNuevoObject["mauricioKey"]["germanKey"] = "Profe"
tems.forEach((mauricio) => {
    console.log(mauricio);
    miNuevoObject[mauricio.id] = mauricio
})
console.log(miNuevoObject);

////Loops
items.forEach((item)=>{
   
})

///map retorna un array

items.map((item)=>{
    item
})

items.forEach((item)=>{
    item
})

///forEach no retorna nada
/// miNuevoArray obtener items
/// miNuevoArray1 obtener undefined


/////Clouseres entrevistas probablemente sale en un 60%

function inicializar() {
    const nombre = 'Perano';

    function mostrarNombre() {
        console.log(nombre);
    }

    mostrarNombre();
}

inicializar(); //Perano

///Callbacks

/// Es una funcion

function inicializar() {
    const nombre = 'Perano';
    mostrarNombre(nombre);
}

function mostrarNombre1(nombre) {
    console.log(nombre);
}

inicializar();


function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}

function conversar(accion) {
    const nombre = "Mendano";
    ///
    ///
    ///
    accion(nombre);
    return null;
}

function despedir(nombre) {
    console.log(`Chao, ${nombre}`);
}

conversar(despedir); //Hola, Mendano


/// cuando tenemos errores ejemplo de callback
const fs = require("fs");

const archivo = "archivo.txt";

const ErrorFirstCallback = (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log("Función ejecutada satisfactoriamente" + data);
};

fs.readFile(archivo, ErrorFirstCallback);

///callback
function miCallback(item, index, array) {
  return item
}

items.forEach(despedir)


///syncrono bloqueante
//tarea a tarea, linea a linea no tareas en paralelo

////asyncrono no bloqueante

///setTimeOuts, promesas, async functions

console.log("Inicio");

function dos() {
  setTimeout(function () {
    console.log("Dos");
  }, 1000);
}

function uno() {
  setTimeout(function () {
    console.log("Uno");
  }, 1000);
  dos();
  console.log("Tres");
}

uno(); // Inicio -> Tres -> Fin -> Uno -> Dos
console.log("Fin");