var color = "honedew"
function hola(){
    alert("> Bienvenido a esta pagina ...");
}
function  changeBkgColor(element, color) {
    var color = document.body.style.backgroundColor;
    console.log("> Color original: "+ color);
    if(color == "lighseagreen"){
        color = "honeydew";
    }else{
        color = "lighseagreen";
    }
    console.log("> Cambiando color a" + color);
    document.body.style.backgroundColor = color;
}