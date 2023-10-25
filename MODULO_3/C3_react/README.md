# Introducción a React

Genial! Ahora si empezamos con aplicaciones de nivel profesional en el Frontend de todo lo que hemos aprendido hasta ahora. Recientemente vimos el tema de bundlers el cual nos sirve para empaquetar todos nuestro módulos no solo de Javascript sino de CSS también y generar archivos estaticos que nuestros navegadores pueden leer. Ahora vamos a ver uno de las principales librerías de desarrollo Frontend del mercado la cual es React. Vamos a ver que es React y los componentes basicos o fundamentales de esta super util y usada librería pero por supuesto de inicio vamos a ver un par de conceptos que competen al desarrollo con React que aún no hemos visto. Empecemos!

## Breve introducción a NPM

Cuando vimos el tema de los módulos y a lo largo de todas las clases hemos visto al importancia de saber usar las herramientas que tenemos a nuestra disposición para solucionar nuestros requerimientos. Cuando hablamos de herramientas a nuestra disposición en desarrollo de software no nos referimos solo a modulos que están sobre el lenguaje de programación o a elementos conceptuales como recursividad o estructuras de datos sino que nos referimos a también a toda la gama de frameworks y librerías que están en internet para libre uso según las necesidades de cada proyecto.

Hemos hablado del tema pero, no tenemos claro aún donde están presentes realmente todos estos paquetes que mencionamos o como accedemos a ellos porque cuando nos referimos a ellos lo hacemos como si existiera algún tipo de tienda tipo PlayStore o AppStore donde encontramos todos estos paquetes.

La realidad es que si, si existen librerías gigantes de modulos a las cuales podemos acceder para descargar los que necesitemos, existe varias y se les llaman `package managers`, este concepto se refiere a las tecnologías que nos prestan este servicio, de acceder a paquetes o módulos que otros usuarios o nosotros mismos hemos creado y subido a internet para reutilización según lo requiere cualquier desarrollador.

Existen varios `package managers` como `npm`, `yarn`, `pnpm`, etc. Por supuesto al ser de desarrolladores distintos estos desarrollan en cada uno funcionalidades distintas, por lo que se hace muy interesante estudiar nuestras necesidades antes de elegir cual queremos utilizar. Por supuesto hay uno que destaca entre todos que en general cumple para necesidades muy generales y que en terminos practicos nos sirve para todo que es `npm`, nosotros vamos a utilizar este pues es el mas utilizado, sin embargo en el módulo correspondiente donde profundizemos mas del tema hablaremos mas a profundidad y hablaremos también sobre las demas opciones y sus diferencias. Miremos entonces que es `npm` y como lo utilizamos.

