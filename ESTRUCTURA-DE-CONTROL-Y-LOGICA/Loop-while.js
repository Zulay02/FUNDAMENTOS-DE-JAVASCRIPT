/*

while(condicion) {
codigo}

El loop while ejecuta repetidamente el código mientras la condición que le indiquemos se 
cumpla (es decir, que la condición corresponda a true)

Es por esto que hay que tener mucho cuidado en la definición de nuestra condición, de 
lo contrario tendremos un loop infinito!

Podemos usar la sentencia continue para saltar a la siguiente iteración de nuestro 
ciclo while
*/
let n = 0;

while (n < 3) {
    n++
}
/*
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}
*/
console.log(n);



let contador = 0;

while(contador < 10) {
    console.log( contador)
    contador++;
}