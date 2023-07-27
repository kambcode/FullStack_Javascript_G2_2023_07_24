# Introducción a CSS

## ¿Para qué se usa CSS?

CSS (Cascading Style Sheets) se usa para dar estilo y diseño a las páginas web como cambiar fuentes, modificar colores, tamaños, incluir animaciones entre otros. La idea es que en este apartado inicies tu ruta de aprendizaje hacia el dominio de CSS con su funcionamiento básico y como añadir estilo a HTML.

## Sintaxis del CSS

Por simplicidad, CSS se estructura basado en reglas, cada usuario define las reglas que reúnen los grupos de estilos que se aplicaran a los elementos particulares de interés o grupos de elementos en múltiples páginas.

Como por ejemplo, "Quiero que los títulos tengan color verde y una fuente de 60px".

    h1 {
        color: green;
    	font-size: 60px;
    }

Entonces, la regla inicia con un selector, que pueden ser clases, id's, elementos html, selectores avanzados o conjuntos de los anteriores para aplicar de manera general un estilo.

Continuamos con un conjunto de llaves **{ }** entre estas se definirán las declaraciones a aplicar que tendrán forma de propiedad, valor separado por dos punto y terminada cada una de ellas con punto y coma.

Antes de los dos puntos encontraremos las propiedades, muchas de uso cotidiano serán fácil de recordar, pero son muchas y en ocasiones será necesario buscar en la web para escribirlas y después de los dos puntos encontraremos los valores que estaán definidos por aquellos que pueda recibir la propiedad.

## Especificaciones CSS

