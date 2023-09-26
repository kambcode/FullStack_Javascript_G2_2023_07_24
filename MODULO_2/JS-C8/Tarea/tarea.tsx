//// Palindromo
//// ana ana   "ana ana"
///// Crear una funcion que reciba una palabra o una frase y
/// retorne si la entrada es palindroma

///Input: "ana" OuTpUT: "Si la palabra/oracion es palindroma"
///Input: "ana y  ana" OuTpUT: "Si la palabra/oracion es palindroma"
///Input: "german" OuTpUT: "No la palabra/oracion no es palindroma"
///Input: "german german" OuTpUT: "No la palabra/oracion no es palindroma"

////Vamos a leer un poco acerca de recursividad
////Google Utiliza la recursividad para sus motores de busqueda
//// Ejemplos 1 1 2 3 5 8 Fibo

///Input: 5 OutPut: 8
///Input: 2 OutPut: 2
///Algoritmpo de recursividad

function fibo(position) {
    if(position===1) {
        return 1
    }
    fibo(position-1);
}


"ojo 132  ojo"
"ojo 131  ojo"

/// tambien es necesario que no se tengan en cuenta los espacio
/// quito todos los espacios
"ojo132ojo"   // replaceAll(" ", "")
//// convertir ese texto en array .split("") ["o","j","o","1"....]
/// arrays reverse voltear el array .reverse()
//// la palabra o oracion total sin espacios (texto) .join() "o,j,o,1,3,1"
//// quitar todas las comas .replaceAll(",", "") /// 
//// segunda palabra revertida 
"ojo231ojo" 
/// la palabra o oracion total sin espacios  invertida (texto)
/// hacer la comparacion entre las dos palabras

