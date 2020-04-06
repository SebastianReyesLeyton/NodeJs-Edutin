'use strict'

const http = require('http').createServer(webServer),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    urls = [{
            id: 1,
            route: '',
            output: 'assets/html/index.html'
        },
        {
            id: 2,
            route: 'acerca',
            output: 'assets/html/acerca.html'
        },
        {
            id: 3,
            route: 'contacto',
            output: 'assets/html/contact.html'
        }
    ]

function webServer(req, res) {
    let pathURL = path.basename(req.url),
        id = url.parse(req.url, true).query.id

    console.log(`Path: ${pathURL}\nid: ${id}\n\n`)
    urls.forEach(function(pos) {
        if (pos.id == id || pos.route == pathURL) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            fs.readFile(pos.output, (err, data) => {
                if (err) throw err
                res.end(data)
            })
        }
    })

    if (!res.finished) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        fs.readFile('assets/html/404.html', (err, data) => {
            if (err) throw err
            res.end(data)
        })
    }
}

http.listen(3000, 'localhost')
console.log('Sevidor corriendo en http://localhost:3000')