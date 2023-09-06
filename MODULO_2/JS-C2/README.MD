# Iniciemos con Javascript

Antes de empezar, como siempre es muy importante tener un contexto conceptual de nuestro tema a trabajar, en este caso Javascript, primero vamos a hacer unas aclaraciones muy importantes respecto a algunas de las dudas mas comunes referentes al lenguaje y algunos de sus mitos. Si no has leido mucho sobre el tema o no has escuchado nada al respecto podemos saltar a la siguiente sección `Qué es?`.

## Mitos y preguntas comunes

- **Javascript tiene algo que ver con Java?** Lo único que tiene de relacionado Javascript con Java es que ambos son lenguajes de programación pero son muy distintos, tienen enfoques distintos, maneras de funcionar diferentes e incluso tienen desarrolladores diferentes.
- **Javascript es un buen lenguaje para empezar?** Existen mitos que dicen que Javascript es un lenguaje avanzado con conceptos que las personas nuevas en el mundo de la programación se les dificulta, sin embargo, esto no es del todo cierto, Javascript como todos los lenguajes tienen conceptos avanzados que podemos utilizar para desarrollos así mismo más avanzados así como cualquier otro lenguaje de programación, obviando esto Javascript es un excelente lenguaje de programación para recién llegados a la familia del desarrollo al cual podremos agregarle dificultad conforme obtenemos experiencia.
- **Javascript es un lenguaje que solo sirve para desarrollo web?** Si bien el desarrollo web es el enfoque principal de javascript no es su único enfoque, el crecimiento que se le ha dado a Javascript mencionando por ejemplo lo que es NodeJS han llevado al lenguaje a ser de los más versátiles y utilizados por todo tipo de aplicaciones alrededor del mundo, por esto no debemos preocuparnos si acaso tenemos dudas de si el desarrollo web es lo que nos gusta, porque es seguro que con Javascript se nos abre un mundo de opciones que va mucho mas allá del desarrollo web

_Ahora si, arranquemos!_

## Qué es?

Javascript apareció por primera vez el 4 de diciembre de 1995, se desarrolló luego de la latente necesidad de hacer las páginas web que ya tomaban mucha fuerza dinámicas, hasta ese entonces las paginas web eran meramente estáticas y por ende carecían de mucha interactividad, así Netscape emprendió el desarrollo de un lenguaje independiente para poder desarrollar paginas web dinamicas.

Es un lenguaje de programación interpretado, que soporta gran variedad de paradigmas, desde event-driven hasta object-oriented, Javascript hoy como lo conocemos es el tercer pilar de las paginas web, junto con HTML y CSS conforman mas del 98% de paginas web que conocemos hoy día, es un lenguaje nos permite implementar caracteristicas complejas a las paginas web, como actualizaciones de contenido, mapas interactivos, graficos animados, etc. Tomemos como ejemplo el siguiente código:

**HTML**

```
<p>Persona 1: Sultano</p>
```

**Javascript**

```
const person = document.querySelector('p');

person.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  person.textContent = `Player 1: ${name}`;
}
```

Con este ejemplo de código le estamos agregando interactividad a nuestra etiqueta p, de manera que al darle clic nos pregunte por un nuevo nombre el cual al indicarlo será el nuevo texto que ilustre nuestra etiqueta, también nos permite por ejemplo generar variables, usar operadores lógicos y matematicos, ejecutar código de manera que nuestra pagina se maneje mediante eventos, entre otras.

Veamos entonces, los elementos que componen un código de Javascript

## Variables en JS

Como mencionamos anteriormente las variables son una de las principales adiciones de Javascript a nuestras paginas web, pero entonces, entendamos que es una variable.

Las variables son un concepto fundamental en cualquier lenguaje de programación; los datos son lo que utilizan nuestros programas informaticos, por ejemplo, el nombre de un usuario en una red social es un dato. Una gran parte de la programación se basa en manipular o mostrar datos y para esto por supuesto, necesitamos tener estos datos almacenados en algún lugar para luego modificarlos y así mismo guardar su nuevo valor.

