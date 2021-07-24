/*-----1) GALERÍA DE IMÁGENES-----*/

//Variables - Arreglos  
let numeros = ["1/3","2/3","3/3"];
let imagenes = ["img/carrusel1.jpg","img/carrusel2.jpg","img/carrusel3.jpg"];
let textos = ["Ambiente de trabajo de desarrolladores o programadores","Representación de un boceto gráfico de un sitio web","Elmer Vargas, el desarrollador del sitio Elmer's Blog"];

//Contador que va recorriendo la galería
let cont = 0;

//Manipular cada elemento HTML del carrusel
let $img = document.getElementById("fotografia");
let $num_img = document.getElementById("numero");
let $txt_img = document.getElementById("texto");

//Recargar primer elemento de la galería y el resto de ellos
funRecargaImagen();
function funRecargaImagen(){
    $img.setAttribute("src",imagenes[cont]);
    $num_img.innerText = numeros[cont];
    $txt_img.innerText = textos[cont];
}

//Función para desplazar el carrusel
function funImgSiguiente(){
    cont++;
    funRecargaImagen();
    
    if(cont>2){
        cont = 0;
        funRecargaImagen();
    }
}

//Galería automática que recorre el carrusel
let tiempo = 0;
let repeticiones = 0;

while(repeticiones <= 10000){
    funGaleríaInfinita();
}

function funGaleríaInfinita(){
    setTimeout(funImgSiguiente, tiempo+=2500);
    repeticiones++;
}

/*---- 2) MENÚ DESPLEGABLE, MOSTRAR - OCULTAR LISTA DE CONTENIDOS----*/

//Variables
let mostrar = false;
let $barras_menu = document.getElementById("btn_menu");
let $menu_adaptable = document.getElementById("menu2");

//Efecto Desplegable Menú
$barras_menu.onclick = () =>{
    if(mostrar == false){
        $barras_menu.innerHTML = `<i class='fas fa-times fa-2x'></i> <p>Cerrar</p>`;
        $menu_adaptable.style.display = "block";
        $menu_adaptable.style.height = "180px";
        mostrar = true;
    }else{
        $barras_menu.innerHTML = `<i class='fas fa-bars fa-2x'></i> <p>Menú</p>`;
        $menu_adaptable.style.display = "none";
        $menu_adaptable.style.height = "0px";
        mostrar = false;
    }
}

/*---- 3) MOSTRAR ANCLA REGRESAR AL INICIO CUANDO SE REALIZA SCROLL----*/

//Variables
let $anclaInicio = document.getElementById("regresar");

//Comportamiento al realizar scroll
window.onscroll = () =>{
    if(scrollY >= 200){
        $anclaInicio.style.opacity = "1";
        $anclaInicio.style.visibility = "visible";
    }else{
        $anclaInicio.style.opacity = "0";
        $anclaInicio.style.visibility = "hidden";
    }
}