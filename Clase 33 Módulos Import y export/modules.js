import clase, { PI, usuario } from "./constants.js";
// import { usuario } from "./constants.js";
// import { clase } from "./constants";
console.log(PI)
console.log(usuario)





//Ejecutamos la función importada por default:
// saludar();




// Para importar varias funciones, lo hacemos de la siguiente manera...
// import { sumar, restar } from "./arithmetics.js"






//Ejecutamos la función:

// console.log(sumar(42, 60))

//...o así, agrupando las funciones en un objeto::

// import { arithmetics } from "./arithmetics.js";


//Ejecutamos la función dentro del objeto:

// console.log(arithmetics.sumar(42, 60))








//Aquí usamos la clase importada, 
let unaClase = new clase();
console.log(unaClase);

let texto = new clase();
texto;



//Cómo generar alias a los módulos:

import { arithmetics as calculus } from "./arithmetics.js";
console.log(calculus.sumar(3, 7));