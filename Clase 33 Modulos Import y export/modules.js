/* **********     Curso JavaScript: 33. Módulos ( import / export ) - #jonmircha     ********** */

import { PI, user } from "./constants.js";
import hi from "./constants.js";
import { greeting } from "./constants.js";
// import { arithmetics } from "./arithmetics.js";
import { addition, substraction } from "./arithmetics.js";
import { arithmetics as calculus } from "./arithmetics.js";


console.log(PI, user);

//Here we import the object, and use the functions inside of it:
console.log(calculus.addition(2, 7), calculus.substraction(3, 1));

hi("Saludos")
    //this function was imported by default, with no brackets.;

let saludo = new greeting();
saludo;