Pensemos por ejemplo en información acerca de una persona, que datos lo conforman, podríamos hablar de edad, sexo, estatura, peso, etc, entonces cada una de estas caracteristicas son datos que podemos almacenar para mostrar o transformar, pensemos por ejemplo en una aplicación de salud donde tengamos que guardar todos estos datos para monitoreo, luego, cuando nuestro peso cambie, ya sea porque subimos de peso o porque bajamos, vamos a necesitar de modificar ese dato, para esto vamos a requerir de almacenar ese valor modificarlo y luego guardarlo, entonces, podemos hacer uso de las variables de Javascript.

Sabiendo lo anterior, ahora podremos almacenar valores para utilizarlos mas adelante a lo largo de nuestra aplicación. En Javascript para definir variables utilizamos las palabras claves definidas por el lenguaje junto con opcionalmente un operador de asignación el cual nos sirve para indicar esa variable que valor va a contener, claro que podemos declarar variables sin valores iniciales también, en este caso las palabras claves para definir variables son `var`, `let` y `const`. Veamos un ejemplo de cada una y como las utilizamos para la definición:

```
const  miVariableNumerica  =  2;

var  miVariableBoolean  =  true;

let  miVariableTexto  =  'Hola mundo'
```

Como vemos la manera de definirlas según la palabra clave que utilicemos no afecta la estructura de la definición, entonces, por qué existen 3 maneras distintas? Estas tres maneras distintas cumplen distintas necesidades, la primera es el tema de la naturaleza de nuestra variable, una variable cuyo valor no puede ser cambiado luego de ser definida es una **_constante_**, para definir constantes usamos la palabra clave, `const`, las variables declaradas con `let` y `var` pueden ser modificadas luego de ser definidas, las declaradas con var pueden ser incluso redefinidas en distintos puntos de nuestro código, lo miraremos con mas profundidad en la siguiente sección.
Por otro lado tenemos el tema del **_scope_** que es otro concepto muy importante que vamos a analizar a continuación.

Hagamos un resumen

- `const`
  - Nos sirve para definir variables constantes
  - No pueden ser reasignadas, es decir, no puede cambiarse el valor que contiene
  - No pueden ser redefinidas, es decir, no podemos volver a definir la variable
  - Es importante introducir el concepto de mutabilidad para el caso de objetos, si definimos un objeto como const, las propiedades de dicho objeto podran ser modificadas al ser comportamientos mutables, para evitar esto podemos usar algunas estrategias como por ejemplo:
    -Object.freeze Aun cuando usamos const en un objeto, se pueden modificar sus propiedades. para “congelar” el objeto y evitar que las propiedades se modifiquen podemos usar el Object.freeze
    -Object.defineProperty este método nos permite que definir una propiedad de un objeto, y prohibir que se sobreescriba.
  - En el caso de los arreglos tenemos un comportamiento igualmente mutable en sus contenidos, pero podemos llevar a cabo algunas practicas para evitar esta mutabilidad por ejemplo:
    - Push: agregar un elemento al final del arreglo, la forma mutable sería:
      ```
        const newUser = {
          id:4,
          name: "Stephen Watkins",
          email: "stephen.watkings@example.com"
        }
        usuarios.push(newUser) // [{ id: 1}, {id:2}, {id: 3}, { id: 4} ]
      ```
      la forma inmutable hariamos uso del operador spread asi:
      ```
        const newUsuarios = [...usuarios, newUser ]
      ```
- `var`
  - Nos sirve para guardar variables que pueden cambiar en el futuro
  - Pueden ser reasignadas
  - Pueden ser redefinidas
- `let`
  - Nos sirve para guardar variables que pueden cambiar en el futuro
  - Pueden ser reasignadas
  - No pueden ser redefinidas

