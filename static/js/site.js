var color = "cadetblue"
function hola(){
    
    sweetAlert("Worl places","¡Bienvenido a esta pagina!");
    document.body.style.backgroundColor = "lightseagreen"
}
function  changeBkgColor(element, color) {
    var color = document.body.style.backgroundColor;
    console.log("> Color original: "+ color);
    if(color == "lightseagreen"){
        color = "cadetblue";
    }else{
        color = "lightseagreen";
    }
    console.log("> Cambiando color a" + color);
    document.body.style.backgroundColor = color;
}