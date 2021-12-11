# Documentacion Lenguaje R-Info

En el siguiente documento se detalla la informacion pertinente para entender y escribir en el lenguage de programacion R-Info


> **El uso de este material es bajo el consentimiento del propio usuario** 



<br> <br> <br>



## **Indice**
- [¿Qué es R-Info?](#que-es-r-info)
- [Estructura del programa](#estructura-del-programa)
- [Tipos de dato](#tipos-de-dato)
- [Operadores](#operadores)
    - [Lógicos](#logicos)
    - [Aritméticos](#aritmeticos)
    - [Asignación](#asignacion)
    - [Encadenamiento](#encadenamiento)
    - [Paréntesis](#parentesis)
- [Variables dato](#variables-dato)
    - [Declaración](#declaracion)
    - [Operaciones](#operaciones)
- [Instrucciones](#instrucciones)
    - [Control](#control)
    - [Estado](#estado)
    - [Acción](#accion)
    - [Desplazamiento](#desplazamiento)
    - [Comunicación](#comunicacion)
    - [Generación](#generacion)
- [Secciones](#secciones)
    - [programa](#programa)
    - [procesos](#procesos)
    - [areas](#areas)
    - [robots](#robots)
    - [variables](#variables)
    - [comenzar y fin](#comenzar-y-fin)
- [Glosario](#glosario)



<br> <br> <br>



## **¿Qué es R-Info?**

R-Info es un entorno de programación donde se aprende conceptos básicos sobre como se constituye un programa y como se escribe uno, esto lo hace de manera sencilla ( con instrucciones y datos elementales o básicos en idioma español ) y didacticamente al ser un robot o varios, ubicado dentro de un mapa, el que realiza el algoritmo creado por programador.

Este entorno ofrece la posibilidad de ademas de aprender lo ya mencionado también tiene la capacidad de trabajar con el paradigma de programación concurrente, ya que puede coexistir mas de un robot en el mismo mapa, de manera que el programa tendrá que estar preparado para esto si se usa mas de un robot.

Sobre el mapa donde interactuan los robots este es una matriz de 100 filas y 100 columnas que simula una ciudad, llamándose calles a las filas y avenidas a las columnas. El extremo inferior izquierdo es la avenida 1, calle 1 y el extremo superior derecho es la avenida 100, calle 100.

[indice](#indice)



<br> <br> <br>



## **Estructura del programa**

La estructura básica de un programa consiste de las siguientes secciones:

    programa

    procesos ( no necesaria )

    areas

    robots

    variables

    comenzar
    fin


<br> <br>


- **programa**

    Es donde se le da el nombre al programa.

- **procesos**

    Es donde se pueden crear módulos (segmentos de código) que realizen una o varias tareas.

- **areas**

    Es donde se declaran los tipos de areas del mapa.

- **robots**

    Es donde se crean los algoritmos que determinan la interacción y/o acciones que realiza determinado tipo de robot.

- **variables**

    Es donde se crean las variables de un determinado tipo de robot.

- **comenzar fin**

    Es el apartado donde se asignan la/s area/s y el posicionamiento inicial en el mapa para cada variable robot que exista.

> IMPORTANTE: todas las secciones se detallan en el apartado de [Secciones](#secciones)

[indice](#indice)



<br> <br> <br>



## **Tipos de dato**

Para trabajar con información o valores se disponen dos formas de representación:


<br> <br>


## número

El tipo de dato número se utiliza para representar cantidades, es decir, como el conjunto de los números enteros en matemática.

Estos van desde el -2^31 ( -2.147.483.648 ) hasta el 2^31 ( 2.147.483.648 )

<br>

## booleano

El tipo de dato booleano se utiliza para representar si algo es verdad o si algo es falso, es decir, la veracidad de una afirmación o sentencia.

Sus dos unicos posible valores son:

- "V" para representar la verdad.
- "F" para representar la falsedad.

También se puede utilizar para representar subjetivamente como:

- Existencia o inexistencia
- Permitido/habilitado o no permitido/no habilitado

[indice](#indice)



<br> <br> <br>



## **Operadores**

Dentro de la sintaxis del lenguaje se encuentran los operadores que son un conjunto de caracteres que permiten la manipulación y/o comparación de valores explícitos o en variables.


<br> <br>


## Lógicos

Los operadores lógicos dan como resultado valores booleanos, es decir, verdad o falsedad dependiendo de las entradas.

Operadores para datos booleanos:
| Sintaxis | Nombre/s |
| :-: | :-: |
| ~ | negación , no |
| &#124; | disyunción , ó |
| & | conjunción , y |
| = | igualación , igual |
| <> | diferente , distinto |

Operadores para datos númericos:
| Sintaxis | Nombre/s |
| :-: | :-: |
| = | igualación , igual |
| <> | diferente , distinto |
| < | menor |
| &#62; | mayor |
| <= | menor ó igual | 
| &#62;= | mayor ó igual |

> Para simplificación verdad equivaldra a V y falsedad a F.

<br>

### Operador ~

El no es un operador unario (se aplica en solo un valor), este cambia el valor lógico al opuesto.

Su tabla de verdad es:

| Entrada | Resultado |
| :-: | :-: |
| ~F | V |
| ~V | F |

<br>

### Operador |

El o es un operador binario (se aplica entre dos valores), este da como resultado verdad si almenos uno de los valores es verdad.

Su tabla de verdad es:

| Entrada | Resultado |
| :-: | :-: |
| F &#124; F | F |
| V &#124; F | V |
| F &#124; V | V |
| V &#124; V | V |

<br>

### Operador &

El y es un operador binario (se aplica entre dos valores), este da como resultado verdad si y solo si ambos valores son verdad.

Su tabla de verdad es:

| Entrada | Resultado |
| :-: | :-: |
| F & F | F |
| V & F | F |
| F & V | F |
| V & V | V |

<br>

### Operador =

El igual es un operador binario (se aplica entre dos valores), este da como resultado verdad si y solo si ambos valores son iguales, respetando que sean el mismo tipo de dato.

Su tabla de verdad con valores booleanos es:

| Entrada | Resultado |
| :-: | :-: |
| F = F | V |
| V = F | F |
| F = V | F |
| V = V | V |

Su tabla de verdad con valores númericos es:

| Entrada | Resultado |
| :-: | :-: |
| 1 = 1 | V |
| 1 = 47 | F |
| 99 = -5 | F |
| -22 = -22 | V |

<br>

### Operador <>

El desigual es un operador binario (se aplica entre dos valores), este da como resultado verdad si y solo si ambos valores son diferentes, respetando que sean el mismo tipo de dato.

Su tabla de verdad con valores booleanos es:

| Entrada | Resultado |
| :-: | :-: |
| F <> F | F |
| V <> F | V |
| F <> V | V |
| V <> V | F |

Su tabla de verdad con valores númericos es:

| Entrada | Resultado |
| :-: | :-: |
| 1 <> 1 | F |
| 1 <> 47 | V |
| 99 <> -5 | V |
| -22 <> -22 | F |

<br>

### Operador <

El menor es un operador binario (se aplica entre dos valores), este da como resultado verdad si y solo si el primer valor es mas pequeño que el segundo.

Su tabla de verdad con valores númericos es:

| Entrada | Resultado |
| :-: | :-: |
| 1 < 1 | F |
| 1 < 47 | V |
| 99 < -5 | F |
| -22 < -22 | F |

<br>

### Operador >

El mayor es un operador binario (se aplica entre dos valores), este da como resultado verdad si y solo si el primer valor es mas grande que el segundo.

Su tabla de verdad con valores numericos es:

| Entrada | Resultado |
| :-: | :-: |
| 1 > 1 | F |
| 1 > 47 | F |
| 99 > -5 | V |
| -22 > -22 | F |

<br>

### Operador <=

El menor o igual es un operador binario (se aplica entre dos valores), este da como resultado verdad si el primer valor es mas pequeño que el segundo o si los dos valores son iguales.

Su tabla de verdad con valores númericos es:

| Entrada | Resultado |
| :-: | :-: |
| 1 <= 1 | V |
| 1 <= 47 | V |
| 99 <= -5 | F |
| -22 <= -22 | V |

<br>

### Operador >=

El mayor o igual es un operador binario (se aplica entre dos valores), este da como resultado verdad si el primer valor es mas grande que el segundo o si los dos valores son iguales.

Su tabla de verdad con valores númericos es:

| Entrada | Resultado |
| :-: | :-: |
| 1 >= 1 | V |
| 1 >= 47 | F |
| 99 >= -5 | V |
| -22 >= -22 | V |

[Operadores ⬆](#operadores)


<br> <br>


## Aritméticos

Los operadores aritméticos dan como resultado valores númericos enteros dependiendo de las entradas.

Operadores
| Sintaxis | Función |
| :-: | :-: |
| + | adición , suma |
| - | sustracción , resta |
| * | producto , multiplicación |
| / | , división |

<br>

## Asignación

Los operadores de asignación se utilizan para decir el tipo de dato de una variable o para darle el valor a una variable.

Operadores
| Sintaxis | Función |
| :-: | :-: |
| : | asignación |
| := | asignación |

<br>

### Operador :

El : se utiliza para decir que x variable sera de cierto tipo.

| Utilización |
| :-: |
| (nombre variable) : (tipo de dato) |

<br>

### Operador :=

El := se utiliza para decir que x variable asumirá un valor respetando el tipo de dato que representa la variable.

| Utilización |
| :-: |
| (nombre variable) := (valor a dar) |

El valor a dar puede ser un valor explícito u otra variable.

[Operadores ⬆](#operadores)


<br> <br>


## Encadenamiento

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

    2 * 10 < 34 / 2 = V

El resultado de lo anterior seria falso si no fuera problema el echo de que no queda claro el orden de las operaciones, para eso se utilizan los ( )

[Operadores ⬆](#operadores)


<br> <br>


## Parentesis

Los parentesis son de gran importancia ya que permiten denotar prioridad a la hora de la resolucion de un encadenamiento de operaciones, como se bio anteriormente en determinadas circunstancias es necesario indicar la prioridad para una correcta operacion y tambien para evitar confusiones

> IMPORTANTE: siempre que existe un " ( ", un parentesis de apertura, debe existir su correspondiente " ) ", parentesis de cierre

Reestructuracion de ejemplo previo

    Se quiere saber si el doble de 10 es menor a la mitad de 34

    ( 2 * 10 ) < ( 34 / 2 ) = V , el resultado es F

Ahora queda claro que primero deben resolverse las operaicones aritmeticas y luego las logicas

La utilizacion de parentesis permite realizar encadenamiento de operaciones mas complejas

Por ejemplo

    Se quiere saber si dos valores son V o si es V la negacion de un tercero o el valor de un cuarto

    ( F & V ) | ( ( ~ V ) | V ), el resultado es V

[Operadores ⬆](#operadores)

[indice](#indice)



<br> <br> <br>



## **Variables dato**

Una variable es un espacio de memoria donde se guarda algun valor que representa cierto dato, este espacio se representa para el programador con el nombre que se le da a la variable y a travez de la utilizacion del nombre se puede acceder al valor para leerlo o cambiarlo


<br> <br>


## Declaracion

Para declarar variables se necesita crear el segmento de varibales escribiendo la palabra clave **variables**, este segmento no puede ser creado en cualquier lugar, revisar el apartado de [secciones](#secciones), ahi se detalla si en una seccion pueden existir variables dato

Los tipos posible de variables son:
- numero: para representar numeros enteros
- boolean: para representar valores logicos, verdadero o falso

La creacion de la variable sigue la siguiente estructura

    variables
        nombreDeLaVariable : tipoDeVariable

Se pueden crear la cantidad que se necesiten

    variables
        nombre1 : tipo1
        nombre2 : tipo2
        nombre3 : tipo2
        nombre4 : tipo1

Si son del mismo tipo pueden declararse juntas separadas por una ","

    variables
        nombre1, nombre4 : tipo1
        nombre2, nombre3 : tipo2

[Variables dato ⬆](#variables-dato)


<br> <br>


## Operaciones

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
    
> IMPORTANTE: la variable a ser escrita puede ser leida para el calculo del valor a escribir en ella ya que primero se calcula el valor final a escribir y luego se guarda


[Variables dato ⬆](#variables-dato)

[indice](#indice)



<br> <br> <br>



## **Instrucciones**

Dentro de la sintaxis del lenguaje se encuentran las instrucciones que permiten realizar determinadas tareas/acciones

Estas se dividen en
- [Control](#control)
- [Estado](#estado)
- [Accion](#accion)
- [Desplazamiento](#desplazamiento)
- [Comunicacion](#comunicacion)
- [Generacion](#generacion)


<br> <br>


## Control

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

<br>

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

<br>

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

<br>

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

<br>

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

[Instrucciones ⬆](#instrucciones)


<br> <br>


## Estado

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

[Instrucciones ⬆](#instrucciones)


<br> <br>


## Accion

Las instrucciones de accion son las que permiten al robot la interaccion de su inventario con respecto al mapa y viseversa

Existen las siguientes instruccion

| Sintaxis | Accion |
| :-: | :-: |
| tomarFlor | toma una flor de la esquina actual y la guarda en el inventario |
| tomarPapel | toma un papel de la esquina actual y lo guarda en el inventario |
| depositarFlor | deposita una flor del inventario en la esquina actual |
| depositarPapel | deposita un papel del inventario en la esquina actual |

> IMPORTANTE: de no existir el elemento para la accion ( flor o papel ) el resultado es un error

[Instrucciones ⬆](#instrucciones)


<br> <br>


## Desplazamiento

Para el desplazamiento del robot en el mapa existen las siguientes instrucciones

| Sintaxis |
| :-: |
| mover |
| derecha |
| Pos( avenida, calle ) |

> IMPORTANTE: tener en cuenta que los desplazamientos tienen que ser validos con respecto a las dimensiones del mapa, el area designada al robot y la posicion de los otros robots de existir otros

<br>

### Instruccion mover

La instruccion mover se utiliza para desplazar al robot 1 posicion en la direccion que se encuentre mirando

| Direccion | Posicion resultado |
| :-: | :-: |
| arriva | avenidaActual +1, calleActual |
| derecha | avenidaActual, calleActual +1 |
| abajo | avenidaActual -1, calleActual |
| izquierda | avenidaActual, calleActual -1 |

<br>

### Instruccion derecha

La instruccion derecha se utiliza para cambiar la direccion que se encuentra mirando por la consecutiva en sentido horario

| Direccion base | Direccion resultado |
| :-: | :-: |
| arriva | derecha |
| derecha | abajo |
| abajo | izquierda |
| izquierda | arriva |

<br>

### Instruccion Pos

La instruccion Pos se utiliza para ubicar al robot en un par ( avenida, calle ) determinado

| Sintaxis |
| :-: |
| Pos( numeroDeAvenida, numeroDeCalle ) |

Ejemplos

    Pos( 1, 33 ) resulta en que el robot ahora se encuentra en la avenida 1 y calle 33

    Pos( 50, 50 ) resulta en que el robot ahora se encuentra en la avenida 50 y calle 50
    
    Pos( -88, 45 ) resulta en error ya que el numero de avenida debe estar dentro del rango 1 - 100

[Instrucciones ⬆](#instrucciones)


<br> <br>


## Comunicacion

La comunicacion es la tranferencia de mensajes hacia el usuario o entre robots

Las instrucciones son
- Informar
- EnviarMensaje
- RecibirMensaje

<br>

### Instruccion Informar

Para la comunicacion con el usuario, en otras palabras mostrar informacion en pantalla, existe la instruccion Informar

| Sintaxis |
| :-: |
| Informar( 'cadenaDeCaracteres', valor ) |

> IMPORTANTE: el primer parametro no es necesario, puede no utilizarse. El segundo parametro es un valor explicito o variable de cualquier tipo

Ejemplo de uso

    Informar( 16 )
    Informar( 'minimo', cantMin )
    Informar( V )
    Informar( floresJuntadas )

<br>

### Instruccion EnviarMensaje

Esta instruccion se utiliza para enviar un valor a un receptor determinado, siendo una variable robot el receptor

| Sintaxis |
| :-: |
| EnviarMensaje( valor, nombreVariableRobot ) |

> IMPORTANTE: el primer parametro es un valor explicito o variable de cualquier tipo

Esta instruccion es asincronica, es decir, se ejecuta y continua la ejecucion. Al emisor del mensaje no le afecta si el receptor esta esperando o no el mensaje

Ejemplo de uso

    EnviarMensaje( 16, robot1 )
    EnviarMensaje( min, trabajador )
    EnviarMensaje( V, organizador )

<br>

### Instruccion RecibirMensaje

Esta instruccion se utiliza para recibir un valor de un emisor determinado o no determinado, siendo una variable robot el emisor

| Sintaxis | Emisor |
| :-: | :-: |
| RecibirMensaje( variableReceptora, nombreEmisor ) | especifico |
| RecibirMensaje( variableReceptora, * ) | cualquiera |

Esta instruccion es sincronica, es decir, hasta no recibir el mensaje esperado no continua la ejecucion del codigo

El primer parametro es una variable donde se guardara el valor que se envio en el mensaje, esta variable debe ser del mismo tipo que el valor enviado

Si se especifica un emisor puntual el robot que ejecuta la instruccion quedara esperando el mensaje en el caso de que este no este en la cola de mensaje del robot

Ejemplo de uso

    RecibirMensaje( numAvenida, coordinador )
    RecibirMensaje( continuar, jefe )

Si no se especifica un emisor puntual el robot que ejecuta la instruccion quedara esperando un mensaje de cualquier emisor en el caso de que no haya ninguno en la cola de mensaje del robot

Ejemplo de uso

    RecibirMensaje( codigo, * )
    RecibirMensaje( parar, * )

[Instrucciones ⬆](#instrucciones)


<br> <br>


## Generacion

Sobre generacion existe una unica instruccion para generar valores de tipo numero aleatorios dentro de un rango indicado

La instruccion es

| Sintaxis |
| :-: |
| Random( variableReceptora, valorMinimo, valorMaximo ) |

> IMPORTANTE: el valor minimo debe ser menor al maximo de lo contrario hay error, estos valores pueden ser explicitos o variables

Ejemplo de uso

    Random( avRandom, 1, 50 )
    Random( cant, 10, max )

[Instrucciones ⬆](#instrucciones)

[indice](#indice)



<br> <br> <br>



## **Secciones**

Un programa en este lenguage se constituye de secciones ( detalladas a continuacion ) que se encargan cada una de definir un aspecto del programa

Estas se dividen en
- [programa](#programa)
- [procesos](#procesos)
- [areas](#areas)
- [robots](#robots)
- [variables](#variables)
- [comenzar y fin](#comenzar-y-fin)


<br> <br>


## programa

Esta es la seccion donde se le asigna un nombre al programa

Estructura

    programa nombre_del_programa

El nombre del programa puede estar constituido por:

- Letras minusculas y MAYUSCULAS
- Numeros
- Guiones "-" medios y "_" bajos

Ejemplo de uso

    programa ejercicio_1
    programa TP1-E3

[Secciones ⬆](#secciones)


<br> <br>


## procesos

Esta es la seccion donde se crean modulos, estos pueden tener o no parametros

Estructura

    procesos
        proceso nombreDelModulo( parametros )

        variables
            declaracion de
            variables locales
            al modulo
        
        comenzar
            algoritmo
            que realiza
            el modulo
        fin

> IMPORTANTE:
> - Los modulos pueden no necesitar comunicacion de datos, en ese caso se crea el modulo sin parametros solo indicando el nombreDelModulo
> - Los modulos pueden no necesitar variables locales, en ese caso no se crea la seccion de variables

El nombreDelModulo es lo que permite el llamado al modulo, en otras palabras lo que permite que se ejecute el codigo dentro de este

Para una comunicacion de datos entre el algoritmo del modulo y el lugar donde se lo llama se utilizan los parametros

A los parametros en la creacion del modulo se los denomina parametros formales y a los parametros en el llamado al modulo se los denomina parametros actuales

- Parametros formales

    Un parametro formal tiene la siguiente declaracion

        tipoDeParametro nombreDelParametro : tipoDeDato
    
    Un parametro puede ser de dos tipos

    - E : entrada
    - ES : entrada salida

    Tipo E

    El tipo E significa que el parametro solo es para comunicar informacion hacia el modulo

    Tipo ES

    El tipo ES significa que el parametro es para comunicar informacion con hacia el modulo y a su vez devolver informacion hacia el exterior del modulo

    El nombre del parametro funcion como una variable en la cual se carga el valor dado en el llamado y/o se devuelve el valor al llamado

    El tipo de dato define el tipo de variable

    Si el modulo requiere mas de un parametro, estos se separan con " ; "

- Parametros actuales

    Los parametros actuales son los que envian la informacion hacia el modulo y/o reciben la informacion que este devuelva

    En el caso que el parametro formal sea de tipo E, el actual correspondiente puede ser bien un valor explicito o una variable

    En el caso que el parametro formal sea de tipo ES, el actual correspondiente solo puede ser una variable ya que en ella se guarda la devolucion del modulo

    Si el modulo tiene mas de un parametro, estos se separan con " , "

Los parametros formales y actuales se vinculan por la posicion, en otras palabras el primer formal con el primer actual y asi con los sucesibos

En el llamado al modulo debe existir igual cantidad de parametros que en la creacion de este y los tipos de datos que representa cada uno debe corresponder con su correspondiente en terminos de posiciones

Ejemplos de uso

    procesos
        proceso sumarEsquinasVaciasCalle( ES cantidad: numero )
        variables
            aux: numero
        comenzar
            aux:= 0
            si ( ~( HayFlorEnLaEsquina | HayPapelEnLaEsquina ) )
                    aux:= aux +1
            repetir 99
                mover
                si ( ~( HayFlorEnLaEsquina | HayPapelEnLaEsquina ) )
                    aux:= aux +1
            cantidad:= cantidad + aux
        fin

        proceso calcularMaximo( E n: numero; ES max: numero )
        comenzar
            si ( n > max )
                max:= n
        fin

        proceso hacerCuadrado3
        comenzar
            repetir 4
                repetir 3
                    mover
                derecha
        fin

Dentro de un modulo puede llamarse a otros modulos, de esta manera se produce un anidamiento de modulos que es positivo siempre y cuando se consiga una separacion de tareas que aumente la legibilidad y reusabilidad del codigo

Ejemplo de uso

    procesos
        proceso juntarFlores
        comenzar
            mientras HayFlorEnLaEsquina
                tomarFlor
        fin

        proceso recorrerCalles( E cantCalles: numero )
        variables
            sigCa, i: numero
        comenzar
            sigCa:= PosCa
            i:= 0
            repetir cantCalles
                i:= i +1
                repetir 99
                    juntarFlores
                    mover
                juntarFlores
                si ( i < cantCalles )
                    sigCa:= sigCa +1
                    Pos( 1, sigCa)
        fin

[Secciones ⬆](#secciones)


<br> <br>


## areas

Esta es la seccion donde se crean areas del mapa donde los robots podran interactuar. Las areas son regiones cuadradas del mapa donde las avenidas y calles que componen cada una solo pueden estar incluidas en una unica declaracion de area

Estructura

    areas

        nombreArea : tipoDeArea( region )

El nombre del area es lo que permite mas adelante referenciar esta definicion en la asignacion de areas de un robot

Existen tres tipos de areas:

- AreaC : area compartida
- AreaP : area privada
- AreaPC : area parcialmente compartida

AreaC

Este tipo es para definir que cierta region es compartida por los robots, esto quiere decir que a todos los robots se le asiganara esta area, consecuentemente quiere decir que podran interactuar en esta region

AreaP

Este tipo es para definir que cierta region es de un unico robot, esto quiere decir que solo a un robot se le asignara esta area, consecuentemente este es el unico que podra interactuar en esta region

AreaPC

Este tipo es para definir que cierta region es compartida por al menos dos robots y no es compartida por al menos un robot, esto quiere decir que se le asigna a almenos 2 robots y a almenos 1 no

La region es un cuadrado que se delimita por dos conjuntos:

- Avenida y calle inicial
- Avenida y calle final

En ambos casos la avenida y calle estan incluidas en la region

Se declara de la siguiente manera

    ( avenidaInicial, calleInicial, avenidaFinal, calleFinal )

Ejemplo de uso

    areas
        area1 : AreaC( 1, 1, 1, 1 )
        zonaPrivada : AreaP( 11, 1, 100, 10 )
        areaTrabajo : AreaPC( 50, 50, 55, 60 )

> IMPORTANTE: los valores iniciales deben ser menores o iguales a los valores finales, ademas se debe respetar el tamaño del mapa

[Secciones ⬆](#secciones)


<br> <br>


## robots

Esta es la seccion donde se definene los algoritmos que un cierto tipo de robot tendra que hacer durante la ejecucion del programa

> IMPORTANTE: dos tipos de robot pueden tener los mismos algoritmos y ejecutarlos perfectamente, pero en el caso que dos tipos de robot tengan exactamente las mismas tareas lo mas adecuado es tener dos variables robots del mismo tipo, cada una trabajando "independientemente"

Estructura

    robots

        robot nombreTipoRobot
        variables
            en el caso
            de que se necesiten
        comenzar
            instrucciones
            que componen
            el algoritmo para
            este tipo de robot
        fin

> IMPORTANTE: el nombreTipoRobot debe ser unico

Cuando se declara el tipo de robot la seccion de variables solo debe ser agregada en el caso que el robot necesite variables numericas y/o booleanas de lo contrario no es necesario que este

En el apartado comenzar ... fin es similar a el comenzar ... fin de la seccion de [procesos](#procesos) ya que es donde se crea el algoritmo del robot el cual al momento d ela ejecucion del programa se usara para que el robot realize tareas como moverse, interactuar con el mapa, realizar operaciones aritmeticas/logicas, comunicacion entre otras

Normalmente un tipo de robot se define para un labor especifica que puede englobar tareas asociadas a esta labor, si se quiere hacer un uso optimo de los tipos de robot se descompone el problema en labores y se las asigna a diferentes robots para distribuir la carga de manera que se responda a la problematica de manera eficiente

Ejemplo de uso

    robots
        robot corredorAvenida
        comenzar
            mientras (PosCa < 100)
                mover
            Informar('LlegueALaCalle',100)
        fin

        robot contadorFlores
        variables
            flores: numero
        comenzar
            flores:= 0
            repetir 9
                repetir 15
                    juntarFlores(flores)
                    mover
                juntarFlores(flores)
                Pos(PosAv + 1, 1)
        fin

[Secciones ⬆](#secciones)


<br> <br>


## variables

Esta es la seccion donde se declaran las variables robot de un determinado tipo de robot cada una

Las variables robot son las que se encargan de ejecutar los algoritmos que se definen en el programa

Estructura

    variables

        nombreVariableRobot: nombreTipoRobot

El nombreVariableRobot es el nombre que tendra el robot durante la ejecucion

> IMPORTANTE: no puede haber dos variables robot con el mismo nombre, este debe ser unico

El nombreTipoRobot es el nombre con el cual se definio un tipo de robot en la seccion de [robots](#robots)

Ejemplo de uso

    variables
        robot1: trabajador
        padre: recolector
        rJefe: coordinador


[Secciones ⬆](#secciones)


<br> <br>


## comenzar y fin

Esta es la seccion donde se le asignan las areas correspondientes a cada variable robot y ademas su correspondiente posicionamiento inicial en el mapa

Estructura

    comenzar

        AsignarArea( nombreVariableRobot, nombreArea )
        Iniciar( nombreVariableRobot, avenida, calle )
    
    fin

> IMPORTANTE: el nombreArea debe estar definido correctamente en la seccion de [areas](#areas) de igual manera que el nombreVariablesRobot debe estar definido correctamente en la seccion de [variables](#variables). Los valores indicados en el iniciar deben pertener a alguna de de las areas asignadas previamente

A una variable robot se le pueden asignar multiples areas (siempre y cuando se respete el tipo de area definido) pero unicamente se incia en un punto del mapa

Ejemplo de uso:

    comenzar
        AsignarArea( robot4, cuadrante )
        AsignarArea( robot4, puntoPartida )
        AsignarArea( jefe, areaJefe )

        Iniciar( jefe, 1, 1 )
        Iniciar( robot4, 50, 1 )
    fin

[Secciones ⬆](#secciones)

[indice](#indice)



<br> <br> <br>



## **Glosario**

Estas son definiciones de terminos y conceptos utilizados en el documento

1. camelCase: es la escritura de un conjunto de palabras donde se intercambian los espacios por la mayuscula de la palabra siguiente

1. UpperCamelCase: como camelCase pero la primera palabra tambien comienza con mayuscula

1. lower_camel_case: a diferencia del camelCase de esta forma se reemplazan los espacios por guiones bajos

1. Declarar: es la creacion de algo

1. Inicializar: es darle el primer valor

1. Asignar: es darle un valor a una variable

1. Condicion: valor booleano u operacion logica ( tambien puede ser conjunto de operaciones logicas ) que determina si se realiza o no determinada instruccion/es+

1. Validacion: es el acto de verificar si se cumplen determinadas condiciones/valores

1. Sintaxis: palabras y/o conjunto de caracteres que el lenguage de programacion utiliza para determinadas funciones/propositos/instrucciones

1. Identacion: dejar un espacio determinado antes de una linea de codigo para indicar que pertenecen a cierto bloque de codigo y/o seccion del programa

1. Bloque de codigo: conjunto de lineas de codigo con la misma identacion que se ejecutan juntas en el orden en el que estan escritas

[Glosario ⬆](#glosario)

[indice](#indice)



<br> <br> <br>



Hecho por compañeros de la Facultad

Fin del documento.
