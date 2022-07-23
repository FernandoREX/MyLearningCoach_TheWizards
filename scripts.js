//Animacion de la barra de navegacion


function mostrar_menu(){
    document.getElementById("Nav").classList.toggle("Nav");
    document.getElementById("btn_menu").classList.toggle("btn__menu-regreso");
    document.getElementById("Nav").classList.remove("enlace");
}

//FIN Animacion de la barra de navegacion

//--------------------------------------------------------------------
function enlace1(){
    document.getElementById("Nav").classList.toggle("enlace");
    console.log("hola");
}

function OpcionNivel() {
    const ni = document.getElementById("nivelEducativo").value;
    console.log(ni);
    Crear(ni);
}

function Crear(Nivell){
    if(Nivell == "Primaria"){
        
        var grado = document.getElementById("gradoEducativo");
        for(var i = 0; i<6; i++){
            var gradadd = document.createElement("option")
            gradadd.textContent = i+1 + "er grado";
            gradadd.id = "borrar"
            grado.appendChild(gradadd);
        }
        for(var i = 0; i<6; i++){
            Limpieza("borrarS");
        }
    }
    if(Nivell == "Secundaria"){
        
        var grado = document.getElementById("gradoEducativo");
        for(var i = 0; i<3; i++){
            var gradadd = document.createElement("option")
            gradadd.textContent = i+1 + "er grado";
            gradadd.id = "borrarS"
            grado.appendChild(gradadd);
        }
        for(var i = 0; i<6; i++){
            Limpieza("borrar");
        }
    }
}

function Limpieza(id){
    document.getElementById(id).outerHTML = "";
}

//--------------------------------------------------------------------

//--------------------------------Carrucel------------------------------------
const grande = document.querySelector(".grande");
const grandeC = document.querySelector(".grandeC");
const Materias = document.querySelectorAll(".materias");
const punto = document.querySelectorAll(".punto");
const grandeE = document.getElementById("escenarios");
const MateriasE = document.getElementById(".distE");

var contador = 0;

function contar(){
    var ContadorClases = 0;
    Materias.forEach((cadaClase, i) => {
        ContadorClases++;
    });
    const Resta = 100 - (100/ContadorClases);
    return Resta
}

const Limite = contar();

function Adelante(){
    if(contador > -Limite){
        contador = contador - 25;
        grandeE.style.transform = `translateX(${contador}%)`;
    }
}

function Atras(){
    if(contador < 0){
        contador = contador + 25;
        grandeE.style.transform = `translateX(${contador}%)`;
    }
}

function deslizaAdelante(){
    if(contador > -Limite){
        contador = contador - 25;
        grande.style.transform = `translateX(${contador}%)`;
    }
}

function deslizaAtras(){
    if(contador < 0){
        contador = contador + 25;
        grande.style.transform = `translateX(${contador}%)`;
    }
}

function deslizaAdelanteC(){
    if(contador > -Limite){
        contador = contador - 25;
        grandeC.style.transform = `translateX(${contador}%)`;
    }
}

function deslizaAtrasC(){
    if(contador < 0){
        contador = contador + 25;
        grandeC.style.transform = `translateX(${contador}%)`;
    }
}

function AgregarClasesEspa(){
    const varri = document.querySelectorAll(".Clase1");
    const vvv = document.querySelector(".materiasC");
    const x = {...varri};
    const idd = document.getElementById("IncribirmeEspañol");
    idd.value = "Entrar";
    vvv.appendChild(x[0]);

    //Creando nuevo enlace
    const nuevoEnlace = document.createElement("A");

    //Agregar el href
    nuevoEnlace.href = "error404.html";

    //Agragar el texto
    nuevoEnlace.textContent = "Entrar";

    //Agragar la clase
    nuevoEnlace.classList.add("boton--primario");
    nuevoEnlace.classList.add("boton");
    nuevoEnlace.classList.add("Wod");

    //Agregar al Documento
    const navegacion = document.querySelector(".wow");
    const navegacion1 = document.getElementById("IncribirmeEspañoll");
    navegacion.appendChild(nuevoEnlace);
    navegacion.removeChild(navegacion1);

    console.log(navegacion);
    
}

function accederespañol(){
    const ide = document.querySelector(".idd");
    ide.onclick = "AgregarClasesIngles()";
    console.log(ide);
}

function AgregarClasesIngles(){
    const varr = document.querySelectorAll(".Clase1");
    const vv = document.querySelector(".materiasC");
    const xx = {...varr};
    vv.appendChild(xx[1]);
    const ids = document.getElementById("IncribirmeEspañol");
    
    ids.value = "Entrar";
    console.log(ids);
}
