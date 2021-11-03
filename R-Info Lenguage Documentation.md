# R-Info Documentacion
En el siguiente documento se detalla la documentacion pertinente para entender y utilizar el entorno de programacion R-Info


<br>


## Indice
- Que es R-Info
- Estructura del programa
- Tipos de dato
- Operadores logicos
- Operadores aritmeticos
- Operadores asignacion
- Encadenamiento de operaciones
- Utilizacion de ( )
- Declaracion variables dato
- Operaciones con variables dato
- Instrucciones de control
- Instrucciones de estado
- Instrucciones de accion
- Instrucciones de desplazamiento
- Instrucciones de comunicacion
- Declaracion de modulos
- Declaracion de areas
- Declaracion de robots
- Declaracion de variables robot
- Inicializacion de robots
- Glosario de conceptos y terminos


<br>


## Que es R-Info

R-Info es un entorno de programacion donde se aprende conceptos basicos sobre como se constituye un programa y como se escribe uno, esto lo hace de manera sencilla ( con instrucciones y datos elementales o basicos en idioma español ) y didacticamente al ser un robot o varios , ubicado dentro de un mapa, el que realiza el algoritmo creado por programador

Este entorno ofrece la posibilidad de ademas de aprender lo ya mencionado tambien tiene la capacidad de trabajar con el paradigma de programacion concurrente ya que puede coexistir mas de un robot en el mismo mapa de manera que el programa tendra que estar preparado para esto si se usa mas de un robot

Sobre el mapa donde interactuan los robots este es una matriz de 100 filas y 100 columnas que simula una ciudad, llamandoce calles a las filas y avenidas a las columnas. El extremo inferior izquierdo es la avenida 1, calle 1 y el extremo superior derecho es la avenida 100, calle 100


<br>


## Estructura del programa

La estructura basica de un programa consiste de las siguientes secciones

    programa

    procesos ( no necesaria )

    areas

    robots

    variables

    comenzar

    fin

programa

    Es el apartado donde se le da el nombre al programa, este puede contener letras, guiones bajos, medios y numeros

procesos

    Es el apartado donde se pueden crear modulos (segmentos de codigo) donde se realiza una o varias tareas

    Esta seccion no es necesaria para que funcione el programa, puede ser omitida

areas

    Es el apartado donde se designan la zona del mapa donde un robot puede interactuar

robots

    Es el apartado donde se crean los algoritmos que determinan la interaccion y/o acciones que realiza determinado tipo de robot

variables

    Es el apartado donde se crean las variables de un determinado tipo de tobot

comenzar ... fin

    Es el apartado donde se asignan la/s area/s a las variable/s robot/s y a su ves el posicionamiento inicial en el mapa para cada variable robot que exista

IMPORTANTE: todas las secciones se detallaran con mas informacion a lo largo de la documentacion


<br>


## Tipos de dato

Para trabajar con informacion o valores se disponen dos formas de representacion

numero

    El tipo de dato numero se utiliza para representar cantidades, es decir, como los el conjunto de los numeros enteros en matematica

    Estos van desde el -2^31 ( -2.147.483.648 ) hasta el 2^31 ( 2.147.483.648 )

booleano

    El tipo de dato booleano se utiliza para representar si algo es verdad o si algo es falso, es decir, la veracidad de una afirmacion o sentencia

    Sus dos unicos posible valores son

        "V" para representar la verdad
        "F" para representar la falsedad
    
    Tambien se puede utilizar para representar:
    
        - Existencia o inexistencia
        - Permitido/habilitado o no permitido/no habilitado


<br>


## Operadores logicos

Los operadores logicos dan como resultado valores booleanos, es decir, verdad o falsedad dependiendo de las entradas

Operadores para datos booleanos:
| Sintaxis | Nombre/s |
| :-: | :-: |
| ~ | negacion , no |
| &#124; | disyuncion , ó |
| & | conjuncion , y |
| = | igualacion , igual |
| <> | diferente , distinto |

Operadores para datos numericos
| Sintaxis | Nombre/s |
| :-: | :-: |
| = | igualacion , igual |
| <> | diferente , distinto |
| < | menor |
| &#62; | mayor |
| <= | menor ó igual | 
| &#62;= | mayor ó igual |

> Para simplificacion verdad equivaldra a V y falsedad a F

