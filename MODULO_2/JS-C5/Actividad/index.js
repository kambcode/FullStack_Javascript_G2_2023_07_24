///// 7 tipos de datos, boolean, string, null, undefined, number, symbol, object
/// JS es un lenguaje de programacion orientado a objetos
/// tipo de loop while

//// Types object - tipos de objeto 
///->>>> Array listas
///->>>> Object 
///->>>Date
///-->String

///syntaxis
let array = [];

let miObjeto = {};
//// propiedades, o atributos
const wilmer = { 
        "edad": 7, 
        hoobie: "futbol",
        nombre: "Wilmer",
        apellido: "Rodriguez",
        colorFavorito: "blue", 
        imprimir: ()=> {console.log("Algo")}, 
        listaEstudios: ["Maestria","especializacion"],
        hermano: {nombre: "felipe", hermano: {nombre: "wilmer"}},
        getNombreCompleto: () => {
            return this.nombre + " " + this.apellido
        },
        setApellido: (apellido) => {
            this.apellido = apellido
        },
        elHobbieEs: () => { 
           return  "el hobbie favorito de "+ this.nombre + " es " + this.hoobie 
        } 
    };

console.log(wilmer.colorFavorito); //"blue"
console.log(wilmer["colorFavorito"]); //"blue"

wilmer.imprimir(); /// imprimo algo

console.log(wilmer.hermano.hermano.nombre); //wilmer

wilmer.hoobie = "basket";

console.log(wilmer.getNombreCompleto()); // wilmer rodriguez

wilmer.setApellido("Avila");

console.log(wilmer.apellido); ///Avila

console.timeLog(wilmer.elHobbieEs()); // el  hobbie favorito de wilmer es basket

/// Loops en objetos

//// for

const myObject = {
    name: "Perano",
    lastName: "Sultano",
    age: 40,
    nickName: "The Crack",
};

function logObject(object) {
    for (const key in object) {
        console.log(`Property Name: ${key} | Property Value: ${object[key]}`);
    }
}

logObject(myObject);
// Property Name: name | Property Value: Perano
// Property Name: lastName | Property Value: Sultano
// Property Name: age | Property Value: 40
// Property Name: nickName | Property Value: The Crack


/// Lista de peliculas
const lista = [
    {nombre: "titanic", duracion: "2:30h", casting: "dicaprio"},
    {nombre: "forest gump", duracion: "3:30h", casting: "TomHanks"},
    {nombre: "hombre araña", duracion: "4:30h", casting: "Deniro"}
];

///Loops de Arrays

/// for in
for(const element in lista ) {
    console.log(lista[element]);
}

/// for comun

/// sintaxis

for(let i = 0; i<10; i++) {
    // 10 veces
}

/// EJEMPLO

let numeros = [2, 7, 10, 8, 5, 3];
let pares = 0;
let impares = 0;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        pares ++;
    } else {
        impares ++;
    }
}

console.log(pares); // 3
console.log(impares); // 3

/// for of
const palabra = "Universo"; /// array
///palabra.lenght  /// 8

for (const letra of palabra) {
    console.log(`|${letra}|`);
}

///for each
const frase = ("La vida es bella").split("");

console.log(frase); /// ["l","a"," ",..]

frase.forEach(letra => console.log(letra))
