// Cargar los modulos necesarios para crear mi servidor estatico
var fs = require('fs'),
    config = require('../config/config.js'),
    mime = require('mime');
// Exportar la funcion de Servidor Estatico
exports.serve = function (url, res) {
    //acompletar el static-path
    var filePath = config.STATIC_PATH + url;
    console.log("> "+ filePath);
    // verificando si existe o no el archivo dentro del servidor
    fs.exists(filePath, function (exists) {
        console.log("> Exists: " + exists);
        if (exists) {
            console.log("> El archivo existe");
            //sirvo el archivo
            fs.readFile(filePath, function (err, content) {
                if (err) {
                    console.log(`> Hubo error en la lectura del archivo: ${filePath}`);
                    // Eviar 500
                    res.writeHead(500, {
                        'contentType': 'text/html',
                        'Server': 'PilgrimHawks@2.1.2'
                    });
                    res.end("<h1>Error 500: Recurson Dañado</h1>");
                }
                else {
                    // Configuramos la respuesta
                    var contentType = mime.lookup(filePath);
                    // Armamo respuesta
                    res.writeHead(200, {
                        'content-Type': contentType,
                        'Server': 'PilgrimHawks-server@2.1.2'
                    });
                    // Enviar el archivo
                    res.end(content);
                }
            });
        }
        else {
            console.log("> El archivo no existe");
            // Mando un codigo 404
            res.writeHead(404, {
                'content-Type': 'text/html',
                'Server': 'PilgrimHawks@2.1.2'
            });
            res.end("<h1>404: Recurso no encontrado</h1>");
        }
    });
};