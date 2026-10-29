//CAPACIDADES QUE TIENEN LAS FUNCIONES AL IGUAL QUE OTROS OBJETOS.
/*
// 1. PASAR FUNCIONES COOMO ARGUMENTOS => CALLBACK (MUY PREGUNTADO EN ENTREVISTAS)

function a() {}
function b(a) {}
b(a);

//RETORNAR FUNCIONES O DECLARACION DE FUNCIONES
function a() {
  function b() {}
  return b;
}

//ASIGNAR FUNCIONES A VARIABLES=> O EXPRESIÓN DE FUNCIONES

const a = function () {};

//TENER PROPIEDADES Y METODOS
function a() {}
const obj = {};
a.call(obj);

//ANIDAR FUNCIONES=> NESTED FUNCTION

function a() {
  function b() {
    function C() {

    }
    C();
  }
  b();
}
a();
*/
//¿ES POSIBLE ALMACENAR FUNCIONES EN OBJETOS?

const rocket = {
    name: 'Falcon 9',
    launchMessage: function  launchMessage (){
       console.log('🚀')
    }  
}

rocket.launchMessage()