> Inicialmente en Javascript solo existia la palabra clave `var` para definir variables, esta por su comportamiento poco estricto fue complementada con las `const` y `let` las cuales tienen un comportamiento un poco mas controlado, entonces, una buena practica es usar lo mínimo posible variables definidas con `var`

Las variables en todos los lenguajes de programación tiene un tipo asociado, es decir, si le asignamos un valor a una variable llamada por ejemplo `miNumero`, al definirla computacionalmente nuestro lenguaje le asocia un tipo, este tipo puede asociarse automaticamente como es el caso de Javascript o puede suceder que sea obligatorio definir cual es el tipo de la variable, como pasa por ejemplo con Java. A Javascript se le llama lenguaje debilmente tipado porque a diferencia de los fuertemente tipados maneja un tipado dinamico calculado al momento que le asignas el valor a la variable.

Los tipos que pueden tomar las variables varian también dependiendo del lenguaje, en el caso de Javascript los tipos principales son: `number` para numeros, `string` para cadenas de texto, `boolean` para valores true o false, los posibles valores que puede tomar cada uno y un detalle mas profundo de su funcionamiento lo veremos mas adelante.

## Scope

El scope es un concepto importante de tener claro, este se refiere al contexto en el que existen los objetos de nuestro código, entonces, es fundamental tener claro este concepto porque nos ayudará a entender el funcionamiento de nuestro código y a tomar decisiones como donde definir objetos de manera que nuestro desarrollo se comporte de la manera esperada.

Por ejemplo, hablando del caso de las variables, el scope es un concepto que estudia el donde existe nuestra variable en nuestro código, es decir, en donde podemos acceder a nuestra variable sin obtener un error de `Variable no definida` o sea que podemos acceder a nuestra variable y modificarla si aplica, este concepto no solo aplica para variables sino también para todos los objetos que vamos a ver del lenguaje de programación como funciones u objetos.

Miremos un primer ejemplo donde vemos un concepto nuevo.

```
function miFuncion() {
        let hola = "hola";
}
console.log(hola); // error: hola is not defined
```

En este caso visualizamos algo que no habíamos visto antes, que es la palabra clave `function` y lo que sigue de ella, pese a que es el siguiente tema por cuestiones de orden de contenido para entender el concepto en cuestión es importante al menos tener una noción basica de las funciones, entonces, miremos un poco a alto nivel las funciones.

**Pequeño vistazo a las funciones.**

En Javascript podemos generar funciones las cuales nos sirven para reutilizar código de manera que tengamos un flujo de trabajo mucho mas entendible y organizado, cuya importancia la miraremos en otros modulos cuando hablemos de buenas practicas para mantenibilidad y escalabilidad de código.

Miremos un ejemplo donde tenemos una aplicación de salud en la cual queremos calcular el IMC de los clientes para evaluar si están en un peso sano o no, es una funcionalidad que por supuesto se ejecutará muchas veces durante el uso de la aplicación de un cliente debido a que es el fin de nuestra app monitorear temas de salud como el IMC, por ejemplo, si el cliente cambia el registro de peso que se tiene, debemos hacer el calculo nuevamente con el nuevo peso de manera de indicarle si se encuentra demasiado bajo de peso, con un peso bueno para su salud o con sobrepeso, por tanto esta formula del IMC la podríamos aplicar cada vez que la necesitemos sin problema, pero se presta para desorden o por ejemplo podría pasarnos que en alguna implementación metamos la pata y copiemos mal la formula, en los demás lugares donde se use trabajará bien pero en ese lugar donde no lo hicimos bien va a fallar, la solución es que podríamos encapsular ese calculo en una función como la siguiente:

```
//El IMC se calcula como el peso sobre el cuadrado de la estatura
function calcularIMC(peso, estatura) {
  return (peso / (estatura * estatura))
}
```

