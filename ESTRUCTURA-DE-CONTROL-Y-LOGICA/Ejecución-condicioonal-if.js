/*
1. El condicional if en JavaScript es una herramienta fundamental para tomar decisiones en tu código. 
Te explico cómo funciona y cómo usarlo:

Estructura básica del condicional if:
El condicional if evalúa una expresión (una condición) y, si esa expresión es verdadera (truthy), ejecuta un bloque de código.
Si la expresión es falsa (falsy), el bloque de código dentro del if no se ejecuta.
Aquí está la sintaxis básica:*/
/*
if (condicion) {
  // Código a ejecutar si la condición es verdadera
}
*/

//2. Ejemplo sencillo:

const edad = 20;
if (edad >= 18) {
  console.log("Eres mayor de edad");
}

/*
3. Uso del condicional if…else:
Puedes añadir un bloque else para manejar el caso en que la condición no se cumple:
JavaScript

if (condicion) {
  // Código a ejecutar si la condición es verdadera
} else {
  // Código a ejecutar si la condición es falsa
}
*/

//4. Ejemplo
const hora = 14;
if (hora < 12) {
  console.log("Buenos días");
} else {
  console.log("Buenas tardes");
}

/*
5. Condicional if…else if…else:
Puedes manejar múltiples condiciones usando else if:
JavaScript

if (condicion1) {
  // Código si condicion1 es verdadera
} else if (condicion2) {
  // Código si condicion2 es verdadera
} else {
  // Código si ninguna condición es verdadera
*/

//6. Ejemplo con else if:

const nota = 75;
if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

/*let  nombre = "Diego";
if (nombre === "Diego") {
  console.log("Hola Diego");
}*/

let nombre = "Nico";
if (nombre === "Diego") {
  console.log("Hola Diego");
}
else if (nombre === "Nico") {
  console.log("Hola Nico");
}
else {
  console.log("Nombre no encontrado");
}
