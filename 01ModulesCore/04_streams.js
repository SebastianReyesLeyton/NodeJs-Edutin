/*
Streams

    - 'Chorros' de información que se transmiten en 'Pedazos' (Chunks)
    - 3 tipos: 
        · Lectura
        · Escritura
        · Duplex
    - Instancias de EventEmitter
    - Acceso asíncrono
    - Es raro crear streams directamente, pero muchso recursos nos ofrecen
      esta interfaz detrás de muchos mecanismos de Node.js
        · stdin/stdout
        · request de HTTP
        · Sockets
        · Manipulación de ficheros/imágenes
*/

'use strict'

let fs = require('fs'),
    readStream = fs.createReadStream('assets/txt/names.txt'),
    writeStream = fs.createWriteStream('assets/txt/names_copy.txt')

// Version 1
readStream.pipe(writeStream)
readStream.on('data', (chunk) => {
    console.log(`He leido: ${chunk}\n${chunk.length} caracteres.`)
})
readStream.on('end', () => {
    console.log('Terminé de leer el archivo')
})

// Version 2
readStream.pipe(writeStream)
readStream
    .on('data', (chunk) => {
        console.log(`He leido: ${chunk}\n${chunk.length} caracteres.`)
    })
    .on('end', () => {
        console.log('Terminé de leer el archivo')
    })