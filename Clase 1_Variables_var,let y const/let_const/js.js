var hola = "Hola mundo"
let hello = "Hello world"
console.log(hola);
console.log(hello);
console.log(window); //Para ejecutar en node.js, sustituimos window por global
console.log(window.hola);
console.log(window.hello);


// Ámbito de bloque
console.log("*********************var**********************")
var musica = "Rock";
console.log("Variable de música antes del bloque", musica);

{
    var musica = "Pop"
    console.log("Variable de música dentro del bloque", musica);
}

console.log("Variable de música después del bloque", musica);


console.log("*********************let**********************")



let musica2 = "Rock";
console.log("Variable de música2 antes del bloque", musica2);

{
    let musica2 = "Pop"
    console.log("Variable de música2 dentro del bloque", musica2);
}

console.log("Variable de música2 después del bloque", musica2);


console.log("********************const***********************")

const PI = 3.1416
console.log(PI)

a = "kenai";
console.log(a);

const objeto = {
    nombre: "Jon",
    edad: 35
}

const colores = ["blanco", "negro", "azul"]

console.log(objeto);
console.log(colores);

objeto.correo = "legacyentertainmentyt@gmail.com";
colores.push("anaranjado");

console.log(objeto);
console.log(colores);

//Las variables creadas con el método var, se almacenan en el objeto Window (navegadores) o en el objeto Global (node.js), sin respetar los scopes. Las let se almacenan solo en su scope determinado.