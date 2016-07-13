// Manejadores de rutas virtuales
var fechaDeNacimiento = new Date(1992,07,03,3,00);
module.exports = {
    "/edad/edgar-paredes": function (req, res) {
        res.writeHead(200, {
            "content-Type": "application/json"
        });
        // calculo la edad
        var hoy = new Date(); 
        var age = Math.ceil((hoy - fechaDeNacimiento)/(1000*3600*24*365));
        // armando jeson
        var objetoRespuesta = {
            "edad" : age
        };
        var jsonResponse = JSON.stringify(objetoRespuesta);
        // Envio la respues al cliente
        res.end(jsonResponse);
    }
};