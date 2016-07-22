// Manejadores de rutas virtuales
var fortune = require("./fortune");
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
    },
    "/getfortune": function(req, res){
        console.log("> Se solicita fortuna...");
        // // Se obtiene el mensaje de la suerte
        // var fortunePaper = {
        //     "mensaje" : 
        //     "La honestidad es un regalo caro, no lo esperes de gente barata"
        // };
        // // Parseando a string el objetoRespuesta
        // // de respuesta
        // var jsonResponse = JSON.stringify(fortunePaper);
        fortune.getFortune(function(fortunePaper){
            // Se configura el encabezado de respuesta
            // HTTP
            res.writeHead(200,{
                "Content-Type" : "application/json"
            });
            // Respondemos el Objeto
            res.end(fortunePaper);
        });
    }
};