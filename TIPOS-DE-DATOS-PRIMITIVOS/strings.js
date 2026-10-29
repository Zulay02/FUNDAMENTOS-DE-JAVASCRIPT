//tipo de datos en JavaSript: strings.
//Para escribirlos cramos una variable y utilizamos comillas simples, dobles oinvertidas.
let string1 = 'Hola, mundo';
let string2 = "JavaScript es genial";
let string3 = `${string1} feliz :)`;//con comillas invertidas podemos concatenar los strings-
//Concatenar strings significa sumarlos con el operador +
let string4 = string1 + ' ' + string2;//esta es otra forma de concatenr los strings.

//Paraimprimir los strings utilizamos console,log():
//console.log(string1)
//console.log(string2)
//console.log(string3)
//console.log(string4)

let frase = 'JavaScript es Extremadamente Genial'
console.log(frase.length)//método paraconocer la longitud de la string.
console.log(frase.toLowerCase())//método para que la frase sea toda en minúsculas
console.log(frase.toUpperCase())//método para que la frase sea toda en mayúsculas.
console,log(frase.substring(o, 10))//método para tomar una parte del string, primero es el index de inicio=0; sefundo index donde ermina 10