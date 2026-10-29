/*
En programación, un closure, también conocido como clausura o cierre, es una función 
que recuerda y tiene acceso al entorno en el que se creó, incluso después de que la
función externa que la creó haya terminado de ejecutarse.

En otras palabras, un closure es una función que encapsula un dato (que puede ser una 
variable o un objeto) y recuerda el estado del entorno en el que se definió. Esto permite 
que la función interna acceda y utilice variables o valores de la función externa, incluso 
después de que esta haya finalizado.
*/

function outerFunction() {
  let outerVariable = "I am from outer function";

  function innterFunction() {
    console.log(outerVariable);
  }

  return innterFunction;
}

const closureExample = outerFunction();
closureExample();

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counterA = createCounter();
counterA();
counterA();

const counterB = createCounter();
counterB();

function outer() {
  let messaje = "Hello, ";

  function inner(name) {
    console.log(messaje + name);
  }
  return inner;
}

const closureA = outer();
const closureB = outer();

closureA("Alice");
closureA("Bob");
