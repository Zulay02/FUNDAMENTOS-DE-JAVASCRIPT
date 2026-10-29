/*
Es estructura de datos.

key / value

objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor
    Métodos
}

*/

const persona = {
    nombre:"John",
    edad: 30,
    direccion: {
    calle: "Av insurgente 187",
    ciudad: "CDMX",
    },
saludar() {
    console.log(`hola, mi nombre es ${persona.nombre}`)
 }
}