Entonces `npm` es la herramienta que utilizaremos para instalar nuestros paquetes, como lo mencionamos antes, luego entraremos mas en el tema pero por ahora necesitamos instalarlo en nuestras maquinas para los desarrollos que vamos a hacer con React, haciendo clic [aquí](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) obtendremos información sobre los distintos metodos de instalación que tenemos para `npm`, generalmente al instalar NodeJS tendremos instalado NPM también pero puede suceder que no, sigamos los pasos del link dado para instalarlo correctamente. Para instalar NodeJS usamos [este](https://nodejs.org/en/download/) link.

Una vez instalado podemos verificarlo ejecutando en la consola de comandos el siguiente comando.

```cmd
npm -v
```

La respuesta esperada del primer comando es la versión de `npm` instalada en el sistem. Una vez tengamos respuesta estaremos listos para iniciar.

## Primer Proyecto de React

Para crear nuestro primer proyecto de React deberemos utilizar un comando de `npx` que si instalamos una versión posterior a la 5.2.0 de `npm` cosa que debería ser así porque esta es una versión bastante antigua ya tendremos también `npx` instalado. Podemos verificar la versión de npx usando el siguiente comando.

```cmd
npx -v
```

Si obtenemos respuesta entonces estamos listos para continuar.

Ahora lo que debemos hacer es ejecutar el siguiente comando

```cmd
npx create-react-app my-app
```

Donde `my-app` es el nombre de nuestra aplicación, por tanto, para crear una aplicación llamada por ejemplo frontend utilizamos el comando de la siguiente manera.

```cmd
npx create-react-app frontend
```

Y así para llamar nuestra aplicación como queramos.

Al ejecutar este comando notaremos como la consola nos empieza a enviar mensajes de estado de la instalación de un proyecto de React, este comando lo que hace es construir una estructura inicial para un proyecto de React ejemplo, si bien este no será el mas optimizado porque por supuesto está configurado para cubrir necesidades muy generales, es perfecto para proyectos pequeños y esta es la estructura que utilizaremos en los módulos de React sobre la cual trabajaremos.

La instalación tomará algunos minutos, la velocidad de dependerá de nuestra velocidad de internet. Miremos ahora antes de pasar a la estructura del proyecto una breve contextualización sobre que es React.

### Qué es React?

React es una librería para desarrollo frontend, al ser una librería esta no nos propone tantas herramientas para que se pueda decir que tiene una estructura o flujo de trabajo definido, esto le aporta mucha flexibilidad a los desarrollos con la herramienta, es decir, nos facilita el poder combinarla con las librerías que queramos.

React basa su arquitectura en los `componentes` este es un concepto el cual mencionaremos constantemente al trabajar con React pues es la base de sus construcciones, estos dotan a React de una facilidad de desarrollo mediante la implementación de aplicaciones modulares basadas en componentes y por supuesto nos prestan una herramienta fundamental de módulos y del desarrollo en general que es la reutilización de código. Lo que hace todo el tiempo es transformar nuestros componentes en Javascript que los representa y gestiona mediante el Virtual DOM a elementos reales del DOM. Pero que es este Virtual DOM? Miremoslo.

### Virtual DOM

El DOM Virtual o VDOM es un concepto de la programación el cual es la representación ideal o virtual del DOM en memoria y en sincronía con el DOM real mediante la implementación de la librería ReactDOM, este proceso se conoce como `reconciliación`.

Este enfoque o este concepto hace posible la API declarativa de React, la cual nos facilita demasiado la vida y nos permite muy facilmente indicarle a React el estado que queremos para nuestra interfaz de usuario de manera que React haga los cambios necesarios en el DOM para llevarlo al estado deseado. Esto abstrae la manipulación de atributos, manejo de eventos y actualización manual del DOM lo que nos facilita muchisimo la vida a los desarrolladores. React utiliza algoritmos bastante eficientes para evaluar las actualizaciones que se deben aplicar sobre el DOM en todo momento de manera de realizar la minima cantidad de operaciones posibles para obtener el resultado deseado.

En React los componentes que utilizamos para el VDOM no son elementos HTML propiamente, son una sintaxis completamente nueva llamada `JSX`, miremos que compone esta nueva sintaxis, como la utilizamos y por qué nos sirve tanto.

### Componentes

Los componentes son un concepto nucleo de React, estos nos permiten separar nuestra interfaz en partes reusables e independientes, el fin de estos es la reusabilidad y estandarización, pensemos por ejemplo en un componente `Title` el cual va a contener todos nuestros estilos y estructura estandar para los titulos de nuestra aplicación, esta es la real finalidad de los componentes y una de las herramientas mas utilizadas y poderosas de ReactJS.

Los componentes pueden ser declarados de muchas maneras, su fin es aceptar propiedades las cuales indiquen el funcionamiento del mismo y que describan un fragmento HTML el cual los representa.

Hay dos tipos fundamentales de componentes, los `function components` o componentes funcionales y los `class components` o componentes de clase. La diferencia entre estos dos es la manera como los definimos y como implementamos estas propiedades, siendo un poco mas detallados, un componente de clase se diferencia de uno funcional por la capacidad de administrar un estado propio del componente y la exposición de metodos que pueden ejecutar funcionalidades personalizadas en cada ciclo dle componente, ahora, en cuanto a cual utilizar, los `function components` surgieron como una mejora a los `class components` por lo que si bien ambos cumplen la misma función y tienen sus pro y sus contra siempre es más recomendado utilizar componentes funcionales, pues son los mas usados y así mismo es su soporte y su actualización.

Los componentes funcionales implementan el `lifecycle` de los componentes mediante `hooks`, esta es una de las diferencias notables, estos conceptos los veremos mas adelante así como el como crear componentes, por ahora entender que existen estos dos tipos fundamentales y que la recomendación es clara, utilizar componentes funcionales.

Comunmente se hacen clasificaciones de componentes según su fin, miremos una de ellas.

- Presentational Components
  - También conocidos como stateless components se encargan de representar componentes solo en base a las `props` recibidas estos no almacenan estados ni hacen modificaciones sobre ellos. Son los componentes mas basicos
- Container Components
  - También conocidos como state components estos si interactuan con el estado de nuestra aplicación, estos ya implementan lógicas mas avanzadas y contienen por ejemplo llamados a APIs, accesos a storages y demas operaciones mas avanzadas.
- High order components
  - Cuando nos referimos a estos componentes, nos referimos a componentes que emplean otros componentes dentro de su estructura y retornan uno nuevo, es decir, son formados por uno o mas componentes por lo que encapsulan generalmente gran cantidad de funcionalidades avanzadas y de manipulación de storages y estados.
- Render props
  - Este tipo de componentes son componentes que reciben una función que retorna un HTML en esta mediante props y haciendo usa de estas generan su renderizado, por tanto son componentes que varían mucho la representación HTML resultado.

Como las recien vistas clasificaciones existen muchas mas, lo importante es entender a profundidad el concepto de los componentes y sus usos, temas de estados y props lo miraremos a profunidad mas adelante.

## Que es JSX

Miremos la siguiente linea de código.

```jsx
const element = <h1>Hello, world!</h1>;
```

Por su estructura y palabras clave podríamos decir que es cualquiera, o un código HTML o JavaScript pero realmente no se refiere a ninguna de las dos sintaxis, se refiere a JSX. JSX es una extensión de JavaScript la cual es utilizada para describir mediante código Javascript y etiquetas HTML la estructura de la interfaz de usuario de nuestra aplicación. JSX puede parecerse a un lenguaje de `templates` pero va mucho mas alla de eso y este a diferencia de las plantillas o `templates` tiene todos los elementos de JavaScript.

JSX es la sintaxis que utilizamos para definir `elementos` o `componentes` de React, de esta manera damos un paso más hacia este importante elemento con el que iniciaremos el desarrollo.

Si bien JSX no es obligatorio para el uso de React, es una practica la cual se considera de esta manera, pues facilita tanto el trabajo que sería un completo suicidio a nivel de desarrollo el no utilizarlo, aún si no te sientes comodo del todo con lenguajes de `template` o si no tienes conocimiento notarás que JSX es mucho mas amigable y manejable.

Miremos entonces algunos ejemplos de JSX para ir entrando mas en materia.

### Insertando expresiones en JSX

Miremos el siguiente ejemplo.

```jsx
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;
```

como vemos, usando las llaves hacemos uso de la variable `name`, por tanto el elemento `element` contiene una etiqueta `h1` con un texto interior de `Hello, Josh Perez`. Podemos insertar cualquier tipo de expresiones de JS dentro de llaves en JSX, desde llamadas a funciones hasta operaciones lógicas o aritmeticas.

Miremos el siguiente ejemplo mas avanzado.

```jsx
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const element = <h1>Hello, {formatName(user)}!</h1>;
```

Como vemos en este caso hacemos el llamado de una función junto con un parametro `user` el cual corresponde a una variable. Ya empezamos a imaginarnos las infinitas utilidades de esta herramienta.

**JSX también es una expresión** que luego de ser compilada se vuelve llamadas de funciones de Javascript, lo que nos permite utilizarlo dentro de elementos como controladores de flujo como condicionales, de la siguiente manera.

```jsx
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### Manejo de Atributos con JSX

Por supuesto, también podemos hacer uso de las llaves para ingresar atributos dinamicos a nuestros elementos, miremos el siguiente ejemplo.

```jsx
const element = <img src={user.avatarUrl}></img>;
const element = <a href="https://www.reactjs.org"> link </a>; //También podemos hacerlo como lo haciamos antes
```

Hay una consideración especial y es que JSX utiliza **camel case** para los nombres de los atributos, por ejemplo el atributo `class` pasa a ser `className` por lo que merece la pena estudiar los atributos que cambian de nombre en JSX.

Es importante mencionar para el entendimiento que **JSX representa objetos**, este representa llamados de la función React.createElement() que son compilados por Babel utilizando la función, es decir.

Esto.

```jsx
const element = <h1 className="greeting">Hello, world!</h1>;
```

Una vez compilado es lo mismo que esto.

```js
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

Estas son en esencia las consideraciones mas importante sobre JSX, miraremos mas herramientas de su implementación a medida que implementamos herramientas de React.

## CSS en React

Como mencionamos anteriormente algunos nombres de atributos en JSX cambian de nombre, eso es importante de tener en cuenta a la hora de por ejemplo utilizar clases dinamicas según el estado de nuestra aplicación para nuestros elementos, miremos el siguiente ejemplo.

```jsx
render() {
  let className = 'menu';
  if (this.props.isActive) {
    className += ' menu-active';
  }
  return <span className={className}>Menu</span>
}
```

Como vemos en el ejemplo al `span` se le aplica la clase `menu-active` si las propiedades del componente indican que está activo, de esta manera podemos aplicar clases dinamicas en React.

Qué pasa si queremos aplicar estilos en linea?

Lo más recomendado a la hora de utilizar estilos siempre va a ser manejarlos en archivos CSS aparte con sus respectivas clases y emplear algúna arquitectura para definir estas, sin embargo si requerimos de utilizar estilos en linea podemos utilizar la etiqueta `style` de los elementos sin problema, la cual podemos utilizar pasandole un objeto con las propiedades CSS nuevamente en **camel case** para indicarle los estilos del elemento. Miremos el siguiente ejemplo.

```jsx
const divStyle = {
  color: "blue",
  backgroundImage: "url(" + imgUrl + ")",
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```

Como vemos definimos un objeto el cual luego le pasamos utilizando las llaves al atributo style del elemento, de esta manera le asociamos los estilos, también podríamos hacerlo directamente sobre el elemento de la siguiente manera.

```jsx
function HelloWorldComponent() {
  return (
    <div
      style={{
        color: "blue",
        backgroundImage: "url(" + imgUrl + ")",
      }}
    >
      Hello World!
    </div>
  );
}
```

Sin ningún tipo de problema, definimos el objeto directamente dentro de las llaves de style.

De esta manera podemos aplicar estilos en linea a nuestros elementos, para hacerlo mediante clases, debemos importar nuestras hojas de estilos como lo sabemos hacer y luego definir las clases que implementa cada elemento.

## Creación de Componentes

Ahora si, pasemos al nucleo de React, los componentes y como crearlos.

Los componentes de React tiene dos maneras distintas de declararse, dependiendo de cual utilicemos tendremos acceso a cierto tipo de funcionalidades las cuales miraremos en el siguiente módulo, por ahora sepamos que existen los componentes de `clase` y los componentes `funcionales`, ya vimos algunas de las diferencias pero por ahora simplemente miraremos como crear componentes `funcionales`.

A partir de React 16 los componentes funcionales implementaron funcionalidades de componentes de clase que ahora los hacen perfectamente usables y por su manejo mas intuitivo para algunos, es mas recomendado utilizar estos funcionales.

Los componentes funcionales se definen como una función que retorna un elemento JSX y que recibe un parametro `props`. Como lo vemos a continuación.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Este es un componente funcional el cual retorna una etiqueta `h1`, miremos ahora como React los renderiza. Para esto miremos entonces ahora por primera vez el proyecto que creamos en secciones pasadas.

![Estructura Proyecto](./resources/EstructuraProyecto.png)

Esta es la estructura basica que crea un proyecto de React mediante el comando utilizado, este comando no solo instala una gama de librerias de React sino que instala y configura elementos como bundlers para que nuestro proyecto pueda ser ejecutado inmediatamente.

Miremos antes rapidamente los elementos que componen este proyecto.

- node_modules: En esta carpeta tenemos los modulos de Node, es un folder en el que practicamente nunca tenemos que meternos pues la gestión de estos paquetes se hace mediante la linea de comandos CLI de npm.
- public: Aquí se encuentran los archivos publicos de nuestro frontend como pueden ser iconos y por supuesto el html base llamado `index.js`, como vemos este archivo contiene un `div` con `id="root"` el cual es la base de nuestros proyectos ya miraremos por qué.
- src: Esta carpeta es donde sucede la magia, aquí encontraremos los archivos JS que construyen nuestro proyecto de React.
- .gitignore: Este archivo es una estructura basica de gitignore auto generada por npx para ayudarnos a cargar solo lo necesario cuando subamos nuestro proyecto a repositorios, es una estructura base y por supuesto puede ser modificada según requiramos.
- package-lock.json: Este es un archivo generado por npm al instalar modulos, el cual nos sirve para llevar un historial de los modulos instalados de manera de llevar una traza de los modulos instalados en nuestro proyecto, en palabras mas basicas, ayuda a npm a gestionar los paquetes de nuestro proyecto.
- package.json: Aquí se almacena la estructura de nuestro proyecto, se guarda meta-data como el nombre del proyecto, creador, licencias y de más información sobre el proyecto, así como los scripts que puede ejecutar npm con sus respectivos comandos y se encuentran todas las dependencias de nuestro proyecto para que npm pueda saber que instalar cada vez que se quiera re instalar el proyecto. Este archivo es el corazón de npm.
- README.md: Este archivo es una estructura basica de un README para el proyecto con información basica como instalación y otros comandos que podemos utilizar que vienen configurados por npx.

Ahora si, pasemos a la acción.

Ubicandonos en la ruta raiz de nuestro proyecto ejecutemos el comando `npm i` y luego `npm start`. Esto lo que hará es que npm ejecute el comando `start` el cual ya viene configurado para iniciar un listener de desarrollo de compilado de nuestra app, de manera que nuestra app correrá en un puerto configurado (por defecto 3000) y se actualizará conforme guardemos cambios en nuestros archivos y se recargara inmediatamente. Al ejecutarlo podemos esperar un mensaje como el siguiente.

![](./resources/NPMSTART.png)

Una vez veamos este mensaje no debemos cerrar la consola pues está en estado de listening nuestra aplicación de React, entonces se nos abrirá automaticamente en nuestro navegador predeterminado nuestra aplicación o en caso de que no lo haga (que no debería pasar) podemos acceder haciendo uso de los links impresos en la respuesta de la consola. La pagina por defecto de React se verá algo así.

![](./resources/React.png)

Luego entonces pasemos a ver como se genera esa pantalla que estamos visualizando.

En el archivo `index.js` en la carpeta `/src` podemos ver el siguiente código.

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

De aquí lo que nos intereza es esta fracción.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Lo que estamos haciendo aquí es que mediante la librería ReactDOM creamos un elemento raiz utilizando el elemento del DOM con id `root`, ese mismo que vimos presente en el archivo `index.html` en la carpeta `/public` y luego utilizando la función `render()` Renderizamos un elemento `<React.StrictMode>` el cual lo único que hace es eso, que todo lo que tiene dentro se ejecute en strict mode de manera que veamos muchos mas errores facilmente pues no se pasan cosas por alto, esta etiqueta la podemos eliminar sin problemas, no afecta el funcionamiento de nuestra aplicación y luego tenemos la importante que es `<App />`.

Lo que estamos haciendo aquí en resumidas cuentas es renderizando dentro de ese elemento del DOM con id `root` el componente `App`, este componente está definido en el archivo dentro de `/src` `App.js`, este presenta la siguiente estructura.

```js
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

Como vemos, contiene un componente `funcional` que contiene varios elementos HTML expresados a manera de JSX, que contienen sus clases definidas en el archivo CSS importado y aquí si visualizamos claramente de donde sale todo el contenido que vemos en nuestra pantalla principal.

> Una nota importantisima es que nuestros componentes de React deben renderizar un único componente padre, luego dentro de este cuantos se requieran pero siempre debe hace `return` de un solo elemento, si tenemos varios y no queremos utilizar un div por ejemplo para agruparlos podemos utilizar una etiqueta vacía de agrupado de React, `<></>` la cual no tiene un elemento HTML asociado pero para efectos de compilado de React resulta suficiente.

Juguemos entonces con esto que entendimos, modifiquemos por ejemplo el texto debajo del img que rota y guardemos los cambios del archivo, miremos la app y veremos el cambio reflejado inmediatamente.

![](./resources/Edit.png)

Así entonces, vemos como realmente se ven reflejados los cambios en React.

Ahora intentemos crear nuestro propio componente con sus propios estilos, para esto creemos un nuevo archivo llamado `NewComponent.js` y aquí definiremos el siguiente componente.

```js
function NewComponent() {
  return (
    <>
      <h1>New title</h1>
    </>
  );
}

export default NewCompenent;
```

Esta es la estructura minima de un componente funcional, su función que retorna el elemento a agregar al VDOM y el export claramente para que lo podamos utilizar desde otros módulos, ahora para mostrarlo en pantalla importemoslo desde `App.js` y pongamoslo en uso.

El resultado final en `App.js` se vería así.

```js
import logo from "./logo.svg";
import "./App.css";
import { NewComponent } from "./NewComponent.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          New text <code>Codeee</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NewComponent />
      </header>
    </div>
  );
}

