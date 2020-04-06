'use strict'

const myData = require('./assets/data/my_data'),
    Clock = require('./assets/clocks/clock_es6'),
    cucu = new Clock()

console.log(
    `Nombre: ${myData.name}\nEmail: ${myData.email}`
)

cucu.on('tictak', function() {
    cucu.theTime()
})