'use strict'

const http = require('http')
    /*
    // Version 1
    http.createServer(function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Hello World\n')
    }).listen(1337, '127.0.0.1')
    */

// Version 2
function webServer(req, res) {

    res
        .writeHead(200, { 'Content-Type': 'text/html' })
        .end('<h1>Hello Node.js</h1>')
}

http
    .createServer(webServer)
    .listen(3000, 'localhost')

console.log('Server running at http://localhost:3000/')