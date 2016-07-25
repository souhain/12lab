// cargando el driver de mongodb que permitira conectarme a la base de datos
var mongodb = require("mongodb");
// cargando el cliente del driver
var mongoClient = mongo.mongoClient;


var fortunePaper = {

};
module.exports = {
    "getFortune": function (cb) {
        // conectando al cliente a la BD fortune
        mongoClient.connect("mongodb://127.0.0.1:27017/fortune",
            function (err, db) {
                if (err) {
                    console.log("> Error al conectarse a base de datos"
                        + "mongodb://127.0.0.1:27017/fortune");
                    var fortunePaper = {
                        "mensaje":
                        "La honestidad es un regalo caro, no lo esperes de gente barata"
                    };
                    var fortunePaperResponse = JSON.stringify(fortunePaper);
             cb(fortunePaperResponse);   
            }
            else{
                var paperCollection = db.paperCollection('paper');
                var objetoResultado = paperCollection.find({});
                objetoResultado.toArray(function(err, papers){
                    var fortunePaperResponse=
                    JSON.stringify(paper[0]);
                    db.close();
                    cb(fortunePaperResponse);
                })               
            }
            });

        
    }
};