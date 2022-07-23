//------------------------------------------------------------------------------------
/**
 * "src" funcion que permite identificar uno o varios archivos
 * "dest" funcion que permite guardar un archivo en una carpeta destino
 * 
 *  ".pipe()" ejecuta las acciones de las funciones que importamos con
 *  "require"
 * 
*/

const {src, dest, watch, parallel} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber"); // importamos la dependencia de desarrollo gulp


//Compilando hoja de estilos SASS
function css(done) {
    src("src/scss/**/*.scss") // Identiicar todos los archivos SASS
        .pipe( plumber() ) //Se usa antes de compilar
        .pipe( sass() ) // Compilar el archivo SASS con ".pipe()"
        .pipe( dest("build/css") // Almacer en el disco duro con ".pipe()"
    ); 
    done(); //Callback que avisa a "gulp" cuando llegamos al final
}

//Para implementar el "watch"
function dev(done){
    watch("src/scss/**/*.scss", css);
    done();
}

exports.css = css; //Mandamos a llamar a la funcion "css"
exports.dev = dev; 