De la misma manera que lo haría una función matematica, definimos que tenemos una función llamada `calcularIMC` la cual recibe como `parametro` el peso y la estatura de una persona y nos devuelve su IMC, luego entramos mas a detalle con las funciones, por ahora lo que nos interesa es el contenido de la función o su `scope`, es que cuando definimos una función y sus parametros luego tenemos que indicar que va a hacer esa función, esta funcionalidad la debemos encerrar dentro de esos corchetes curveados `{ aquí }` y ese será entonces el `scope` de la función. En Javascript existen muchos objetos distintos que generan `scopes` pero el principal son las funciones, mirémoslo con otro ejemplo.

```
let nuevaVariable = 45

function saludar() {
  //Esto está dentro del scope de la función saludar
  let saludo = "Hola, como estas"
  console.log(saludo)
  //Hasta aquí llega el scope de la función saludar
}
//Esto ya es afuera del scope la función saludar, es decir, no hace parte de su scope
const variableConstante = false
console.log(saludo) //Esto genera error porque saludo no existe por fuera de la función saludar
```

Así entonces, `saludo` es una función que solo existe dentro del contexto o `scope` de `saludar()` por lo tanto solo puede ser accedida dentro de saludar, por lo que la ultima linea genera error.

Luego, lo que no esté dentro del scope de `saludar()` ni de ningun otro scope, es decir, este por fuera de todo, es de scope global, en este caso por ejemplo, la variable `nuevaVariable` podría ser accedida desde dentro de `saludar() o de donde se necesite`.

Esto es lo que tenemos que tener claro por ahora, continuemos.

Miremos nuevamente el ejercicio inicial.

```
function miFuncion() {
        let hola = "hola";
}
console.log(hola); // error: hola is not defined
```

Al ejecutar el código anterior nos arrojará error, porque la variable `hola` está definida dentro del contexto de la función `miFuncion` entonces esta existe dentro de la función, pero al intentar acceder a ella por fuera de este contexto nuestro interprete no reconoce la variable por lo que al ejecutar nuestro script este arrojará error.

Para las definición de objetos existen dos tipos de scopes, el scope **_bloque_** o **_local_** y el **_global_**, según sean definidas las variables, es decir, según el keyword utilizado para declarar la variable esta tiene un scope, las variables definidas con la palabra clave `var` tienen un scope global, es decir, una variable definida por fuera de una función o algún bloque de código con `var` tendrá accesibilidad desde cualquier porción de nuestro código, cuando la usamos dentro de bloques o funciones esta tendrá un scope en bloque como lo vimos en el ejemplo anterior. Por ejemplo, en el siguiente ejemplo nuestro código funcionará correctamente por el lugar donde fue definida nuestra variable

```
var saludo= "hey hi";
function nuevaFuncion() {
    var hola= "hello";
}
console.log(saludo)
```

Hasta aquí todo bien, el problema con usar `var` es que nuestras variables pueden ser redefinidas a lo largo de nuestro código, esto se refiere a que algo como el siguiente ejemplo, no generará error:

```
var saludo= "Hey hola";
var saludo= "Buenos días";
```

Lo que generará que podamos incurrir en redefiniciones de variables que causen que nuestro código no funcione de la manera esperada en códigos extensos.

Desde el 2015, en la versión 6 de ECMAScript se introdujo la palabra clave `let` a Javascript, la cual fue implementada con el fin de mitigar este riesgo anteriormente mencionado, así entonces, esta keyword nos permite definir una variable local, de la misma manera que las definidas con `var` dentro de un bloque, pero, adicionalmente no nos permite redefinir nuestras variables, en este caso si genera error lo que nos quita esa posibilidad de error. Cabe aclarar que si se intenta redefinir dentro de un scope distinto si funcionará. Ejemplo:

```
let saludo= "Buenos días";
let saludo = "Buenas tardes"; // error: Identifier 'saludo' has already been declared
```

