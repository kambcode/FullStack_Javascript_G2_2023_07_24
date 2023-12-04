# Tareas del modulo

Las tares de los modulos son pensadas para profundizar en los temas expuestos e interiorizar mas el conocimiento.

Para este caso hay tareas con pruebas implementadas, para ejecutar las pruebas ejecuta el siguiente comando ubicado en la ruta de la carpeta `Actividad`

```bash
npm run test
```

Esta te traerá en consola los resultados, una vez hayas pasado todos los test, las tareas habrán finalizado, si se presenta algún test no satisfactorio la consola lo indicará.

Las soluciones estarán disponibles en el folder soluciones, intenta primero cumplir con los test y luego revisar la posible solución.

## Tareas

Tu tío tiene un negocio de renta de peliculas donde se realiza la renta de peliculas a clientes. La asociación de rentadores de peliculas exige para todos los que hagan parte del gremio que se maneje trazabilidad de las rentas realizadas por clientes, esto con fines de optimización de recomendaciones y de la generación de perfiles detallados sobre clientes para en general, dar un servicio de mucho mas valor para los clientes.

Entonces tu tío contrata una persona que le cobra muchisimo dinero por un desarrollo para llevar la trazabilida de las peliculas rentadas y de los clientes, este software genera registros con la siguiente estructura de las operaciones realizadas.

```js
{
    NomvreDelKliente: 'Perano Ramirez',
    FechaRentada: '2022-12-01'
    FechaEntregada: null,
    Pelicula: {
        Nombre: "Spiderman 2",
        Genero: "Acción",
        Tags: ['Aventura', 'Superheroes', 'Crimen']
    }
    DocumentoKlient_e: 12123131
}
```

Llega el día donde se hace la revisión periodica a los integrantes del gremio y el supervisor genera muchos comentarios sobre el desarrollo realizado por este desarrollador usurero a tu tío, los comentarios son los siguientes.

-   Los nombres de las llaves de los objetos deben ser en camel case
-   Las llaves de los objetos deben ser en inglés, según las buenas practicas,
-   Deben corregirse los errores ortograficos.
-   La información debe viajar cifrada en base 64

En base a estas correcciones tu tío pregunta el desarrollador si puede hacer los cambios, este responde afirmativamente pero dice que le costará mucho mas dinero por lo que tu decides ayudarle a tu tío.

Te sientas con el y en base a capacitaciones que le han dado te plantea los siguientes requerimientos.

-   Se tiene un archivo llamado registros.txt el cual contiene en formato texto todos los registros que se llevaban en la aplicación al momento de la revisión, por trazabilidad se requiere que estos se migren al nuevo formato y que se archiven. Al guardar los registros en texto plano y al ser una plataforma de facil acceso para todos los del gremio se estaban presentando problemas de privacidad por lo que se requiere de al momento de almacenar los datos en un nuevo formato se almacenen codificados en 64 bits. Genera una función que lea el archivo existente (`registros.txt`) les de el formato requerido a los datos y los almacene en un archivo llamado `registers.txt` cifrados en base 64.

    -   El formato final requerido para los registros es el siguiente:
    -   ```js
        //Movie Loan Data Structure
        {
            clientName: "Sultano Martinez",
            clientDocument: 12321321,
            loanDate: "2022-12-01",
            returnDate: null,
            movie: {
                title: "Spiderman 2",
                gender: "Action",
                tags: ['Aventura', 'Superheroes', 'Crimen']

            }
        }
        ```

    -   Realiza el desarrollo en el archivo `tarea1.js`, la función resultado debe retornar un `stringify` del arreglo resultado, es decir, la versión string del arreglo con los objetos con el nuevo formato.

-   Por los comentarios realizados por parte del supervisor del gremio a tu tío se le designan revisiones semanales para verificar el correcto funcionamiento del proceso, por tanto se requiere de una función para visualizar los registros, al estar codificados en base 64 se requerirá de una función para leerlos, genera una función la cual haga lectura del archivo `registers.txt` generado en el punto anterior y que retorne un archivo llamado `results.txt` con los registros sin codificación, así mismo, esta función debe retornar un `stringify` de los datos decodificados. Realiza el desarrollo en el archivo `tarea2.js`

-   Para verificar la persistencia de datos por supuesto se requiere que al generarse un nuevo registros se almacene en el archivo `register.txt`, genera una función que dado un objeto de tipo MovieLoan se agregue a los registros existentes. Realiza el desarrollo en el archivo `tarea3.js`, este debe retornar el `stringify` del arreglo resultado, es decir, el arreglo con el nuevo elemento adicionado
