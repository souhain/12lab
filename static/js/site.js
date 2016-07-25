function getFortuneFromServer() {
    // Realizando la solicitud get ajax
    $.get("/getfortune", "", function (data, status) {
        console.log("> " + typeof (data));
        Console.log("> Estatus de respuesta: " + status);
        swal({
            title: "¡TU FORTUNA!",
            text: data.mensaje,
            imageUrl: "img/suerte.jpg"
        });
    }, "json");
}