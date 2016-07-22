function getFortuneFromServer() {
    // Realizando la solicitud get ajax
    $.get("/getfortune", function (data, status) {
        console.log("> " + typeof (data));
        Console.log("> Estatus de respuesta: " + status);
        //alert(data.mensaje);
    swal({
        title:"Sweet"
    })
});

}