export default App;
```

Esto generaría la siguiente salida en pantalla.

![](./resources/NewComponent.png)

Como vemos, al renderizar App se está renderizando también nuestro nuevo componente el cual está contenido en App, de esta manera podemos dejar App como nuestro componente raiz y de allí colocar cuantos hijos queramos para conformar nuestra aplicación.

> **Tip de buena practica**. Si bien React no es un Framework y como tal no define una estructura muy clara para la manera de desarrollar aplicativos, una manera muy utilizada por su orden es de organizar componentes por folders dentro de src y dentro de cada folder definir los elementos necesarios para dicho componente partiendo de un principal archivo llamado `index.js` para cada uno, miremos el siguiente ejemplo donde ponemos esta practica en uso para `NewComponent`.

Siguiendo lo anterior entonces creamos un nuevo folder llamado `NewComponent` el cual contiene inicialmente un archivo `index.js` donde hacemos la definición de nuestro componente, luego si necesitamos hojas de estilos o módulos auxiliares los definiriamos aquí mismo.

La estructura entonces quedaría de la siguiente manera.

![](./resources/BuenasPracticas.png)

Por default si no indicamos el nombre del archivo JS al indicar la ruta a importar un módulo React siempre buscará en la ruta dada un archivo llamado `index.js` por tanto para importar por ejemplo NewComponent bastará con indicar el nombre del folder donde está el `index.js` que define este componente. Así `import { NewComponent } from "./NewComponent";`.

Así entonces, como vemos en la imagen ejemplo, para cada elemento nuevo generaremos un nuevo folder, tendremos un flujo de trabajo organizado y modularizado.

## Final del módulo

Llegamos al final de este módulo donde vimos los elementos basicos para entender como funciona React, en futuros módulos vamos a ver mas herramientas de React que tenemos para crear aplicaciones mucho mas complejas e interactivas y miraremos como explotar realmente todo lo que nos ofrece React, por ahora en las actividades planeadas repasemos entonces creación de componentes e implementación de JSX para hacer componentes dinamicos.