### Operador ~

El no es un operador unario (se aplica en solo un valor), este cambia el valor logico al opuesto

Su tabla de verdad es:

| Entrada | Resultado |
| :-: | :-: |
| ~F | V |
| ~V | F |

### Operador |

El o es un operador binario (se aplica entre dos valores), este da como resultado verdad si almenos uno de los valores es verdad

Su tabla de verdad es:

| Entrada | Resultado |
| :-: | :-: |
| F &#124; F | F |
| V &#124; F | V |
| F &#124; V | V |
| V &#124; V | V |

### Operador &

El y es un operador binario (se aplica entre dos valores), este da como resultado verdad si solo si ambos valores son verdad

Su tabla de verdad es:

| Entrada | Resultado |
| :-: | :-: |
| F & F | F |
| V & F | F |
| F & V | F |
| V & V | V |

### Operador =

El igual es un operador binario (se aplica entre dos valores), este da como resultado verdad si solo si ambos valores son iguales respetando que sean el mismo tipo de dato

Su tabla de verdad con valores booleanos es:

| Entrada | Resultado |
| :-: | :-: |
| F = F | V |
| V = F | F |
| F = V | F |
| V = V | V |

Su tabla de verdad con valores numericos es:

| Entrada | Resultado |
| :-: | :-: |
| 1 = 1 | V |
| 1 = 47 | F |
| 99 = -5 | F |
| -22 = -22 | V |


### Operador =

El igual es un operador binario (se aplica entre dos valores), este da como resultado verdad si solo si ambos valores son diferentes respetando que sean el mismo tipo de dato

Su tabla de verdad con valores booleanos es:

| Entrada | Resultado |
| :-: | :-: |
| F <> F | F |
| V <> F | V |
| F <> V | V |
| V <> V | F |

Su tabla de verdad con valores numericos es:

| Entrada | Resultado |
| :-: | :-: |
| 1 <> 1 | F |
| 1 <> 47 | V |
| 99 <> -5 | V |
| -22 <> -22 | F |

### Operador <

El menor es un operador binario (se aplica entre dos valores), este da como resultado verdad si solo si el primer valor es mas pequeño que el segundo

Su tabla de verdad con valores numericos es:

| Entrada | Resultado |
| :-: | :-: |
| 1 < 1 | F |
| 1 < 47 | V |
| 99 < -5 | F |
| -22 < -22 | F |

### Operador >

El mayor es un operador binario (se aplica entre dos valores), este da como resultado verdad si solo si el primer valor es mas grande que el segundo

Su tabla de verdad con valores numericos es:

| Entrada | Resultado |
| :-: | :-: |
| 1 > 1 | F |
| 1 > 47 | F |
| 99 > -5 | V |
| -22 > -22 | F |


### Operador <=

El menor o igual es un operador binario (se aplica entre dos valores), este da como resultado verdad si primer valor es mas pequeño que el segundo o si los dos valores son iguales

Su tabla de verdad con valores numericos es:

| Entrada | Resultado |
| :-: | :-: |
| 1 <= 1 | V |
| 1 <= 47 | V |
| 99 <= -5 | F |
| -22 <= -22 | V |

### Operador >=

El mayor o igual es un operador binario (se aplica entre dos valores), este da como resultado verdad si primer valor es mas grande que el segundo o si los dos valores son iguales

Su tabla de verdad con valores numericos es:

| Entrada | Resultado |
| :-: | :-: |
| 1 >= 1 | V |
| 1 >= 47 | F |
| 99 >= -5 | V |
| -22 >= -22 | V |


<br>


## Operadores aritmeticos

Los operadores aritmeticos dan como resultado valores numericos enteros dependiendo de las entradas

Operadores
| Sintaxis | Nombre/s |
| :-: | :-: |
| + | adicion , suma |
| - | sustraccion , resta |
| * | producto , multiplicacion |
| / | , division |


<br>


## Operadores asignacion

Los operadores de asignacion se utilizan para decir el tipo de dato de una variable o para darle el valor a una variable

Operadores
| Sintaxis | Nombre/s |
| :-: | :-: |
| : | asignacion |
| := | asignacion |

### Operador :

El : se utiliza para decir que x variable sera de cierto tipo

