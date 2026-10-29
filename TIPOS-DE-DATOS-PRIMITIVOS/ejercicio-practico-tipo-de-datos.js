//Social Media Profile

//1. User informacion
const username = 'codingAdventurer'
const fullName = 'Jhon Doe'
const age = 25
const isStudent = true

//ADDRESS: DIRECCION.
const address = {
    street: '123 Main Street',
    city: 'techville',
    state: 'Codingland',
    zipCode: 54321
}
//3. HOBBIES
const hobbies = ['Coding', 'Reading', 'Gaming']

//4. GENERATING PERSONALIZED BIO 0 TEXTO PERSONALIIZADO.
const PersonalizedBio = `Hola, soy ${fullName}.
Tengo ${age} años mas viejo.
Vivo en ${address.city}.
Me encantan los ${hobbies.join(', ')}.
Sigueme para mas aventuras!`

//5. PRINT THE USER PROFILE AND BIO O IMPRIME ELPERFIL DEL USUARIO Y LA BIOGRAFIA.
console.log(PersonalizedBio)
