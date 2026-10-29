/*
const almuerzo = (proteina, verdura) => {
    return '${proteina} ${verdura}'
}

almuerzo('🍗', '🥬')

//
const greeting = function (name) {
    return `Hi, $(name)`
}
//FUNCION FLECHA CON RETORNO EXPLICITO O ARROW FUNCTION - EXPLICIT RETUR
const newGreeting =  (name) => {
    return `Hi, $(name)`
}
//FUNCION FLECHA CON RETORNO IMPLICITO O ARROW FUNCTION - IMPLICIT RETURN
const newGreetingImplicit =  name => `Hi, $(name)`
const newGreetingImplicitWithTwoParameters =  (name, lastName) => `Hi, I'm $(name) ${lastName}`
*/
//LEXICAL BINDING
const finctionalCharacter = {
  name: 'Tio Ben',
  messageWithTraditionalFunction:  function (message) {
    console.log(`${this.name} dice: ${message}`)
  },
  messageWithArrowFunction: (message) => {
    console.log(`${this.name} el tio Ben dice: ${message}`)
  }
}

finctionalCharacter.messageWithTraditionalFunction('Un gran poder conlleva una gran responsabilidad')
finctionalCharacter.messageWithArrowFunction('La integridad va de la mano con el ejercio del poder')



