//A.FUNCIONES PURAS

//SIDE EFFECTS - EFECTOS SECUNDARIOS
//1. Modificar variables globales
//2. Modificar parámetros
//3. Solicitar HTTP
//4. imprimir mensajes en pantallas o consola
//5. manipulación del DOM
//6. Obtener la hora actual


function suma ( a, b) {
    return a + b
}

//b.FUNCIONES IMPURAS
function suma ( a, b) {
    console.log('A:', b)
    return a + b
}

//c. MODIFICAR UNA VARIABLE GLOBAL =IMPURA
let total = 0

function sumWithSideEffect (a) {
    total += a
    return total
}

//funcion pura
function square(x) {
    return x * x
}

//funcion pura
function addTen (y) {
    return y + 10
}

//combinacion de dos funciones puras = funcion pura
const number = 5
const finalResult = addTen( square(number))
console.log(finalResult)