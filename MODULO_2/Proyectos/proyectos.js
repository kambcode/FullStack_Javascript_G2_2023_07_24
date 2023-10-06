//// Juliana
// const triquiBase = [];
// const posiciones = 9;
// let index = 1;

// while (index <= posiciones) {
//     const casilla =  document.getElementById(index);
//     triquiBase.push(casilla);
//     casilla.addEventListener('click',escogerPosicionX);
//     index++;
// }

// console.log(triquiBase);
// /// ESCRIBIR MI ELEMENTO
// triquiBase[6].innerHTML = "O";


// //// GENERAR UN CLICK PARA PONER X de jugador

// function escogerPosicionX(event) {
//     ///Validacion si el elemento ya tiene una x
//     const id = event.target.id;

//     if(triquiBase[id-1].innerHTML !== "X" && triquiBase[id-1].innerHTML !== "O") {
//         triquiBase[id-1].innerHTML = "X";
//     }
//     checkeo();
// }

// function llenarPosicionO() {
//     /// la posicion 2 3 6 9
//     //// Math.Random de esos cuatro numeros (0-1) * 4, 
//     //// poner la letra O
//     checkeo()
// }

// function checkeo() {
//     /// filas
//     /// columnas
//     /// chequeo de diagonal

// }

//// Mauricio
const opciones = ["piedra", "papel", "tijera"];
function jugar(event) {
    console.log("Elegido ===>",event);
    const azar = Math.floor(Math.random() * 3);
    console.log("Maquina ===>>", opciones[azar]);
}

/// Daniel Snake
/// Jose
/// Edison Ahorcado

