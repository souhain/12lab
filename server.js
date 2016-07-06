//  http
var http = require("http");
// Crear un servidor basico
var server  = http.createServer(function (req,res){
    // Armar respuesta http 
    // Armar un encabezado hhtp
    res.writeHead(200,{
        "content-Type":"text/plain",
        "server":"ITGAM@4.2.4"
    });
    // Enviamos la respuesta
    res.write("Hola chubacaa ");
    // cerrar la conexion
    res.end();
});
// Poner a trabajar al server
 server.listen(3000,'127.0.0.1',function () {
     console.log(">Server listening @http://localhost:3000...");
 }); 