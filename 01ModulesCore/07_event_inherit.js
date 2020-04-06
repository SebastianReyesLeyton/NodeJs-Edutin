'use strict'

const EventEmitter = require('events').EventEmitter,
    inherits = require('util').inherits

let Clock = function() {
    let self = this
    setInterval(() => {
        self.emit('tictak')
    }, 1000)
}

inherits(Clock, EventEmitter)

Clock.prototype.theTime = function() {

    let date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        msg = `${hrs}:${min}:${sec}`

    console.log(msg)

}

let cucu = new Clock()
cucu.on('tictak', function() {
    cucu.theTime()
})