| Utilizacion |
| :-: |
| (nombre variable) : (tipo de dato) |

### Operador :=

El := se utiliza para decir que x variable asumira un valor respetando el tipo de dato que representa la variable

| Utilizacion |
| :-: |
| (nombre variable) := (valor a dar) |


<br>


## Encadenamiento de operaciones

Como en las matematicas se pueden armar ecuaciones con valores y operaciones, esto no es la exepcion, por ende para encadenar operaciones solo se necesitan los valores/variables y operaciones que operen con estos

Ejemplo con numeros

    Si se quiere sumar el doble de 9 con la mitad de 16, se debe hacer

    2 * 9 + 16 / 2 , esto da como resultado 26

Ejemplo con booleanos

    Si se quiere saber si dos valores son verdaderos o un tercero negado es verdadero se deb hacer

    V & F | ~ F , esto da como resultado V

Ejemplo con numeros y booleanos

    Normalmente se realizan operaciones aritmeticas y a esos resultados se aplican operadores logicos correspondientes de manera que el resultado final sean valores booleanos que reflejen un estado

    Se quiere saber si el doble de 10 es menor a la mitad de 34

    2 * 10 < 34 / 2 = V , el resultado de esto seria falso si no fuera problema el echo de que no queda claro el orden de las operaciones, para eso se utilizan los ( )


<br>


## Utilizacion de ( )

Los parentesis son de gran importancia ya que permiten denotar prioridad a la hora de la resolucion de un encadenamiento de operaciones, como se bio anteriormente en determinadas circunstancias es necesario indicar la prioridad para una correcta operacion y tambien para evitar confusiones

IMPORTANTE: siempre que existe "(", un parentesis de apertura, debe existir su correspondiente ")", parentesis de cierre,

Reestructuracion de ejemplo previo

    Con el uso de parentesis el ejemplo "Se quiere saber si el doble de 10 es menor a la mitad de 34", se debe escribir como

    ( 2 * 10 ) < ( 34 / 2 ) = V , el resultado es F

    Ahora queda claro que primero deben resolverse las operaicones aritmeticas y luego las logicas

La utilizacion de parentesis permite realizar encadenamiento de operaciones mas complejas

Por ejemplo

    Se quiere saber si dos valores son verdaderos o si es verdadera la negacion de un tercero o el valor de un cuarto

    ( F & V ) | ( ( ~V ) | V ), el resultado es V


<br>


## Declaracion de variables dato
para declarar variables se necesita crear el segmento de varibales escribiendo la palabra clave **varibales**

los tipos posible de variables son:
- numero: para representar numeros enteros
- boolean: para representar valores logicos, verdadero o falso

la creacion de la variable sigue la siguiente estructura
nombreDeLaVariable : tipoDeVariable


<br>


## Operaciones con variables dato

Como se definio previamente las variables representan valores por lo tanto existen las operaciones que definimos tambien previamente

Basicamente las operaciones con variables se dividne en dos grandes grupos, las que involucran lectura de una variable o por el otro las que involucran escritura a una variable

Lectura

    Para la utilizacion de el valor que representa una variable es tan sencillo como poner el nombre de variable en el lugar donde corresponderia que este el valor que esta representa

    Por ejemplo:
    
        Si se quiere sumar dos numeros, siendo uno la variable num1 y otro la variable num 2 lo que se debe hacer es

        num1 + num2

    Otro ejemplo:
        Si se quiere asegurar que dos variables booleanas, siendo una estado1 y otra estado2, sean verdaderas lo que se debe hacer es

        estado1 & estado2

Escritura

    Para la escritura de un valor en una variable se debe poner la variable a escribir o reescribir su valor luego la sintaxis de asignacion ( := ) y a continuacion el valor explicito o las operaciones que den como resultado un valor, siempre respetando los tipos de dato

    Por ejemplo:

        Si se quiere guardar en la variable resultado el doble de una variable, lo que se debe hacer es

        resultado := 2 * ( nombreDeLaVariable )

        o bien como la multiplicacion es distributiva

        resultado := ( nombreDeLaVariable ) * 2
    
    Otro ejemplo:

        Si se quiere guardar el valor apuesto a la verificacion de si una variable numerica es mayor o igual a otra, lo que se debe hacer es

        validacionOpuesta := ~ ( n1 >= n2 )

        o bien se puede descomponer la tarea dos pasos

        validacionOpuesta := ( n1 >= n2 )

        validacionOpuesta := ~ validacionOpuesta
    
    Es muy Importante resaltar que la variable a ser escrita puede ser leida para el calculo del valor a escribir en ella ya que primero se calcula el valor final a escribir y luego se guarda


