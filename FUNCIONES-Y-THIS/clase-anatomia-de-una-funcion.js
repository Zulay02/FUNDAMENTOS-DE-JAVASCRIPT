/*
FUNCIONES

Las funciones son uno de los elementos fundamentales de JavaScript. 
Una función en JavaScript es similar a un procedimiento: un conjunto 
de instrucciones que realizan una tarea o calculan un valor, pero para 
que un procedimiento sea considerado una función, debe recibir una entrada y 
devolver una salida donde exista una relación obvia entre la entrada y la salida.
Para usar una función, debes definirla en algún lugar del ámbito desde el que 
deseas llamarla.

DEFINICION DE FUNCIONES

Declaraciones de funciones
Una definición de función (también llamada declaración de función o enunciado
de función ) consta de la function palabra clave, seguida de:

1. El nombre de la función.
2. Una lista de parámetros de la función, entre paréntesis y separados por comas.
3. Las declaraciones de JavaScript que definen la función, entre llaves, {....}. */
//Por ejemplo, el siguiente código define una función simple llamada square:
/*
function square(number) {
  return number * number;
}
/*
La función square toma un parámetro, llamado number. 
La función consta de una declaración que indica que se debe devolver el parámetro de la función (es decir, number) 
multiplicado por sí mismo. 
La return declaración especifica el valor devuelto por la 
función, que es number * number.*/
/*
return number * number;

//ANATOMIA DE UAN FUNCION

function suma (a, b) {
    return a + b
}
suma(3, 5)

//function: palabra clave
//suma : nombre escrito la primera letra en minçula
//       las otras en mayúscula
//(a, b): parametros son las entradas al codigo y son opcionales,
//{}: las llaves indican que ahi se ecribe todo el codigo
//return a + b: cuerpo de la función, puede ser un return o codigo a ejecutar.puede
//tenerlo o no tenerlo.
//suma(3, 5): llamado, se hace con el nombre de la funcion y segido de los paréntesis, 
//si hay argumentos(parámetros) se agregan para ejecutar el fragmento de codigo.
//(3, 5):argumento son los parametros dento de la funcion.
*/

//EJEMPLO:

function calculateDiscountedPrice (price, discountPercentage ) {
    const discount =(price * discountPercentage) / 100
    const pricewithDiscount = price - discount

    return pricewithDiscount 
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log('Original Price: $' + originalPrice)
console.log('Discounted:' + discountPercentage + '%')
console.log('Price with discount: $' + finalPrice)