Todas las tecnologías de estándares web (HTML, CSS, JavaScript, etc.) se definen en extensos documentos denominados especificaciones, publicados por organizaciones de estándares (como [W3C ](https://developer.mozilla.org/en-US/docs/Glossary/W3C "Currently only available in English (US)"), [WHATWG](https://developer.mozilla.org/es/docs/Glossary/WHATWG), [ECMA ](https://developer.mozilla.org/en-US/docs/Glossary/ECMA "Currently only available in English (US)") o [Khronos (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Khronos "Currently only available in English (US)")) que definen con precisión cómo se supone que deben comportarse esas tecnologías.

El caso de CSS no es diferente: lo desarrolla un grupo del W3C llamado [CSS Working Group](https://www.w3.org/Style/CSS/). Este grupo está compuesto por representantes de proveedores de navegadores y otras compañías interesadas en CSS. También hay otras personas, conocidas como _expertos invitados_, que actúan como voces independientes y no están vinculados a ninguna organización.

# ¿Cómo se estructura el CSS?

Ya conociendo un poco el concepto de lo que es CSS y como funciona un poco su sintaxis, ahora hablemos de como estructurarlo para esto empecemos por conocer los tres métodos para aplicar CSS a un documento.

## Hoja de estilos externa

En la clase 1 tuvimos una aproximación a este comportamiento donde incluíamos entre las etiquetas `<head></head>` una línea como esta `<link rel="stylesheet" href="styles.css">` con la que incluíamos muchos estilos que modificaban la interfaz de tarea.

Este es el método más común y útil para adjuntar CSS a un documento, porque puedes vincular el CSS a varias páginas y dar estilo a todas ellas con la misma hoja de estilo; pero que implicaciones tiene esto, debemos escribir un archivo independiente con extensión .css y lo debemos vincular con la etiqueta `<link>` de HTML.

El atributo `href` del elemento [`<link>`](https://developer.mozilla.org/es/docs/Web/HTML/Element/link) tiene que hacer referencia a un archivo de tu sistema de archivos.

En el ejemplo anterior, el archivo CSS está en la misma carpeta que el documento HTML, pero puedes colocarlo en otro lugar y especificar la ruta adecuada. Por ejemplo: `<link rel="stylesheet" href="styles/style.css"> o <link rel="stylesheet" href="styles/general/style.css"> o <link rel="stylesheet" href="../styles/style.css">`.

## Hoja de estilos interna

Una hoja de estilo interna es cuando no hay ningún archivo CSS externo, sino que colocas tu CSS dentro de un elemento `<style>` contenido dentro del elemento `<head>` del HTML.

En este caso, el HTML se vería así:

    <!DOCTYPE html>
    <html>
        <head>
    	    <meta charset="utf-8">
    	    <title>Mi experimento CSS</title>
    	    <style>
    		    h1 {
    			    color: blue;
    			    background-color: yellow;
    			    border: 1px solid black;
    			}
    			p {
    				color: red;
    			}
    		</style>
    	</head>
    	<body>
    		<h1>¡Hola, mundo!</h1>
    		<p>Este es mi primer ejemplo de CSS</p>
    	</body>
    </html>

Esto puede ser útil en algunas circunstancias donde no se tenga acceso a modificar directamente los archivos css, pero no es eficiente ni recomendable pues si el cambio se necesita en muchas páginas es necesario replicar en cada una de ellas lo que lo haría inmantenible en el tiempo.

## Estilos en línea

Es en definitiva la menos recomendable de usar, pero como todo tiene su excepción, casos como CMS que solo te permitan tocar el HTML a personalizar o por ejemplo los templates para emails done usas estos estilos en línea para lograr mayor compatibilidad entre navegadores, un ejemplo de esto seriá el siguiente:

    <!DOCTYPE html>
    <html>
        <head>
    	    <meta charset="utf-8">
    	    <title>Mi experimento CSS</title>
    	</head>
    	<body>
    		<h1 style="color: blue;background-color: yellow;border: 1px solid black;">¡Hola mundo!</h1>
    		<p style="color:red;">Este es mi primer ejemplo de CSS</p>
    	</body>
    </html>

# Selectores

Como lo hablábamos en la sintaxis, toda regla de CSS comienza por un selector. Un selector es, como determinamos, un elemento de nuestro documento HTML para aplicarle estilo. Si los estilos no se aplican correctamente, es probable que el selector no coincida con lo que crees que debería coincidir.

Puede existir un solo selector para una regla así como un conjunto de selectores que permiten agrupar un aserie de elementos sobre los cuales aplica la regla, algunos ejemplos de selectores pueden ser:

    h1
    a:link
    .manythings
    #onething
    *
    .box p
    .box p:first-child
    h1, h2, .intro

Para introducirnos un poco más vamos a hablar de 2 selectores básicos adicionales a los ya antes mencionados elementos HTML, que son el selector por ID y el selector por CLASE, tanto el ID como la CLASE son atributos de los elementos HTML como por ejemplo:

    <p class="special">¿De qué color soy?</p>
    <p id="special_id">¿De qué color soy?</p>

Ambos atributos nos permiten trabajar con diferentes niveles de especificidad, si hablamos de un id, estamos buscando especificar un único elemento dentro del documento, cuando hablamos de una clase podremos hablar de un conjunto de elementos en el documento entre los que coinciden algunas reglas de estilo para aplicar de manera general. Así veríamos en nuestra hoja de estilos, algunas reglas basadas en clases y en id:

    .special {
    	color: red;
    }
    #special_id {
    	font-size: 60px;
    }

## Especificidad

Conforme hemos venido avanzando con CSS nos podremos estar preguntando en este momento, ¿qué pasa si tengo dos reglas una aplicada en línea, otra aplicada en hoja de estilos interna y otra aplicada en hoja de estilos externa? ¿cuál será el resultado final? ¿qué reglas realmente aplicaran sobre el elemento?, bueno para resolver esta inquietud hablamos de especificidad y en esto CSS es muy claro y tiene reglas para controlar cuál ganará en caso de colisión; reciben el nombre de **cascada** y **especificidad**.

Si hablamos de cascada hacemos referencia la orden en que aparecen las reglas a lo largo de una archivo css, el último en aparecer va a tener relevancia sobre los que aparecieron anteriormente, y si hablamos de especificidad podríamos decir que una clase es más específica que un elemento HTML.

Las reglas de especificidad y de cascada pueden son más fáciles de entender a medida que se van adquiriendo conocimientos de CSS. En el artículo sobre [Cascada y herencia](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance), puedes encontrar más detalle, incluyendo cómo calcular la especificidad. Por ahora, basta con saber que existe y que a veces el CSS no se aplica como esperas porque algo más en la hoja de estilo tiene una mayor especificidad. El hecho de identificar que más de una regla podría aplicarse a un elemento es el primer paso para solucionar estos problemas.

# Estilos básicos de CSS

## Estilos para texto

| Atributo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| font        | Especifica todos los atributos en una sola declaración usando el siguiente orden: font-style font-variant font-weight font-size/line-height font-family, por ejemplo:"font:15px arial,sans-serif;" "font:italic bold 18px Georgia, serif;"                                                                                                                                                                                                                                                                                                                                                                 |
| font-family | Especifica el tipo de fuente a emplear, utiliza el vínculo para leer mas información                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| font-size   | Permitir definir con toda exactitud el tamaño de las fuentes del texto contenido en un bloque especificando su tamaño en pixeles, por ejemplo: "font-size:12px;". Otra forma de definirlo es usando los siguientes valores: xx-small, x-small, small, medium, large, x-large, xx-large, smaller y larger. También para establecer la medida del texto se utiliza la unidad "em", 1em es la fuente predeterminada en una página, la relación entre em y pixeles se calcula con las siguientes fórmulas: em = pixeles/16 o pixeles= em X 16 Por ejemplo: Una fuente de 2em = 32px Una fuente de 24px = 1.5em |
| font-style  | Estilo de la fuente del texto, valores: "font-style:italic;" estilo en itálica "font-style:oblique;"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| font-weight | Especifica el grosor o no de la fuente: "font-weight:normal;" grueso normal "font-weight:bold;" grueso, conocido como negrita "font-weight:bolder;" grueso mas grueso "font-weight:lighter;" (100 a 900)                                                                                                                                                                                                                                                                                                                                                                                                   |
| color       | La propiedad de CSS color selecciona el valor de color de primer plano del contenido de elemento de texto y decoraciones de texto. por ejemplo: `/* Valores de palabras clave*/ color: currentcolor; /* Valores <named-color> */ color: red; /* Valores <hex-color> */ color: #009900; /* Valores <rgb()> */ color: rgb(34, 12, 64, 0.6); /* Valores <hsl()> */ color: hsl(30, 100%, 50%, 0.6); /* Valores Globales */ color: inherit;`                                                                                                                                                                    |
| text-align  | Especifica la alineación horizontal del texto de la siguiente forma: "text-align:left;" texto a la izquierda "text-align:center;" texto centrado "text-align:right;" texto a la derecha                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Estilos para bloques/cajas

| Atributo         | Descripción                                                                                                                                                                                                                                                                                                                                                     |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| background-color | Establece el color del fondo de un elemento. Por ejemplo en esta celda se usa: background-color: #e1f5fe;                                                                                                                                                                                                                                                       |
| background-image | Permite crear un degradado o difuminado. Por ejemplo en esta celda se usa: background-image: linear-gradient(to left, #fff, #44a0e9);                                                                                                                                                                                                                           |
| border-style     | Establece el estilo de los cuatro bordes, el parámetro estilo admite uno de los siguientes valores: "border-style:solid;" "border-style:dashed;" "border-style:double;" "border-style:groove;" "border-style:ridge;" "border-style:inset;" "border-style:outset;"                                                                                               |
| border-color     | Establece el color de los cuatro bordes                                                                                                                                                                                                                                                                                                                         |
| border-width     | Establece el ancho de los cuatro bordes definido en pixeles                                                                                                                                                                                                                                                                                                     |
| margin-left      | Se entiende por margen el espacio existente entre el bloque y el borde correspondiente de la pantalla activa del navegador. Así que el margen izquierdo será la distancia entre el lado izquierdo del bloque y el borde izquierdo de la pantalla del navegador. margin-left establece el margen a partir del lado izquierdo de un elemento expresado en pixeles |

## Estilos para posicionar un elemento

| Atributo | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| display  | La propiedad display establece la manera en que se muestra un elemento. Los elementos HTML son generalmente "inline" o "block", inline permiten tener contenido flotante a la derecha o a la izquierda, los elementos block ocupan la línea completa por lo que no admiten lo anterior. También la propiedad display permite mostrar o no un elemento usando display:none, similar a la propiedad visibility:hidden, la diferencia es que en visibility el elemento se oculta pero permanece en su lugar. Los valores que se pueden emplear son: block, compact, inline, none, inline-block, inline-table, list-item, marker, run-in, table |
| float    | Especifica si un elemento debe flotar, los valores pueden ser: left, none, right, inherit                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| position | Define el tipo de posicionamiento usado por un elemento, valores: static, relative, absolute o fixed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| z-index  | Permite establecer el orden en que debe mostrarse los elementos, solo funciona en elementos posicionados (position:absolute, position:relative, o position:fixed), por ejemplo: "z-index:1;"                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## Propiedades personalizadas o variables de CSS

En CSS, las **propiedades personalizadas** son entidades que podemos definir y que contienen valores específicos que se pueden volver a utilizar en un documento. Se establecen mediante la notación de propiedades personalizadas (por ejemplo, **`--main-color: black;`**) y se acceden mediante la función `var()`, por ejemplo, color: **`var (--main-color);`**.

### Uso básico

Para declarar propiedades personalizadas (variables) usamos un nombre que comience con dos guiones (`--`), y un valor que puede ser cualquier valor válido de CSS. Como cualquier otra propiedad, la escribimos dentro de un set de reglas de estilo, algo así:

```
elemento {
  --main-bg-color: brown;
}
```

En el ejemplo anterior, "elemento" define el scope de trabajo de la variable que se declara en su interior, más adelante hablaremos un poco más sobre el scope, por ahora fíjate en la estructura de definición de las variables.

### Valores de sustitución

Con el uso de var( ), podemos definir múltiples valores de sustitución que pueden reemplazar la definición original en caso de que esta no existe o contenga un valor erróneo, esto se puede lograr concatenando múltiples var() en el segundo argumento; cabe anotar que, los valores de sustitución no solucionan problemas de compatibilidad de navegadores, estos son útiles solo si el navegador soporta las propiedades personalizadas CSS.

Por ejemplo:

```
.dos {
  color: var(--my-var, red); /* Rojo (red) si --my-var no esta definida */
}

.tres {
  background-color: var(--my-var, var(--my-background, pink)); /* Rosa (pink) si my-var y --my-background no están definidas */
}

.tres {
  background-color: var(--my-var, --my-background, pink); /* Invalido: "--background, pink" */
}

```

Como vemos en el segundo ejemplo de arriba, la manera correcta de incluir más de un fallback es usar una propiedad personalizada como fallback (la cual tiene su propio fallback). Esta técnica se ha visto que puede causar problemas de rendimiento al tomar más tiempo analizar las variables.

### Validez y valores

La validez en el concepto de las propiedades de CSS, no es muy útil con respecto a las propiedades personalizadas. Esto a que el navegador al ver las propiedades personalizadas no sabe donde van a ser utilizadas por lo que por defecto se ve obligado a tratar los valores como válidos.

En tiempo de ejecución, las propiedades y variables personalizadas pueden llevar a declaraciones CSS no válidas, dando lugar al nuevo concepto de _válido en tiempo calculado_, lo que implica que su validez va a estar asociada al momento en que se ejecuta y/o interpreta.

### ¿Qué pasa con los valores inválidos?

Cuando el navegador encuentra una sustitución inválida con `var()`, se usará el valor inicial o heredado. Por ejemplo:

```
<p>This paragraph is initial black.</p>

```

```
:root { --text-color: 16px; }
p { color: blue; }
p { color: var(--text-color); }

```

Como esperaríamos, el navegador sustituye `var(--text-color)` con el valor de `--text-color`, pero `16px` no es un valor válido para la propiedad `color`. Después de la sustitución, la propiedad no tiene sentido. El navegador maneja esta situación en dos pasos:

1.  Comprueba si la propiedad color se puede heredar. Sí, pero el elemento `<p>` no tiene un padre con una propiedad color. Así que pasamos al siguiente paso.
2.  Toma el valor de su **valor inicial por defecto**.

### Scope y herencia de propiedades personalizadas

El selector que se use para las reglas de estilo define el ámbito (scope) en el que podremos usar la propiedad personalizada (variable). Una buena práctica común es declarar variables en la pseudo-clase `:root`, y así aplicarlas globalmente al documento HTML:

```
:root {
  --main-bg-color: brown;
}

```

**Nota:** Los nombres de propiedades personalizadas distinguen entre mayúsculas y minúsculas — `--my-color` será tratado como una propiedad personalizada distinta a `--My-color`.

Las propiedades personalizadas heredan. Lo que significa que si no se establece ningún valor para una propiedad personalizada en un elemento dado, se utiliza el valor de su elemento padre. Por ejemplo:

```
<div class="uno">
  <div class="dos">
    <div class="tres"></div>
    <div class="cuatro"></div>
  </div>
</div>

```

... con el siguiente CSS:

```
.dos {
  --test: 10px;
}

.tres {
  --test: 2em;
}

```

En este caso, los resultados de `var(--test)` son:

- Para el elemento `class="dos"`: `10px`
- Para el elemento `class="tres"`: `2em`
- Para el elemento `class="cuatro"`: `10px` (heredado de su padre)
- Para el elemento `class="uno"`: _valor no válido_.

## Funciones de css

Son funciones de apoyo que podemos utilizar en CSS para realizar cálculos u operaciones sencillas de una forma fácil y sencilla, sin tener que abandonar CSS.

### Función calc()

Es posible que en algunas ocasiones necesitemos indicar **valores pre calculados** por el navegador. Por ejemplo, la suma de dos valores que a priori desconocemos o no sabemos exactamente cuanto suman, pero que el navegador si debería conocer.

Esto es posible hacerlo con la función `calc()` de CSS, como se muestra a continuación:

```
.elemento {  width: calc(200px + 1em);  height: 300px;  background: blue;}
```

Como se puede ver, se pueden usar operaciones como sumas ( `+` ), restas ( `-` ), multiplicaciones ( `*` ) o divisiones ( `/` ) que utilicen alguna de las unidades soportadas por CSS, como por ejemplo, números, dimensiones, porcentajes, tiempos, ángulos, etc...

### Función min()

En algunas ocasiones, necesitaremos que en una propiedad se aplique un valor de varias posibilidades posibles. De dichas posibilidades, no sabremos exactamente cuál necesitamos, pero si sabremos una de sus cualidades: **es la más pequeña**, es decir, necesitamos el valor mínimo.

CSS permite realizar esto utilizando la función `min()` que nos permite elegir el valor más pequeño de 2 o más posibilidades aplicadas por parámetro:

```
.elemento {  width: min(200px, 25%);  height: 200px;  background: red;}
```

Esto aplicaría un `width` de `200px`, siempre y cuando el `25%` del elemento padre sea más grande de `200px`. Todo este cálculo, generalmente realizado en Javascript debido a su cualidad de lógica de cálculo, puede realizarse desde CSS si sólo se utiliza exclusivamente para esta finalidad.

### Función max()

De la misma forma que tenemos una función `min()`, también tenemos una función `max()`. Como podemos imaginar, dicha función sirve para lo opuesto de la función `min()`: obtener el valor máximo entre varias posibilidades.

Observa el siguiente ejemplo, donde utilizamos **más de 2 parámetros** (_ambas funciones permiten múltiples valores, no necesariamente dos_):

```
.elemento {  width: max(200px - 100px, 25%, 14vw);  height: 200px;  background: red;}
```

Observa que como se ve en el ejemplo en `200px - 100px`, tanto en `min()` como en `max()`, puedes realizar operaciones directamente en su interior sin necesidad de utilizar la función `calc()`.

Para conocer más sobre otras funciones ingresa [aquí](http://w3.unpocodetodo.info/css3/funciones_css.php)
