# Conceptos avanzados Javascript

En este módulo daremos el primer vistazo a uno de los conceptos principales de Javascript que lo hacen tan usado para desarrollos de alta concurrencia, el `asincronismo`.

Miraremos conceptos sobre los que están construidas varias de las herramientas que utilizaremos para darle manejo al amplio abanico de posibilidades que nos da el asincronismo y sobre todo vamos a ir dando pistas de cuáles son las maneras de manejar las distintas herramientas con buenas prácticas, de manera que nuestros desarrollos siempre cumplan con los más altos estándares de calidad en cuanto a construcción.

## Closures

Con la implementación de `let` y `const` para declarar nuestras variables se dio lugar oficialmente por primera vez al scope en bloque en Javascript, recordamos que este concepto de scope lo miramos en el momento que aprendimos sobre las distintas maneras de definir tanto funciones como variables en nuestros desarrollos, los scopes son un tema que toma un alta relevancia en Javascrip por lo que se tuvo en cuenta y se manejó de manera que las `factory functions` por ejemplo fueran soportadas, este es un concepto que veremos a profundidad más adelante, por ahora entender que es básicamente generar un modelo replicable para un funcionamiento de una función y que cambie según parámetros según necesitemos, una especie de generador de funciones con un funcionamiento parecido.

Este es uno de los casos de uso de los closures, los closures se refieren a cuando una función interna tiene acceso al scope de una función externa. Puede ser un poco dificil de entender, mirémoslo con un ejemplo

```
function inicializar() {
    const nombre = 'Perano';

    function mostrarNombre() {
        console.log(nombre);
    }

    mostrarNombre();
}

inicializar(); //Perano
```

Tenemos una función donde se declara una variable llamada `nombre`, luego se define otra función llamada `mostrarNombre` que luego es llamada, está dentro de su definición utiliza la variable externa `nombre`, podríamos pensar que al declararse con `const` que define variables en bloque la función `mostrarNombre` no tendría acceso a la variable y generaría error, pero funciona correctamente; esto se da porque Javascript al momento que se define una función con funciones internas y es creada, es decir, en el momento que llamamos la función `inicializar()` esta genera un contexto con el estado que la rodea en la aplicación, es decir, se genera por así decirlo un empaquetamiento del estado de la aplicación al momento de ser creada la función para asegurar que en un futuro el funcionamiento de esta va a basarse en el momento en el que fue creada la misma, así mismo, por ejemplo, se guarda la variable `nombre`, que mas tarde es utilizada en la función interna `mostrarNombre`, como esta variable es definida dentro de ese empaquetado del contexto o en otras palabras el `closure` esta función interna también va a tener acceso a la variable.

Miremos entonces otro caso, ya vimos que es la definición de la función madre o externa la que genera el `closure`, es decir, la que genera ese empaquetado del contexto que le permite a la función interna acceder a la variable definida por fuera de esta, pero, que pasa si ya `inicializar` finalizó su ejecución cuando es llamado `mostrarNombre`. Por ejemplo

```
function crearFuncion() {
    const nombre = 'Perano';

    function mostrarNombre() {
        console.log(nombre);
    }

    return mostrarNombre;
}

const miFuncion = crearFuncion();
miFuncion();
```

En este caso no llamamos directamente `mostrarNombre`, sino que lo retornamos, entonces, su ejecución inicia cuando termina la de `crearFuncion`, podríamos pensar que entonces cuando se ejecute `mostrarNombre` la función madre habr;a finalizado la ejecución, por tanto su contexto ya no existirá y por tanto la variable `nombre` no será accesible pero, igualmente funciona, por qué? por lo mencionado antes, en el momento que se ejecuta la linea `const miFuncion = crearFuncion()` mostrarNombre es creada y entonces toma todo el contexto de su alrededor (El contexto de la función exterior) de manera que se pueda ejecutar cuando se requiera, entonces, independiente del momento cuando se ejecute la función `mostrarNombre`, sea durante la ejecución de la función madre o luego de su finalización a manera de función retornada esta contará con el contexto que le brinda el concepto de los `closures`.

Hemos mencionado varias veces ese ejemplo de la empaquetación, esta empaquetación es a lo que se le llama mas conceptualmente `lexical environment` o lo que traduce, ambiente lexico, es el concepto que utilizamos para referirnos a este contexto que generan las funciones cuando se declaran.

Es muy importante dejar este concepto claro, pues es implícitamente utilizado por varias herramientas de Javascript y no solo eso, en el mundo real también es de mucha utilidad utilizarlo para implementar buenas prácticas. Miremos ahora un ejemplo de como funciona este `lexical environment` cuando trabajamos con funciones anidadas.

