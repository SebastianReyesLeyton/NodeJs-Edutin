'use strict'

var Clock = (function() {
    const EventEmitter = require('events').EventEmitter,
        inherits = require('util').inherits

    // Constructor
    let Clock = function() {
        let self = this
        setInterval(() => {
            self.emit('tictak')
        }, 1000)
    }

    inherits(Clock, EventEmitter)

    Clock.prototype.theTime = function() {

        let date = new Date(),
            hrs = addZero((date.getHours() <= 12) ? (date.getHours()) : date.getHours() % 12),
            min = addZero(date.getMinutes()),
            sec = addZero(date.getSeconds()),
            ampm = (date.getHours() < 12) ? 'am' : 'pm',
            msg = `${hrs}:${min}:${sec} ${ampm}`

        function addZero(num) {
            return (num < 10) ? (`0${num}`) : num
        }

        console.log(msg)
    }

    return Clock
})()

module.exports = Clock