//

//Iteracion con map()y forEach()

//metódo map

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squaredNumbers)

//metódoforEach.

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

//Ejercicio convertir fahrenheid en celsius

const temperaturesInFahrenheit = [32, 68, 95, 104, 212 ]
const temperaturesInCelsius =temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32)) 

console.log('temperatures In Fahrenheit: ', temperaturesInFahrenheit)
console.log('temperatures In Celsius ', temperaturesInCelsius)


//Ejercicio suma de los elementos en un array

const newNumbers = [1, 2, 3, 4, 5,]
let sum = 0
newNumbers .forEach(number => {
    sum += number
})
console.log('Array of Numbers:', newNumbers)
console.log('sum of numbers', sum)