Miremos el siguiente ejemplo e intentemos definir cuál será el resultado final impreso en consola.

```
const global = 10;

function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + global;
      };
    };
  };
}
```

En este caso tenemos varias funciones anidadas usadas a manera de funciones retornadas y finalmente tenemos una operación en la que interactúan todas las variables utilizadas a lo largo de esta definición de variables anidadas, incluso, se utiliza una variable definida de manera global que es la llamada `global`.

En este ejemplo visualizamos los 3 scopes que se pueden presentar dentro de un closure, vamos a mirar cada uno detenidamente, donde lo ubicamos en este ejemplo y finalmente como entender el funcionamiento de este closure anidado.

`Global scope | Scope global`

Este scope es el global que conocemos desde que aprendimos sobre scope y las variables y funciones globales, que no son definidas dentro de ningún scope por lo que son accesibles desde cualquier punto del código, en el caso del ejemplo este scope se pone en uso con la variable `global` la cual al ser definida por fuera de cualquier scope es global, por tanto puede ser accedida por ejemplo en el return final sin problemas.

`Enclosing scope`

Este scope es el que nace con estos closures anidados, tomemos como ejemplo el closure que genera la definición de la función que toma como argumento c, para el contexto dentro de esta función acceder al contexto exterior a la función, es decir, el contexto que contiene de la función que toma como parametro c hacía afuera en realidad está accediendo al contexto interno de por ejemplo la función que toma como parametro b, así entonces, es donde nace este concepto de `enclosing scope`, que a lo que se refiere es que ese contexto externo de una función se enlaza o se conecta con el contexto interno o `enclosing scope` de la función mas externa, esto lo que explica o a lo que se refiere es que el contexto se va anidando para que finalmente la función mas interna tenga acceso al scope de la función mas externa, es decir, este concepto es el que hace posible que podamos realizar la operación realizada en el return final.

`Local scope`

Este scope es el ultimo, este scope como lo dice su nombre se refiere al scope actual interno, dependiendo del punto de referencia, es decir, si nos referimos al scope local desde la definición de la función que toma como parámetro `c` entonces el scope local es todo lo que esta contiene, así entonces, realmente también junto con el `enclosing scope` es un concepto que toma un valor relativo al punto de referencia.

Entendiendo estos 3 conceptos, llegamos a una conclusión y es que realmente cada que se retorna una función, lo que estamos haciendo es una nueva declaración, es decir, generando un nuevo scope, así entonces miremos detenidamente como se aplica esta conclusión a nuestro ejercicio.

Iniciamos con un contexto global el cual contiene una variable llamada `global` con el valor de 10, entonces esto es lo único que existe, pero entonces, al declarar la función `sum(a)` definimos esta función y su contexto local, hasta este punto no se ha puesto en práctica el concepto de `enclosing scope`.

Luego cuando nos paramos dentro de esta primera definición de la función `sum(a)` llegamos al primer return, en este caso se retorna una función `nameless` cuya definición y casos de uso ya analizamos en modulos anteriores que toma como parametro `b`, entonces se genera un `closure` el cual contiene el scope global, el scope de la función `sum(a)` y el scope local de la función `function (b)`, hasta aquí tampoco hemos hecho uso del concepto de `enclosing scope`.

Luego se define dentro de esta `function (b)` otra función, `function (c)`, esta entonces genera un nuevo `closure` el cual contiene el scope global, el scope de `sum(a)`, el scope de `function (b)` y ahora el scope local de `function (c)`, entonces, el scope de la función madre de `function(c)` que sería el de `function (b)` en realidad es el scope interno de la función `sum(a)`, entonces es cuando aparece el concepto de `enclosing scope` que es donde realmente encontramos que lo que estamos haciendo es anidar closures. Este mismo procedimiento se repite para la función `function(d)` que entonces al realizar la operación con todas estas variables definidas en contextos externos a ella, por el concepto de `closures` al definirse esta ultima función, esta ya ha anidado todos los contextos de las externas por lo que puede realizar la operación sin ningún tipo de problemas por variables fuera del `scope`.

Miremos entonces un ejemplo de ejecución de esta función.

```
// Scope Global
const global = 10;

function sum(a) {
  return function (b) {
    return function (c) {
      // Scope de funciones externas a function (d)
      return function (d) {
        //Scope local de function (d)
        return a + b + c + d + global;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
```

En este ejemplo de ejecución notamos el ya mencionado anidado de closures en la manera como se ejecuta la función, también podemos hacerlo paso por paso asignándole valores o nombres a las funciones `nameless` retornadas por cada uno de los pasos.

