//E: conversión de tipo explicita a nivel númerico
//convertir string a número
const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

//conversión a flotante:
const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

//convertir a binario:
const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

//IMPLICIT TYPE CASTING: conversión de tipo implicita.
//string y numeros.
const sum = '5' + 3
console.log(sum)//js concatena.

//booleanos.
const sumWithBoolean = '3'+ true
console.log(sumWithBoolean)//concatena

//para saber cuando js suma o concatena.
const sumWithNumber = 2 + true
console.log(sumWithNumber)//suma

//truco
const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log('--------------')
console.log(stringValue + stringValue)//1010 CONCATENA
console.log(stringValue + numberValue)//1010 CONCATENA
console.log(stringValue + booleanValue)//10true CONCATENA
console.log(numberValue + stringValue)//1010 CONCATENA
console.log(numberValue + numberValue)//20 SUMA
console.log(numberValue + booleanValue)//11 SUMA
console.log(booleanValue + stringValue)//true10 CONCATENA
console.log(booleanValue + numberValue)//11 SUMA
console.log(booleanValue + booleanValue)//2 SUMA


const numero = '596'
const numeroConvertido = parseInt(numero)
console.log(typeof numero)
console.log(numeroConvertido)