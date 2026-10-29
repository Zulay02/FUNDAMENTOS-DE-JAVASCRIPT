/*
do...while
La sentencia (hacer mientras) crea un bucle que ejecuta una 
sentencia especificada, hasta que la condición de comprobación 
se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, 
dando como resultado que la sentencia especificada se ejecute al menos una vez.

sentencia
Una sentencia que se ejecuta al menos una vez y es reejecutada cada vez que la 
condición se evalúa a verdadera. Para ejecutar múltiples sentencias dentro de 
un bucle, utilice la sentencia block ({ ... }) para agrupar aquellas sentencias.

condición
Una expresión se evalúa después de cada pase del bucle. Si condición se evalúa
 como verdadera, la sentencia se re-ejecuta. Cuando condición se evalúa como falsa, 
el control pasa a la siguiente sentencia hacer mientras.
*/
Sintaxis
do{
    sentencia
} while (condición);

//EJEMPLO:
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"

do {
    codigo
} while(condicion)

 //EJEMPL:  
let contador = 0;

do{
   console.log(contador)
   contador++;
}while (contador < 10);