Pero, si funciona si lo hacemos de la siguiente manera:

```
let saludo = "Buenos días";
let hour = 1300;
if (hour > 1200) {
    let saludo = "Buenas tardes";
    console.log(saludo); // "Buenas tardes"
}
console.log(saludo); // "Buenos días"
```

Al no funcionar la redefinición con la palabra clave `let` no podemos redefinir nuestras variables, esto nos ahorra dolores de cabeza en códigos extensos.

Finalmente nuestras variables `const` funcionan con un scope en bloque al igual que las `let`, es decir, existen dentro del contexto donde fueron definidas ya sea una función o un objeto, pero si intentamos acceder por fuera de su scope obtendremos un error pues esta no existe.

## Funciones

Retomemos el tema ahora que iniciamos antes, funciones.

Las funciones en los lenguajes de programación funcionan igual que cualquier función matematica que conocemos, es un conjunto de reglas definidas que con unas entradas tiene unas salidas.

A estas entradas en el mundo del desarrollo se les llama `parametros` o `argumentos` y son un elemento principal de las funciones el cual nos permite obtener un comportamiento distinto con base a estos parametros de entrada. Miremos un ejemplo.

```
function sumarNumeros(a, b) {
	return a + b
}

const suma = sumarNumeros(2, 3);
console.log(suma) // 5
```

En el ejemplo anterior tenemos una función llamada sumar numeros, la cual recibe por parametros a y b, los suma y devuelve el resultado, como vemos al llamar la función con los parametros 2 y 3 nos devuelve el valor de 5.

Este es el funcionamiento basico de las funciones, las usamos principalmente para encapsular procesos que hacemos en repetidas ocasiones a lo largo de nuestro código y evitarnos estar duplicando lineas de código y por supuesto también por orden pues hay ocasiones en las que ejecutamos una serie de procesos con un fin el cual en nuestro flujo del código quedaría muy dificil de visualizar, por lo que mejor hacemos un llamado a una función dentro de la cual encapsulamos dicha funcionalidad, miremos un ejemplo sencillo.

```
//Se quiere calcular el cubo de la variable número;
const numero = 2;
const numeroAlCuadrado = numero * numero;
const numeroAlCubo = numeroAlCuadrado * numero;
console.log(numeroAlCubo) // 8

//Usando operadores de asignación
let numero = 3;
numero *= 3;
numero *= 3;
console.log(numero) //27
```

Como vemos son dos posibles soluciones, por supuesto podríamos simplificarlo haciendo uso del modulo Math, pero para casos del ejercicio lo haremos así.

Puede ser un poco molesto de visualizar esa multiplicación para obtener el cubo del número, entonces, encapsulemos esa funcionalidad.

```
const numero = 4;

function calcularCubo(numero){
  const numeroAlCuadrado = numero * numero;
  const numeroAlCubo = numeroAlCuadrado * numero;
  return numeroAlCubo;
}

console.log(calcularCubo(numero)) //64
```

De esta manera siempre podemos reutilizar la funcionalidad sin tener que ver esas 3 lineas en el flujo de nuestro código que dificultan tanto su lectura.

Luego, para definir nuestras funciones Javascript pone a disposición distintas maneras de hacerlo, esto con el fin de adaptarse a las distintas necesidades de los desarrolladores, mas adelante iremos viendo cuales son estas necesidades y como nos ayudan las distintas maneras de definir funciones, miremos entonces, como definimos las funciones.

Existen 3 diferentes maneras de definir funciones en Javascript, estas se usan según nuestra necesidad, por ejemplo para el tema de **_callbacks_** que necesitamos pasar funciones como parametros de funciones usar funciones como variables resulta bastante atractivo, o para cuando utilizamos **_nameless_** functions que son funciones sin nombre también, estos son usos que miraremos mas adelante, por ahora veamos como declararlas.

### Por declaración