<br>


## Instrucciones de control

Las intrucciones de control son las que permiten que se ejecute cierta codigo o no, con esto se consigue que un programa reaccione dependiendo de ciertos valores o circunstancias

Las instrucciones se dividen en dos grupo iterativas o no interativas

No iterativas: solo ejecutan el codigo que les presigue una unica vez

Iterativas: pueden ejecutar el codigo que les presigue 1 o mas veces

Instrucciones:

| Sintaxis | Iterativa |
| :-: | :-: |
| si ( condicion/es) | no |
| sino | no |
| mientras ( condicion/es) | si |
| repetir ( numero ) | si |

### Instruccion si

La instruccion si se utiliza para habilitar o no la ejecucion del bloque de codigo que este identado debajo de esta, este solo se ejecutara si solo si el resultado de la condicion que acompaña al si sea verdadera

Estructura del si

    si ( condicion )
        bloque
        de codigo
        a ejecutar

Un ejemplo de uso del si es guardar el maximo entre dos numeros

    si ( n1 > n2 )
        max := n1
    si ( n2 > n1 )
        max := n2

### Instruccion sino

La instruccion sino solo se puede utilizar si previamente existe una instruccion si, ya que esta actua en consecuencia del si. El sino se utiliza para habilitar la ejecucion del bloque de codigo que este identado debajo de este si solo si la condicion que evalua el si dio falsa

Estructura del sino

    si ( condicion )
        bloque
        de codigo
        a ejecutar
    sino
        bloque
        de codigo
        a ejecutar

Optimizando el maximo entre dos numeros

    si ( n1 > n2 )
        max := n1
    sino
        max := n2

No hace falta verificar si n2 es mayor a n1 ya que la primera condicion de dar falso significa que n2 es igual o mayor a n1, en el caso de no querer escribir en max un valor si n1 = n2, entonces se puede usar otro si

    si ( n1 > n2 )
        max := n1
    sino
        si ( n2 > n1 )
            max := n2

Otra variante con el mismo efecto es

    si ( n1 > n2 )
        max := n1
    sino
        si ( n1 <> n2 )
            max := n2


### Instruccion mientras

La instruccion mientras se utiliza para ejecutar cierto bloque de codigo que este identado debajo de esta tantas veces como la condicion que evalua el mientras de verdad, en caso contrario no ejecuta el codigo y sigue con lo que este por fuera

Estructura del mientras

    mientras ( condicion )
        bloque
        de codigo
        a ejecutar

Un ejemplo es multiplicar un numero por si mismo mientras no supere un maximo o se multiplique un maximo de 5 veces

    mientras ( ( n < max ) | ( cont < 5 ) )
        n := n * n
        cont := cont +1


### Instruccion repetir

La instruccion repetir se utiliza para ejecutar cierto bloque de codigo que este identado debajo de esta tantas veces como lo indique la variable o valor explicito que presigue a la instruccion

Estructura del repetir

    repetir ( cantidad )
        bloque
        de codigo
        a ejecutar

Un ejemplo es calcular la potencia de cierto numero

    repetir exponente
        res := res * base


<br>



## Instrucciones de estado

Las instrucciones de estado son las que devuelven un dato que representa el estado de cierta caracteristica del robot con respecto al mapa o a su inventario

Respecto del mapa existen las instrucciones

| Sintaxis | Tipo de dato que devuelve | Descripcion |
| :-: | :-: | :-: |
| PosAv | numero | El numero representa la avenida actual del robot |
| PosCa | numero | El numero representa la calle actual del robot |
| HayFlorEnLaEsquina | boolean | El booleano representa si hay una flor en la esquina actual |
| HayPapelEnLaEsquina | boolean | El booleano representa si hay un papel en la esquina actual |

Repecto del inventario existen las intrucciones

