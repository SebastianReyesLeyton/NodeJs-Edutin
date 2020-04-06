'use strict'

const http = require('http').createServer(webServer),
    path = require('path'),
    url = require('url'),
    urls = [{
            id: 1,
            route: '',
            output: '<h2>Home</h2>'
        },
        {
            id: 2,
            route: 'acerca',
            output: '<h2>Acerca</h2>'
        },
        {
            id: 3,
            route: 'contacto',
            output: '<h2>Contacto</h2>'
        }
    ]

function webServer(req, res) {
    let message = '<h1>Hola Node.js</h1>',
        pathURL = path.basename(req.url),
        id = url.parse(req.url, true).query.id

    console.log(`Path: ${pathURL}\nid: ${id}\n\n`)
    urls.forEach(function(pos) {
        if (pos.id == id || pos.route == pathURL) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(message + pos.output)
        }
    })

    if (!res.finished) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('<h1>Error 404: Not Found</h1>')
    }
}

http.listen(3000, 'localhost')
console.log('Sevidor corriendo en http://localhost:3000')