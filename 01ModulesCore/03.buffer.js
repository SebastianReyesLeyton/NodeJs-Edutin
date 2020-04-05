/*
Buffers
    - Una tira de bytes (datos binarios)
    - Similar a un array de enteros
    - Tamaño fijo
    - Manipular datos directamente
        · Sockets
        · Streams
        · Implementar protocolos complejos
        · Manipulación de ficheros/imágenes
        · Criptografía
*/

'use strict'

let buffer = new Buffer(100),
    buffer2 = new Buffer(26),
    str = '\u00bd + \u00bc = \u00be'

buffer.write('abcd', 0, 4, 'ascii')
console.log(
    buffer,
    buffer.toString('ascii'),
    str,
    str.length + 'caracteres',
    Buffer.byteLength(str, 'utf8') + 'bytes',
    buffer2.length
)

for (let i = 0; i < buffer2.length; i++) {
    buffer2[i] = i + 97
}
console.log(buffer2.toString('ascii'))