Las llamamos por declaración cuando usamos la estructura basica, la palabra clave, los parametros y el bloque de código:

```
function multiplicar(primerNumero, segundoNumero) {
  return primerNumero * segundoNumero;
}

console.log(multiplicar(5, 6)); // 30
```

De esta manera nuestras funciones tienen hoisting, es decir, son cargadas de primeras por nuestro interprete por lo que podemos usarlas antes de definirlas, esto es muy importante porque podemos para temas de orden definir nuestras funciones hasta el final del código y luego utilizarlas en el inicio, mas alla de esto, es importante tener claro el concepto del hoisting y cuando se aplica y cuando no para entender en caso de comportamientos indeseados de nuestro código que podría estar pasando.

### Por expresión

Las llamamos por expresión cuando definimos nuestra función como una variable, igualmente se utiliza la palabra clave function, los parametros y el bloque

```
const multiplicar = function(primerNumero, segundoNumero) {
  return primerNumero * segundoNumero;
}

console.log(multiplicar(5, 6)); // 30
```

De esta manera nuestras funciones **_NO_** tienen hoisting, es decir, no son cargadas de primeras por nuestro interprete por lo que al intentar usarlas antes de su definición nos generará errores.

### Arrow Functions

Las arrow functions o funciones de flecha son la manera corta de definir funciones por expresión, nos sirve mucho cuando usamos **_callbacks_** que es un concepto un poco mas avanzado que miraremos mas adelante.

```
const multiplicar = (primerNumero, segundoNumero) => {
  return primerNumero * segundoNumero;
}

console.log(multiplicar(5, 6)); // 30
```

Cuando una arrow function no tiene lógica completa y podemos resumir en una linea su valor de respuesta podemos utilizar la siguiente sintaxis

```
const  multiplicar = (primerNumero, segundoNumero) =>  primerNumero * segundoNumero;
console.log(multiplicar(2, 3)) // 6
```

Cabe destacar que estas functiones tampoco tienen hoisting.

Otro concepto interesante sobre las funciones a destacar es que podemos definir parametros opcionales con valores predeterminados. Miremos el siguiente ejemplo.

```
const saludar = (saludo, nombrePersona = "desconocido") => {
  console.log(`Hola ${nombrePersona}, ${saludo}`)
}

saludar('Como estas?') // Hola desconocido, Como estas?
saludar('Como te encuentras?', 'Perano') // Hola Perano, Como te encuentras?

```

Como vemos le asignamos un parametro opcional a la función el cual es nombrePersona, que si no se le asigna un valor el por defecto toma el valor de "desconocido", de esta manera podemos colocar funcionamientos opcionales a nuestras funciones.

Cabe resaltar que las funciones flecha o arrow functions, no solo difierent en su sintaxis frente a las funciones clásicas, el scope de la función opera de manera diferente en una o en otra, en el caso de las funciones clásicas, el scope hace referencia al padre desde donde es llamado mientras que en las funciones flecha, el scope es heredado del contexto superior, dicho lo anterior podemos implementar la palabra reservada "this" que en javascript se define como el objeto contexto, dicho lo anterior entendamolo con un ejemplo:

```
const persona = {
	nombre: 'Agustin',
	decirNombre(){
		console.log(this.nombre)
	}

}
console.log(persona.decirNombre()) // OUTPUT : 'Agustin'
```

Tenemos la definición de un objeto persona con una propiedad nombre y una función que escribe el nombre en la consola, al ejecutarlos vemos el resutlado esperado ya que en este caso el objeto contexto "this" hace referencia al objeto persona que tiene la propiedad nombre, ahora bien intentemos lo mismo con una una función flecha

```
const persona = {
	nombre: 'Agustin',

	decirNombre: function() {
		console.log(this.nombre)
	}

	decirNombreFuncionFlecha: () => {
		console.log(this.nombre)
	}

}

persona.decirNombreFuncionFlecha(); // OUTPUT : undefined
```