```
// Scope Global
const global = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // Scope de funciones externas a function (d)
      return function sum4(d) {
        //Scope local de function (d)
        return a + b + c + d + global;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const resultado = sum4(4);
console.log(resultado); // 20
```

Como vemos en cada paso se va almacenando el scope resultante de cada función y se genera el closure para la siguiente.

## Callbacks

Cuando miramos las maneras de declarar funciones mencionamos el hecho de que en Javascript se usaban callbacks, los cuales se apoyan en un par de maneras de declarar funciones como por ejemplo las `nameless functions` o las funciones como variables, vamos a ver entonces que son los callbacks y como usamos estas maneras de declarar funciones para beneficiarnos con los callbacks.

En Javascript podemos pasar como argumentos de una funcion otras funciones, esto para complementar el funcionamiento de la primera, lo más común es que se retorne la función pasada como parametro, por supuesto esta función pasada como parametro mediante el concepto `closures` puede acceder al contexto de la primera. Miremos un ejemplo

```
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}

function conversar(nombrePersona, accion) {
    accion(nombrePersona);
    return null;
}

conversar("Mendano", saludar); //Hola, Mendano
```

En este caso nuestra función callback es `saludar` la cual implementamos en `conversar` pasándola como parámetro para que dentro de esta segunda sea utilizada.

Este ejemplo es del uso del `callback sincrono` que es el flujo básico de nuestro código, el uso más común de los callbacks es para ejecutar un determinado código una vez una porción `asincrona` ha finalizado su ejecución.

Igualmente esta funcionalidad también se puede usar de otra manera (que es la más común) que es retornando la función callback.

```
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}

function conversar(nombrePersona, accion) {
    return accion(nombrePersona);
}

conversar("Mendano", saludar); //Hola, Mendano
```

De esta manera nos aseguramos que el llamado al callback sea lo último que se realice en la función y podemos retornar desde la principal el resultado del callback que también es una práctica bastante común.

### Manejo de errores

Como sabemos de módulos introductorios por la naturaleza por arquitectura de Javascript el manejo de errores es un tema fundamental, pues ante el mínimo error sin manejo todo el flujo de nuestra aplicación se caerá.

Así entonces, surgen las buenas prácticas para el manejo de errores, por ejemplo las más comunes que conocemos van desde estructuras `try catch`, para el caso del flujo asincronico por supuesto también existen prácticas, para el caso de los callbacks existe uno aplicado por practicamente todos los desarrolladores de librerías e incluso los mismos módulos núcleo de NodeJS por ejemplo o de Javascript.

`Error First Callback`

Este es el nombre que se le asocia al concepto que indica como debe ser el manejo de errores en procesos asincronicos trabajados con la herramienta de callbacks, como su traducción lo indica, lo que apunta es que el primer parametro de un callback siempre debe ser un posible error, el segundo sería entonces el eventual resultado satisfactorio de la función, hagámoslo más claro con un ejemplo.

Para el siguiente ejemplo vamos a utilizar el modulo `fs` el cual nos sirve para gestionar archivos de nuestras maquinas, este procedimiento de leer, escribir y eliminar archivos por supuesto es una de las operaciones que podriamos considerar que necesitan de flujos asincronicos, pues son procesos que por su naturaleza externa su demora puede variar mucho y como siempre no es buena idea bloquear el flujo de nuestra app, sin embargo también necesitaremos en ocasiones de esperar el resultado de una escritura o lectura de archivo. Miremos un ejemplo que de hecho implementa el `Error first callback`.

```
const fs = require("fs");

const archivo = "archivo.txt";

const ErrorFirstCallback = (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log("Función ejecutada satisfactoriamente" + data);
};

fs.readFile(archivo, ErrorFirstCallback);
```

En este caso ejemplo tenemos una función llamada `ErrorFirstCallback` la cual se encarga de ser el callback de nuestra función `readFile`, lo que hace esta función es leer un archivo con el nombre indicado en su primer parametro, el segundo parametro es una función callback la cual recibe como primer parametro error si este existe o simplemente data si todo va correcto.

Esta convención es importante porque todas las librerías y desarrolladores trabajan así, de manera que sea predecible el comportamiento de los callbacks, en este caso, siempre sabemos que cuando se llegue a presentar un error este va a ser el primer parametro del callback, por tanto, con ese primer argumento podemos gestionarlo y el segundo y demas argumentos harán referencia a datos resultado del flujo exitoso de la función.

