//a continuacion , tome contenido de otros sitios para crear la idea de cv que tenia en mente , mi conocimiento en js aun es bajo , de todas formas esto ayuda a entender este maravilloso lenguaje , gracias!.
//menu lateral.
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//oculto entonces
        menu.style.display = "block";
        menu_visibletrue 
    }
    else {
        menu.style.display = "none";
        menu_visible = false ; 
    }
}
//oculto el menu x cada seleccion.
let links = document.querySelectorAll("nav ");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//crear las barras identadas por ID.
function crearBarra (id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
//se seleccionan las barras generales para poder cambiar los valores.
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let css = document.getElementById("css");
crearBarra(css);
let disposicion = document.getElementById("disposicion");
crearBarra(disposicion);
let capacidad = document.getElementById("capacidad");
crearBarra(capacidad);
let adaptacion = document.getElementById("adaptacion");
crearBarra(adaptacion);

//se guarda la cant. de cuadrados por barra para editarlos.
//estan en "-1" por que arrancan vacias.
let contadores = [-1,-1,-1,-1,-1,-1]
//variable flag para prueba.
let entro = false;

//efecto Habilidades
function efectoHabilidades(){
    var Habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalCss = setInterval(function(){
            pintarBarra(css, 11, 2, intervalCss);
        },100);
        const intervalCapacidad = setInterval(function(){
            pintarBarra(capacidad, 15, 3, intervalCapacidad);
        },100);
        const intervalAdaptacion = setInterval(function(){
            pintarBarra(adaptacion, 16, 4, intervalAdaptacion);
        },100);
        const intervalDisposicion = setInterval(function(){
            pintarBarra(disposicion, 11, 5, intervalDisposicion);
        },100);
    }
}

//lleno una barra en particular.
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "violet";
    }else{
        clearInterval(interval)
    }
}

//se detecta el scroll asi se aplica la animacion!
window.onscroll = function(){
    efectoHabilidades();
}