¿Que pasó?, pasó lo que tenia que suceder, en este caso como lo indicamos anteriormente el objeto de contexto "this" hereda el contexto superior que para el ejemplo se podria traducir en el objeto window que no tiene la propiedad nombre por lo qeu el resultado es indefinido

## Coerción de datos

> Para esta sección requeriremos de operadores lógicos, aritmeticos y comparadores, tema que miraremos a detalle mas adelante, por ahora entender que los operadores aritmeticos (+, -, /, \*, %) son los utilizados para operaciones matematicas o de adición, los lógicos (==, ===, ||, &&, !) son utilizados para expresiones de verdad o falso o booleanas y los comparadores (>, <, >=, <=) son para comparar cantidades

Ya vimos como definir nuestras variables, si hemos trabajado con otros lenguajes de programación como Java que son fuertemente tipados, probablemente nos estaremos haciendo la pregunta de como trabajar Javascript el tema, si no lo hemos hecho, probablemente ahora nos interese saber que es un lenguaje tipado y por qué nos lo debimos preguntar con Javascript, miremoslo.

Los lenguajes de programación trabajan con distintos tipos de datos los cuales cada uno tiene posibles operados, posibles modificaciones y unos posibles valores que puede tomar, los tipos de datos dependen del lenguaje de programación, por supuesto existen similitudes muy marcadas pero no necesariamente son los mismos, para el caso de Javascript existen los siguientes tipos de datos.

- **_Boolean_** Entidad lógica la cual puede tomar el valor de `true` o su opuesto `false`
- **_Number_** Valores númericos, pueden usarse con distintos operadores matematicos. Ej: `10500`, `10.5`
- **_String_** Cadenas de texto o caracteres. Ej: `"Hola mundo"`, `'Este es mi texto'`
- **_Null_** Representa un puntero que apunta a un valor o no existente o invalido
- **_Undefined_** Valor que toma una variable cuando no ha sido asignada
- **_BigInt_** es un tipo de dato numerico que puede representar números enteros en el formato de precision arbitrario.
- **_Symbol_** es un objeto incorporado cuyo constructor devuelve un symbol primitivo — también llamado Symbol value o simplemente Symbol — que está garantizado que sea único.

El **_tipado_** hace referencia a la manera como el lenguaje de programación hace estas asignaciones de los distintos tipos a las variables que utilizamos con el fin de adaptarse a su compilador y tener un comportamiento mas definido, Javascript es un lenguaje debilmente tipado, esto lo que indica es que es un lenguaje en el cual no se le da peso u obligatoriedad a la tarea de indicar el tipo de nuestras variables, por lo cual no le indicamos al lenguaje el tipo de nuestras variables, este lo intuye automaticamente según el valor que nosotros le asignemos, esto puede ser positivo para la agilidad del desarrollo pero puede resultar tedioso cuando desarrollamos códigos extensos en los cuales se opera multiples veces con variables y que puede pasar que esta cambie de tipo durante su transformación, por ejemplo que una cadena de texto pase a ser un número o al reves, nuestro código se seguirá ejecutando normalmente pero entonces al intentar operar con ella de una manera puede que su tipo ya no sea el esperado, este tema lo trata la `coerción de datos`.

La **_coerción de datos_** es el proceso mediante el cual Javascript convierte variables de un tipo a otro para garantizar que las operaciones que queremos realizar sean validas, es decir, por ejemplo si intentamos operar una cadena de texto que contiene un número con una variable numerica normalmente arrojaría error porque no es posible operar entre tipos de datos, sin embargo, Javascript antes de realizar la operación valida el tipo de los datos y evalua si puede convertir uno de ellos al otro de manera que hagan match y la operación sea posible, este proceso se puede dar de dos maneras distintas llamadas, **_Implicita_** o **Explicita**, miremos cada una y sus implicaciones.

### Implicita

