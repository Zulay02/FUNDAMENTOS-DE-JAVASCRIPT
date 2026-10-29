/*
La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está 
codificado por cadenas (ignorando los codificados por Símbolos, incluidas las propiedades 
enumerables heredadas.
*/
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"

//Sintaxis
for (variable in objeto) {
    instrucción
}
/*
variable
Asigna un nombre de propiedad diferente a la variable en cada iteración.

objeto
Objeto cuyas propiedades enumerables que no son símbolos se iteran.

statement o instruccion
Una sentencia que se ejecutará en cada iteración. Puede hacer referencia a 
variable. Puede utilizar una sentencia de bloque para ejecutar varias sentencias.

Descripción
Un bucle for...in solo itera sobre propiedades enumerables que no son símbolo.
Los objetos creados a partir de constructores integrados como Array y Object han 
heredado propiedades no enumerables de Object.prototype y String.prototype, como 
el método indexOf() de String o el método toString() de Object. El bucle iterará 
sobre todas las propiedades enumerables del objeto en sí y aquellas que el objeto 
hereda de su cadena de prototipos (las propiedades de los prototipos más cercanos 
tienen prioridad sobre las de los prototipos más alejados del objeto en su cadena 
de prototipos).
*/
/*
Ejemplos
Utilizar for...in
El siguiente bucle for...in itera sobre todas las propiedades enumerables que no son símbolos del objeto y registra una cadena de los nombres de propiedad y sus valores.
*/

var obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Produce:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

/*
Iterar propiedades directas
La siguiente función ilustra el uso de hasOwnProperty() — las propiedades heredadas 
no se muestran.
*/

var triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Produce:
// "obj.color = red"

const listDeCompras ={
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva:1
}

for ( fruta in listDeCompras  ) {
    console.log(fruta);
}

for ( fruta in listDeCompras  ) {
    console.log(`${fruta} : ${listDeCompras[fruta]}`);
}

for ( fruta of listDeCompras  ) {
    console.log(`${fruta} : ${listDeCompras[fruta]}`);
}//for of no es iterable