En este caso al saber que si acaso se presenta error será el primer argumento del callback, miremos como dentro de la función `ErrorFirstCallback` hacemos manejo de este error, lo primero que hacemos es preguntar si `err` que en este caso es el parametro que contiene el error (si llegase a existir) entonces sabemos que si este parametro toma algún valor es porque hubo un error, por tanto en este caso imprimimos el error y retornamos.

Imaginemos un caso donde esta convención no existiera, algunos usaramos los errores en el segundo parametro, otros en el primero y en general fuera como cada desarrollor quisiera, sería un lío darle manejo a nuestros errores porque no sabríamos de manera precisa que parametro es el que representa el error si llegara a presentarse, de aquí la necesidad de estos estandares y de su aplicación.

Ahora supongamos que el archivo archivo.txt no existe, entonces la función `readFile` va a ejecutar el callback con dicho error en el primer parametro, al ejecutarse nuestra función nos saltará el mensaje indicando el error y lo corregiremos, de esta manera nos enteramos de cual fue el error y no se cae nuestra aplicación porque le dimos manejo al error.

En caso de que el archivo existiera y se cargara sin problemas el callback se ejecutaría con los datos del archivo leídos en el parametro `data` que como vemos lo imprimimos en el console log que indica el resultado satisfactorio, por esto es super fundamental siempre aplicar esta buena practica.

El callback como notamos y ya podemos deducir es un concepto que vamos a utilizar mucho puesto que en el mundo del desarrollo web son muchos los momentos donde tenemos que esperar a otro agente de nuestra aplicación que realice un determinado proceso para poder continuar, no debemos detener la ejecución de nuestra aplicación mientras este realice su proceso pero si debemos asegurarnos que el proceso que se va a realizar con el resultado del que aún carga no se vaya a ejecutar hasta que el primero haya finalizado, aquí radica la importancia de estos controladores del flujo asincronico.

Este es el primer concepto que nos da luces a la utilización de las distintas herramientas para la gestión del asincronismo en Javascript, en el siguiente módulo vamos a profundizar sobre este concepto, sus alternativas que existen y por supuesto analizaremos el por qué y para que de cada alternativa.

## Asincronismo

Lo mas seguro es que en algun momento a este punto hayamos leido que Javascript es asincrono por diseño y nos preguntaremos, que es asincronismo y por qué por diseño. Miremoslo

Javascript es un lenguaje de programación pensado inicialmente para desarrollo web, en la interacción con el usuario y para cumplir funciones se requiere muchas veces de consultar bases de datos u otras paginas web, contrastemos esto con el hecho de que Javascript es `single thread`, esto lo que significa a grandes rasgos es que solo puede estar cumpliendo una tarea a la vez, pero entonces, en estos momentos que el codigo tiene que consultar información o hace alguna tarea que demanda una entrada y una salida nuestro hilo se bloquea? La respuesta es **no**, para este tipo de operaciones es cuando usamos la asincronía, implementa lo que se le llama un `loop de eventos` el cual es el nucleo de su asincronismo, este es un ciclo que se está ejecutando continuamente evaluando el estado de la aplicación y moviendo elementos de un lado a otro, miremos que son estos elementos y a donde los mueve.

- `Call Stack` El call stack o pila de llamadas, es una pila en la cual se almacenan las funciones por ejecutar de nuestro código, es una pila por su naturaleza LIFO (Last in, first out | Ultimo en entrar, primero en salir) lo cual sirve para que por ejemplo si una función se llama dentro de otra, esta se apile encima de la primera y se ejecute hasta completarse antes que la primera y así hasta finalizar todas las ejecuciones, por otro lado, cuando una función tiene un callback este pasa a la `Cola de eventos` para ser ejecutada una vez la actual se haya vaciado
- `Event queue` La cola de eventos es la encargada de enfilar los callbacks generados por funciones de nuestra `call stack`, estos al ser manera de cola la naturaleza es FIFO (First in, first out | Primero en entrar, primero en salir), de manera que en ese orden se ejecutan una vez inicie su ejecución, la ejecución de esta cola inicia cuando el `call stack` está vacío.

Entender como funcionan estos elementos es fundamental para comprender el funcionamiento de nuestras aplicaciones, entonces, en Javascript se hace fundamental entender el asincronismo de cara a organizar las tareas y procesos de nuestra aplicación de manera que esta funcione correctamente y de manera fluida.

> Cabe destacar también que al ser `single thread` Javascript pone en un plano muy importante el manejo de errores, pues si se presenta una excepción no atrapada por parte de nuestro código, o sea, si se presenta un error sin manejar nuestra aplicación completa fallará

Siguiendo con el tema de la asincronía por diseño miremos la siguiente imagen la cual ilustra de manera entendible el diseño de los elementos mencionados anteriormente.

