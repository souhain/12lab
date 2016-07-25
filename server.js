//  http
var http = require("http"),
    fs = require('fs'),
    config = require("./config/config.js"),
    staticServer = require('./internals/static-server.js'),
    colors = require("colors"),
    handlers = require('./internals/handlers');

// obteniendo las configuraciones 
// del modulo de configuracion
var PORT = config.PORT;
var IP = config.IP;
if (IP == '127.0.0.1') {
    console.log(">------Ejeccutando en modo local----");
}
// Crear un servidor basico
var server = http.createServer(function (req, res) {
    // botener la url del archivo
    // de la peticion le asigno una variable url
    var url = req.url;
    if (url == "/") {
        // sirve el index
        url = "/index.html";
    }
    // Verificando que la peticion 
    //del cliente sea una ruta  
    //virtual
    if (typeof (handlers[url]) === 'function') {
        // si es verdadero, existe un manejador para la url solicitada
        handlers[url](req, res)
    } else {
        console.log(`> URL Solicitada: ${url}...`.yellow);
        // Sirvo la url con mi server estatico
        staticServer.serve(url, res);
    }
});
// Poner a trabajar al server
server.listen(PORT, IP, function () {
    console.log(`> Server listening @http://${IP}:${PORT}...`);
}); 