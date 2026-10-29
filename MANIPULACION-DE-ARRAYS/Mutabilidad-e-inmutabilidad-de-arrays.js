//Mutablidad
const frutas = Array('manzana', 'banana', 'naranja')
console.log(frutas)

//Accesing array elements

const firstFrutas = [1]
console.log(firstFrutas )

//length property

const numberOfFrutas = frutas.length
console.log(numberOfFrutas)

frutas.push('watermelon')
console.log(frutas)

//Inmutabilidad

const newFrutas = frutas.concat(['granada', 'kiwi'])
console.log(frutas)
console.log(newFrutas)

//checar si unarray es un array

const isArray = Array.isArray(frutas)
console.log(isArray)

//practica;; suma de todos los elementos de un  array

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numbersArray.length; i++) {
   sum += numbersArray[i] 
}

console.log(sum)