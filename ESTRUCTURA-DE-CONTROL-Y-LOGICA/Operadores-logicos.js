/* 
&& AND (y)
-------------------------
true && true = true
false && true = false
true && false = false
false && false = false

El operador && se utiliza para evaluar si ambos operandos son verdaderos.
Devuelve true solo si ambos operandos son verdaderos.
Si al menos uno de los operandos es falso, devuelve false.*/

//const a = true;
//const b = false;
//console.log(a && b); // Imprime false
/*
-------------------------
|| OR (o) 
-------------------------
true || true = true
false || true = true
true || false true
false || false ||false || false || false || false || false

El operador || se utiliza para evaluar si al menos uno de los operandos es verdadero.
Devuelve true si al menos uno de los operandos es verdadero.
Si ambos operandos son falsos, devuelve false. */
const x = true
const y = false
console.log(x || y); // Imprime true
/*
-------------------------
! NOT (invertir o negar)

El operador lógico NOT (negación) se representa con el símbolo “!” en JavaScript. Este operador se utiliza para negar el valor de una expresión booleana. Veamos cómo funciona:

Si la expresión es true, el operador NOT la convierte en false.
Si la expresión es false, el operador NOT la convierte en true.
Por ejemplo:*/

//const x = true;
//const y = false;

//console.log(!x); // Imprime false
//console.log(!y); // Imprime true

//El operador NOT también se utiliza para convertir valores no booleanos a booleanos. Si el operando puede convertirse a true, el resultado es false; de lo contrario, es true.

console.log(!1); // Imprime false (1 se convierte a true, luego se niega)
console.log(!0); // Imprime true (0 se convierte a false, luego se niega)
console.log(!null); // Imprime true (null se convierte a false, luego se niega)

//En resumen, el operador NOT invierte el valor de verdad de una expresión o convierte valores a su forma booleana negada.

/*let misterio = (true || true);
console.log(misterio);
let misterio = !(false || true);
console.log(misterio);*/
//let misterio = (true || false);
//console.log(misterio);
//let misterio = !(false || false);
//console.log(misterio);
//let misterio = (true && true);
//console.log(misterio);
//let misterio = (false && true);
//console.log(misterio);
//let misterio = (true && false);
//console.log(misterio);
//let misterio = (false && false);
//console.log(misterio);
//let misterio = !(false && false);
//console.log(misterio);
//let misterio = (false && !false);
//console.log(misterio);
//let misterio = !(false && !false);
//console.log(misterio);
/*
En resumen:

|| devuelve true si al menos un operando es verdadero.
&& devuelve true solo si ambos operandos son verdaderos.
Recuerda que estos operadores también tienen evaluación de cortocircuito.
Si el primer operando determina el resultado, el segundo no se evalúa. 
Por ejemplo, en false || algo, algo no se evaluará porque el resultado ya es 
true debido al primer operando.*/