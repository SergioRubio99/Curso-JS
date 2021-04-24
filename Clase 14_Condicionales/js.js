let edad = 20;

if (edad > 18) {
    console.log("Eres mayor de Edad");
} else {
    console.log("Eres menor de Edad");
}

if (edad >= 17) {
    document.write(`<h1>Eres mayor de edad</h1>`)
} else {
    document.write(`<h1>Eres menor de edad</h1>`)
}


/*if - else if - else*/

/*Ejemplo: necesitamos hacer un programa que ejecute unas instrucciones dependiendo de la hora del día.

Déjame dormir: - 0 - 5
Buenos días: 6 - 12
Buenas tardes: 13 - 20
Buenas noches: 21 - 23 

*/

let hora = 0;
if (hora >= 0 && hora <= 5) {
    document.write(`<h1>Déjame dormir</h1>`);
} else if (hora >= 6 && hora <= 12) {
    document.write(`<h1>Buenos días</h1>`);
} else if (hora >= 13 && hora <= 20) {
    document.write(`<h1>Buenas tardes</h1>`);
} else if (hora >= 21 && hora <= 23) {
    document.write(`<h1>Buenas noches</h1>`);
}

if (hora > 0 && hora < 6) {
    document.write(`<h1>Déjame dormir</h1>`);
} else if (hora > 6 && hora < 13) {
    document.write(`<h1>Buenos días</h1>`);
} else if (hora > 14 && hora < 21) {
    document.write(`<h1>Buenas tardes</h1>`);
} else {
    document.write(`<h1>Buenas noches</h1>`);
}

/*Operador ternario (condición) ? verdadero : falso*/
console.log("Operador Ternario");
let eresMayor = (edad >= 18) ?
    "Eres mayor de Edad" :
    "Eres menor de edad"

console.log(eresMayor)

/* switch - case*/

/*

domingo - 0
lunes - 1
martes - 2
miércoles - 3
jueves - 4
viernes - 5
sábado - 6


*/
let dia = 6
switch (dia) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("No ha introducido un número de día válido")
}