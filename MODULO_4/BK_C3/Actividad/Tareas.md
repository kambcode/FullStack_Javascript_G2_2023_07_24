# Tareas del modulo

Para este módulo no son necesarias pruebas, para validar el resultado final puedes comparar con el resultado del folder solucion.

## Tareas

Se requiere de un desarrollo en la Universidad Superior para gestionar las materias de un determinado pensum, se generan convocatorias para buscar quien realice el desarrollo y mostrando las soluciones de tareas anteriores te ganas la oportunidad. El API que se busca desarrollar por temas de seguridad es un API que genere estructuras de tickets para ingresar en un sistema el cual realiza las operaciones como tal, entonces, en base a la información existente dada se busca un API que le de un formato para el ticket en base a la operación deseada.

> Para la tarea se te piden una serie de operaciones en base al verbo HTTP de la petición sobre un mismo recurso (ruta) entonces debes investigar como se valida el verbo HTTP utilizado en una petición de manera que puedas ejecutar la instrucción esperada en cada caso.

-   Desarrollar un API utilizando el módulo HTTP del core de NodeJS que siga las siguientes especificaciones:

    -   Que escuche en el puerto 3003
    -   Que se desarrolle en base a la estructura sugerida en el archivo `index.js`
    -   Que tenga una ruta llamada /course con los metodos descritos a continuación

    -   Un POST que lo que hará es generar un tiquet para ingresar las materias existentes al sistema, por tanto debe retorar un `STRINGIFY` de un objeto con la siguiente estructura

        ```js
        {
            method: 'POST',
            registersToInsert: "ALL",
            count: 35,
            items: [
                {
                    name: "Trigonometría",
                    credits: 3,
                    description: "Very interesting class",
                    teacher: "Pepito Perez",
                    area: "Maths",
                }, //...
            ];
        }
        ```

    -   Un metodo GET que retorne un `STRINGIFY` de la siguiente estructura

        ```js
            {
                method: 'GET',
                filters: [],
                limit: 'NaN'
                count: 35,
                items: [
                    {
                        name: "Trigonometría",
                        credits: 3,
                        description: "Very interesting class",
                        area: "Maths",
                    }, //...
                ];
            }
        ```

    -   Un metodo DELETE que retorne un `STRINGIFY` con la siguiente estructura
        ```js
            {
                method: 'DELETE',
                trunc: true,
                limit: 'NaN'
                count: 35,
                items: [
                    {
                        name: "Trigonometría"
                    }, //...
                ];
            }
        ```
