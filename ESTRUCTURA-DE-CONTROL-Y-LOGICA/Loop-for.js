/*Un bucle for es una estructura de control que repite un bloque de código un número determinado de veces. El bucle for es una estructura de control muy común en JavaScript.
La sintaxis del bucle for en JavaScript es la siguiente:
*/

for (inicialización; condición; actualización)
{
    // Instrucciones a ejecutar en cada iteración
}

/*
inicialización se ejecuta al inicio del bucle, normalmente se utiliza para inicializar una variable.
condición es evaluada al inicio de cada iteración, si es verdadera se ejecuta el código dentro del bucle, si es falsa se sale del bucle.
incremento se ejecuta al final de cada iteración, normalmente se utiliza para actualizar el valor de una variable.
*/

//Veamos un ejemplo sencillo donde se utiliza un bucle for para imprimir los números del 1 al 10:


for (let i = 1; i <= 10; i++) {
    console.log(i);
}
/*
En este ejemplo:

La inicialización let i = 1 establece el valor inicial de i en 1.
La condición i <= 10 asegura que el bucle se ejecute mientras i sea menor o igual a 10.
La actualización i++ incrementa i en 1 después de cada iteración.
Dentro del bucle, utilizamos console.log() para imprimir el valor actual de i en la consola.
El resultado es que se mostrarán los números del 1 al 10 en la pantalla.
*/
/*
Modificación del flujo del bucle
Salto de iteraciones con continue
La instrucción continue se utiliza para saltar la iteración actual y pasar directamente a la siguiente iteración del bucle.
*/

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Saltar los números pares
    }
    console.log(i);
}

//En el ejemplo, el condicional haría que se saltaran todos los números pares, por lo que se imprimirían en pantalla solo los impares.
/*Interrupción del bucle con break
El uso de la instrucción break permite salir del bucle antes de que se cumpla la condición. Esto es útil en situaciones donde se encuentra un valor específico y no es necesario seguir iterando.
*/

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // interrumpir al llegar a 5
    }
    console.log(i);
}
//En este caso, el bucle se ejecutaría desde 0, pero el condicional lo interrumpiría al llegar a 5. Así que se mostraría en pantalla 0, 1, 2, 3 y 4.
/*
Casos particulares
Es posible realizar casos más “originales” del bucle for. En general no es buena idea hacerlo. Pero os lo cuento, aunque solo sea para que si algún día lo veis, le echéis la bronca a alguien. 😉

Uso de variables externas
Es posible usar una variable declarada fuera del bucle for como la variable de control. Sin embargo, esto puede llevar a confusión y errores si no se gestiona adecuadamente:
*/

let i = 0;
for (i = 0; i < 5; i++) {
    console.log(i);
}
console.log(`Valor de i después del bucle: ${i}`);

//En este caso, i conserva su valor después de que el bucle ha terminado, que será 5.
/*
Ejemplos prácticos
Generar una tabla de multiplicar
En este ejemplo, se genera una tabla de multiplicar para un número específico usando un bucle for.
*/

let numero = 5; // Número para el cual se genera la tabla de multiplicar

for (let i = 1; i <= 10; i++) { // Itera del 1 al 10
    console.log(`${numero} x ${i} = ${numero * i}`); // Imprime la multiplicación del número por 'i'
}
/*
Iteración sobre Arrays
Una de las aplicaciones más comunes del bucle for es iterar sobre los elementos de un array. Aquí hay un ejemplo que suma todos los elementos de un array:
*/
/*
let numeros = [1, 2, 3, 4, 5]; // Declaramos el array
let suma = 0; // Variable para almacenar la suma

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]; // Suma cada elemento del array a 'suma'
}*/

console.log(`La suma de los elementos es: ${suma}`);

/*
Iteración con paso diferente
El valor de la actualización no siempre tiene que ser un incremento de uno. Puede ser cualquier expresión que modifique la variable de control. Por ejemplo, iterar en pasos de dos:
*/

for (let i = 0; i < 10; i += 2) { // Incrementa 'i' en 2 en cada iteración
    console.log(i); // Imprime el valor actual de 'i'
}
/*
Bucle for decreciente
También se puede usar el bucle for para iterar en orden decreciente:
*/

for (let i = 10; i > 0; i--) { // Decrementa 'i' en 1 en cada iteración
    console.log(i); // Imprime el valor actual de 'i'
}


//Búsqueda de un elemento en un Array

let numeros = [1, 2, 3, 4, 5]; // Declaramos el array
let buscar = 3; // Número a buscar
let encontrado = false; // Variable para indicar si el número fue encontrado

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === buscar) { // Compara cada elemento con el número buscado
        encontrado = true; // Marca que el número fue encontrado
        break; // Sale del bucle
    }
}

if (encontrado) {
    console.log(`El número ${buscar} se encuentra en el array.`);
} else {
    console.log(`El número ${buscar} no se encuentra en el array.`);
}