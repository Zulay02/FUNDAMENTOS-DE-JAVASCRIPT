//COMO CREAR UN ARRAY

//1. new Array() o Array()

const frutas = Array('manzana', 'banana', 'naranja')
console.log(frutas)

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1, 2, 3, 4, 5)
console.log(number)

//2.Array Literal syn

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer','tennis', 'rugby']
console.log(sports)

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk', quantity: '1 cup'
    },
    false
]
console.log(recipeIngredients)

//Accesing array elements

const firstFrutas = [1]
console.log(firstFrutas )

//length property

const numberOfFrutas = frutas.length
console.log(numberOfFrutas)
