export const PI = Math.PI;

export let usuario = "Sergio";
let password = "8759"


//Para exportar funciones por defecto:

// export default function saludar() {
//     console.log("Hola módulos +ES6")
// }

//Esto no funciona con var, const y let, si no has declarado antes dicha variable o constante:
// let numberLet = 10;
// export default numberLet;


//Con las clases se produce hoisting, por lo que no hay que declararlas primero:

// export default function buenasTardes() {
//     console.log("Buenas tardes")
// }

export default class clase {
    constructor() { console.log("Esto es una clase"); }

}