Esta coerción es la que se da automaticamente, que realiza Javascript de manera transparente para nosotros cuando no le indicamos las transformaciones necesarias a nuestro código, simplemente indicamos las operaciones a realizar y Javascript automaticamente define las transformaciones necesarias y las realiza garantizando que nuestro código se ejecute sin errores.

```
console.log(4 / "2") // 2
console.log(false + true) // 1
console.log(10 + 4 + "dos") // 14dos
```

En este caso operamos entre tipos de variables y Javascript automaticamente hace las transformaciones necesarias para que todo funcione bien, miremos por ejemplo el primer caso donde transforma la cadena de texto que contiene el número 2 de manera que la división se pueda realizar, en el segundo covierte los boolean a númericos de manera que se puedan sumar y en la tercera al detectar que no puede convertir la cadena de texto a número para sumar lo que hace es convertir los números a texto y concatenarlos, es decir, unirlos a la cadena de texto.

### Explicita

Para este tipo de coerción, entonces, se refiere a cuando el desarrollador utiliza las funciones definidas por Javascript para indicar la transformación del tipo de dato deseada, estas funciones existen para cada tipo de dato primitivo que son los que estamos trabajando y lo que hacen es que le pasamos un valor como parametros y estos el valor dado lo intentaran convertir al tipo según la función, si la conversión no es posible igualmente se arrojará un error.

```
console.log(Boolean(-0)) //false
console.log(Number("10.    ")) // 10
console.log(Number("  ")) // 0
console.log(String(10)) // "10"
```

Así mismo podríamos adicionar las funciones de conversión al ejercicio de implicitas y funcionaría de una manera mas definida por nosotros por lo tanto será mas facil intuir que le sucede a nuestro código en caso de fallar, de nuevo, son temas de buenas practicas de manera que tengamos un código mas mantenible y escalable.

### Operadores

Siguiendo entonces, pasamos a ver los distintos operadores y como se efectua la coerción automatica
**_+_**
Para el caso del operador más, si hay una cadena numerica y una de texto este los concatenará

```
console.log("1" + true) // "1true"
console.log(10 + 'texto') // "10texto"
```

Si no hay texto involucrado hará una conversión númerica como se vió en el primero ejemplo de coherción implicita.

```
console.log(true + false) // 1
console.log(true + true) // 2
```

**_Operadores lógicos (||, &&, !)_**

Si utilizamos operadores lógicos Javascript intentará convertirlos en booleanos, es decir, en expresiones de verdadero o falso.

```
console.log(true && false) // false
console.log(false || !false) // true
console.log(!2) // false
console.log("texto" || 0) // texto
```

**_Igualdad_**

Este es muy importante, y es que cuando utilizamos el operador de igualdad regular `==` Javascript aplica coerción para intentar igualar el tipo de datos antes de comparar

```
console.log("1" == 1) // true
console.log(100 != "100") //false
```

Pero cuando utilizamos el comparador de igualdad estricta `===` este no aplica ningún tipo de coerción y compara los tipos de datos también por lo que una cadena de texto puede contener un mismo número que una variable de tipo númerico pero al compararlas y no ser del mismo tipo, arrojará error.

```
console.log("1" == 1) // false
console.log(100 != "100") // true
```

**_Aritmeticos y comparación (+, -, \_, /, %) (>, <, <=, >=)_**

Cuando utilizamos este tipo de operadores Javascript los intentará convertir en numericos para compararlos

```
console.log("3. " * 2) // 6
console.log("5; " - 1) // NaN
console.log(10 / null) // Infinity
console.log("10" > 5) // true
```

## Final del módulo

Llegamos al final de este módulo en el cual aprendimos sobre `Teoría inicial de Javascript`, `Variables`, `Scopes`, `Funciones` y `Coerción de datos`, estos son conceptos fundamentales y basicos sobre Javascript los cuales será importante tener bien claros para continuar con lo que viene.