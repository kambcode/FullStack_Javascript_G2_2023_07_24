
/// Usando el codigo de ejemplo, interactua con el usario para realizar una operacion aritmetica como suma
/// resta, multiplicacion y division
//// me aparece un alert con el tipo de operacion 
/// agregue el modulo
//// agregue el valor absoluto del primer numero
///si es par el primer numero
/// si es mayoer que
/// si es menor que
//si es diferente que
/// si la operacion no existe  poner un alert que diga intenta de nuevo

/// hacer una comparacion interesante y publicarla en el canal de discord #modulo-2-javascript

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