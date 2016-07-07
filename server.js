//  http
var http = require("http");
// obteniendo informacion del entorno de ejecucion 
//con respecto al ip y al puerto que debemos usar en nuestro server
var PORT = process.env.PORT || 3000;
var IP = process.env.IP || '127.0.0.1';
if(IP=='127.0.0.1'){
    consol.log(">------Ejeccutando en modo local----");
}

// Crear un servidor basico
var server  = http.createServer(function (req,res){
    // Armar respuesta http 
    // Armar un encabezado hhtp
    res.writeHead(200,{
        "content-Type":"text/plain",
        "server":"ITGAM@4.2.4"
    });
    // Enviamos la respuesta
    res.write(" EDGAR ");
    // cerrar la conexion
    res.end();
});
// Poner a trabajar al server
 server.listen(PORT,IP,function () {
     console.log(`>Server listening @http://${IP}:${PORT}...`);
 }); 