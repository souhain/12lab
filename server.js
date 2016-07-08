//  http
var http = require("http");
var fs = require('fs');
var config = require("./config/config.js");
// obteniendo las configuraciones del modulo de configuracion
var PORT = config.PORT;
var IP = config.IP;
if(IP=='127.0.0.1'){
    console.log(">------Ejeccutando en modo local----");
}

// Crear un servidor basico
var server  = http.createServer(function (req,res){
    // Armar respuesta http 
    // Armar un encabezado hhtp
    res.writeHead(200,{
        "content-Type":"text/html",
        "server":"ITGAM@4.2.4"
    });
    //lectura del archivo a servir
    fs.readFile(
        './static/index.html',
        'utf8',function (err,content) {
            if(err){
                res.end("<h1>ERROR DE LECTURA</h1>");
            }
            else
            {
                res.end(content);
            }
        });
    
});
// Poner a trabajar al server
 server.listen(PORT,IP,function () {
     console.log(`>Server listening @http://${IP}:${PORT}...`);
 }); 