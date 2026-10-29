//EJEMPLO 1
/*
const productName = "Smartphone";
const price = 499;
const brand = "techCo";

function getProductDetails() {
  const productName = "Laptop";
  const price = 899;

  return `The ${productName} costs $${price} and is from the brand ${brand}.`;
}

console.log(getProductDetails());

//EJEMPLO 2
const productName = "Smartphone";
const price = 499;
const brand = "techCo";

function getProductDetails() {
  const productName = "Laptop";
  const price = 899;

  return `The ${productName} costs $${price} and is from the brand ${brand}.`;
}

console.log(`El ${productName} costo $${price} y es de la marca ${brand}`);

//EJEMPLO 3
const userPoints = 150;

function checkAcces() {
  if (userPoints < 100) {
    const messaje = "Acceso denegado: ¡Puntos insuficiente!";
    return messaje;
  } else {
    const messaje = "Acceso concedido: ¡Disfruta de las funciones premiun!";
    return messaje;
  }
}
console.log(checkAcces());
*/
//EJEMPLO 4
const globalVariable = "😎";

function localOne() {
  console.log("GLOBAL 1: ", globalVariable);
  //console.log("LOCAL 1: ", localVariable);

  function localTwo() {
    const carrot = "🥕";
    console.log("LOCAL 2: ", carrot);
  }
  function localTree() {
    console.log("LOCAL 3 ", carrot);
  }
  localTwo()
  localTree()
}
console.log(localOne)//REVISAR EL
