'use strict'

const myData = require('./my_data'),
    Clock = require('./clock_es5'),
    cucu = new Clock()

console.log(
    `Nombre: ${myData.name}\nEmail: ${myData.email}`
)

cucu.on('tictak', function() {
    cucu.theTime()
})