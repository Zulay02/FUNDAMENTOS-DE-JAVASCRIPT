//Null
const snoopy = null
console.log(snoopy)
console.log(typeof snoopy)

//Undefined:
let name
console.log(name)

//Symbol:
const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2)

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

//Bigint: calculos matematicos o números muy grandes difíciles de manejar.
const BigNumber = 12345678900000975321654879823n
console.log(BigNumber)

const numberOfParticlesIntheUniverse = 1000000000000000000n
console.log(numberOfParticlesIntheUniverse )
