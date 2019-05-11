const http = require('http')

/* Creamos servidor, recibe dos callbacks, request y response */
http.createServer((request, response) => {

    response.writeHead(200, { 'Content-Type': 'application/json' })
    const res = {

        name: 'Jesus',
        age: 28,
        status: null,
        status2: undefined,
        url: request.url
    }

    response.write(JSON.stringify(res))

    response.end();


}).listen(8080);

console.log('Escuchando en el puerto 8080')