![Modelo Javascript](/Entregable10/resources/event-loop.png)

En esta se evidencia el funcionamiento del evento loop y como mueve elementos, los procesos rapidos y sincronos los procesa e inmediatamente da respuesta, es decir, son bloqueantes y los mas demorados los pasa a donde se requiera para que sean procesados y luego estos envian el callback el cual es enviado al event queue por el event loop para una vez el call stack se vacea sean ejecutados.

Visto todo lo anterior hablemos ahora de un concepto importante en el manejo del event loop de Javascript y es las funciones `bloqueantes` y `no bloqueantes` que ya su nombre deja ver un poco a que se refiere; si una función es bloqueante o no, depende de si esta bloquea el hilo mientras termina su ejecución o si devuelve inmediatamente el control al hilo, así entonces, podemos llegar a relacionar los conceptos con `asincrono` y `sincrono` diciendo así que el código sincrono es bloqueante y el asincrono es no bloqueante. Miremos entonces mas a detalle cada uno.

## Javascript Síncrono (bloqueante)

Cada operación se ejecuta tan pronto es llamada bloqueando entonces el hilo hasta que dicha operación se finaliza, veamos el siguiente ejemplo

```
console.log("Inicio");

function dos() {
  console.log("Dos");
}

function uno() {
  console.log("Uno");
  dos();
  console.log("Tres");
}

uno(); // Inicio -> Uno -> Dos -> Tres
console.log("Fin");
```

Este es el flujo basico de un código que no involucra asincronismo, se ejecutan ordenes hasta finalizar y conforme el orden del interprete. Este es el flujo que siempre hemos utilizado hasta ahora en nuestros desarrollos, este es el flujo basico de muchos programas que no se relacionan con otros agentes para su desarrollo o que pueden bloquearse sin ningún problema ante operaciones bloqueantes, como puede ser una aplicación de escritorio sencilla.

## Javascript Asíncrono (no bloqueante)

Como mencionamos, hay procesos dentro del desarrollo web que involucran el hecho de cargar información de otros origenes los cuales involucran un tiempo de respuesta o de procesado, no resulta atractivo bloquear nuestro hilo que sería basicamente bloquear la aplicación hasta que este origen nos dé respuesta, para eso utilizamos el flujo asincronico, este mismo también implica que nuestra aplicación no necesariamente es ejecutada en el orden que describimos.

Para el caso del asíncronico o no bloqueante cada operación se llama e inmediatamente devuelve el control de la aplicación al hilo aún si esta no ha finalizado su ejecución, luego cuando se finaliza la ejecución del proceso asincronico este emite un `evento` con la información del `callback` a ejecutar el cual se ejecutará cuando se la `call stack` esté vacía. Miremos el mismo ejemplo con elementos de asíncronismo

```
console.log("Inicio");

function dos() {
  setTimeout(function () {
    console.log("Dos");
  }, 1000);
}

function uno() {
  setTimeout(function () {
    console.log("Uno");
  }, 0);
  dos();
  console.log("Tres");
}

uno(); // Inicio -> Tres -> Fin -> Uno -> Dos
console.log("Fin");
```

En este caso utilizamos dos funciones con un callback el cual nos permite esperar un determinado lapso de tiempo antes de ejecutar una tarea y enviar su callback al `event queue`, las funciones utilizadas son `setTimeout`, esta lo que nos permite es indicarle una función callback y como segundo parametro una duración en milisegundos, que luego de estos transcurridos se ejecuta la función callback.

> Como nota para el caso de la función utilizada para esperar este tiempo y simular un escenario asincronico, también existe una función llamada `setInterval` la cual nos permite esperar un tiempo y luego de dicho tiempo iniciar la ejecución de un callback cada un determinado intervalo de tiempo, estas funciones son conocidas como scheduling.

Como evidenciamos en este ejemplo, si hacemos el analisis de como se maneja la `task pile` y la `event queue` queda muy claro el orden de impresión de los textos, uno y dos quedan de ultimos en ese orden porque los dos son callbacks de funciones asincronas que se ejecutan una vez finaliza la ejecución de los items en el `task pile`.

## Final del módulo

Llegamos al final de este módulo en el cual aprendimos sobre `closures`, `callbacks` y en general vimos los elementos bases de la `asincronía por diseño de Javascript`, los siguientes modulos daremos mas profundidad al tema del asincronismo y miraremos las herramientas que nos provee Javascript para manejarlo, veremos que en un entorno productivo este es utilizado practicamente en todos los desarrollos por tanto es super importante tener estos conceptos claros.