| Sintaxis | Tipo de dato que devuelve | Descripcion |
| :-: | :-: | :-: |
| HayFlorEnLaBolsa | boolean | El booleano representa si hay una flor en el inventario |
| HayPapelEnLaBolsa | boolean | El booleano representa si hay un papel en el inventario |


<br>


## Instrucciones de accion

Las instrucciones de accion son las que permiten al robot la interaccion de su inventario con respecto al mapa y viseversa

Existen las siguientes instruccion

| Sintaxis | Accion |
| :-: | :-: |
| tomarFlor | toma una flor de la esquina actual y la guarda en el inventario |
| tomarPapel | toma un papel de la esquina actual y lo guarda en el inventario |
| depositarFlor | deposita una flor del inventario en la esquina actual |
| depositarPapel | deposita un papel del inventario en la esquina actual |

IMPORTANTE: de no existir el elemento para la accion ( flor o papel ) el resultado es un error


<br>


## Instrucciones de desplazamiento

Para el desplazamiento del robot en el mapa existen las siguientes instrucciones

| Sintaxis |
| :-: |
| mover |
| derecha |
| Pos( avenida, calle ) |

IMPORTANTE: tener en cuenta que los desplazamientos tienen que ser validos con respecto a las dimensiones del mapa, el area designada al robot y la posicion de los otros robots de existir otros

### Instruccion mover

La instruccion mover se utiliza para desplazar al robot 1 posicion en la direccion que se encuentre mirando

| Direccion | Posicion resultado |
| :-: | :-: |
| arriva | avenidaActual +1, calleActual |
| derecha | avenidaActual, calleActual +1 |
| abajo | avenidaActual -1, calleActual |
| izquierda | avenidaActual, calleActual -1 |

### Instruccion derecha

La instruccion derecha se utiliza para cambiar la direccion que se encuentra mirando por la consecutiva en sentido horario

| Direccion base | Direccion resultado |
| :-: | :-: |
| arriva | derecha |
| derecha | abajo |
| abajo | izquierda |
| izquierda | arriva |

### Instruccion Pos

La instruccion Pos se utiliza para ubicar al robot en un par ( avenida, calle ) determinado

| Sintaxis |
| :-: |
| Pos( numeroDeAvenida, numeroDeCalle ) |

Ejemplos

    Pos( 1, 33 ) , el resultado es que el robot ahora se encuentra en la avenida 1 y calle 33

    Pos( 50, 50 ) el resultado es que el robot ahora se encuentra en la avenida 50 y calle 50
    
    Pos( -88, 45 ) el resultado es un error ya que el numero de avenida debe estar dentro del rango 1 - 100


<br>


## Instrucciones de comunicacion de robot

## Declaracion de modulos

## Declaracion de areas

## Declaracion de robots

## Declaracion de variables robot

## Inicializacion de robots


## Glosario de conceptos y terminos

1. camelCase: es la escritura de un conjunto de palabras donde se intercambian los espacios por la mayuscula de la palabra siguiente

1. UpperCamelCase: como camelCase pero la primera palabra tambien comienza con mayuscula

1. lower_camel_case: a diferencia del camelCase de esta forma se reemplazan los espacios por guiones bajos

1. Declarar: es la creacion de algo

1. Inicializar: es darle el primer valor

1. Asignar: es darle un valor a una variable

1. Parametro actual: son las variables o valores que se le envian a un modulo

1. Parametro formal: son las variables donde se reciben los valores que necesita el modulo para realizar su/s tareas/s y donde de ser necesario devuelve informacion

1. Variable: espacio de memoria donde se guarda algun valor, este espacio se representa con el nombre que se le da a la variable y a travez de la utilizacion del nombre se puede acceder al valor y/o sobreescribirlo

1. Condicion: valor booleano u operacion logica ( tambien puede ser conjunto de operaciones logicas ) que determina si se realiza o no determinada instruccion/es+

1. Validacion: es el acto de verificar si se cumplen determinadas condiciones/valores

1. Sintaxis: palabras y/o conjunto de caracteres que el lenguage de programacion utiliza para determinadas funciones/propositos/instrucciones

1. Identacion: dejar un espacio determinado antes de una linea de codigo para indicar que pertenecen a cierto bloque de codigo y/o seccion del programa

1. Bloque de codigo: conjunto de lineas de codigo con la misma identacion que se ejecutan juntas en el orden en el que estan escritas
