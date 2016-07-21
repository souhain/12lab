var fortunePaper  = {
"mensaje" : "La honestidad es un regalo caro, no lo esperes de gente barata"
            };
module.exports = {
    "getFortune": function (cb) {
        // convirtiendo el fortunePaper de objeto a su version string
         firtunepaper = JSON.stringify(fortunePaper);
         // Ejecuto el callback (cb) pasandole
         // como parametro el fortunePaper
         cd(fortunePaper);
    }
};