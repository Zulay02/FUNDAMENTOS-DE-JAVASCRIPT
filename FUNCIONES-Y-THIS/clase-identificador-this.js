//Enlace implicito o implicit binding

const house = {
    dogName: 'Fido',
    dogGreeting: function () {
        console.log(`Hi, I'm ${this, this.dogName}`)
    }
}

house.dogGreeting()

//Enlace explicito o explicit binding
function dogGreeting () {
    console.log(`Hi, I'm ${this, this.dogName}`)
}

const newhouse = {
    dogName: 'Coconut',
}

dogGreeting.call(newhouse)

function newdogGreeting (owner, addres) {
    console.log(`Hi, I'm ${this.dogName} and live with ${owner} on ${addres}`)
}

const owner = 'Lucy'
const addres = 'Avenue 123'
newdogGreeting.call(newhouse, owner, addres)