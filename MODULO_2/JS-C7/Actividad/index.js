///Clousures
{
    var apellido = "melano";
    let edad = 10;
}

///let ,const

function inicializar() {
    const nombre = 'Perano';

    function mostrarNombre() {
        console.log(nombre, apellido);
    }

    mostrarNombre();
}

inicializar(); //Perano
console.log(nombre);

    ////clousure
    {
        const global = 10;
    }

    function sum(a) {
        return function (b) {
            return function (c) {
                    return function (d) {
                        return a + b + c + d + global;
                    };
                };
        };
    }
sum(5)(5)(4)(4)
///28
///error

///felipe no, no
//// mayerli si
//// edison si
