const carros = [
    {
      "title": "Dune",
      "author": "Frank Herbert",
      "year": "1965",
      "price": 10,
      "categoria": "terror",
      "promo": true,
      "carrosParecidos": {"categorias":{"nombre": "deportivo"}}
    },
    {
      "title": "The Left Hand of Darkness",
      "author": "Ursula K. Le Guin",
      "year": "1969",
      "price": 20,
      "categoria": "suspenso",
      "promo": true
    },
    {
        "title": "the man in the sea",
        "author": "Alan Poe",
        "year": "1969",
        "price": 40,
        "categoria": "ficcion",
        "promo": false
    }
];

////1. DUPLICACION DEL ARRAY Y LO IMPRIMAN > Wil
////2. Eliminar los repetidos
///// Expliocar librerias externas
//// Utilizar una libreria, lodash comparacion de objetos deep
////3. Sort de los elementos por precio

//// sort debe retornar en la funcion interna negativo, positivo 0 
const newArray = carros.concat(carros).sort((a,b) => (b.title > a.title)? 1 : -1)
//// sort por precio
const newArray2 = carros.concat(carros).sort((a,b) => a.price -b.price)
////4. Organizar alfabeticamente por titulo
////a.localeCompare(b)
///mayor a menor
///menor a mayor ?
const newArray1 = carros.concat(carros).sort((a,b) => b.title.localeCompare(a.title))
////5. Vamos a crear un array con solo los carros de promocion, 
// y ahora vamos a cambiar ese precio con 30% de descuento

const miEjercicio = carros.map((miCarro) => {
  if(miCarro.promo) {
    const{price, year, ...rest} = miCarro;
    return { "price": price * 0.7, 'year': '1968', ...rest}
  }
});

// if({} === {}) {

// }
// 1===1 //true
// 1===2 //false
// "" === "" // true

// ({} === {}) /// true Jose, /// true wil ///true daniel ///juliana true /// mauricio true

//// false

const carrosNuevos = carros; /// no es aconsejable 

const carrosNuevos1 = lodash.deepcopy(carros); /// copia profunda de objetos

const carrosNuevos2 = {...carros}

///[1,2,3] === [1,2,3] ///false
