'use strict'

const myData = require('./my_data'),
    Clock = require('./clock_es6'),
    cucu = new Clock()

console.log(
    `Nombre: ${myData.name}\nEmail: ${myData.email}`
)

cucu.on('tictak', function() {
    cucu.theTime()
})