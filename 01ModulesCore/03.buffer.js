'use strict'

let buffer = new Buffer(100),
    buffer2 = new Buffer(26),
    str = '\u00bd + \u00bc = \u00be'

buffer.write('abcd', 0, 4, 'ascii')
console.log(
    buffer,
    buffer.toString('ascii')
)