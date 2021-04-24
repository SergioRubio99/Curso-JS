console.error("error");

console.warn("warning");

console.info("info");

console.log("log");


let nombre = "Sergio",
    apellido = "Rubio",
    edad = 35;


console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);

//Forma de introducir parámetros en un template string:

console.log(`Hola mi nombre es %s %s y tengo %d años`, nombre, apellido, edad);

//Limpiar:

console.clear();

//Mostrar un elemento:

console.log(window);
console.log(document);
console.dir(window);
console.dir(document);



console.group("Ejemplos de texto en la consola");
console.log("Primer ejemplo de texto");
console.log("Segundo ejemplo de texto");
console.log("Tercer ejemplo de texto");
console.log("Cuarto ejemplo de texto");
console.log("Quinto ejemplo de texto");


console.groupEnd();



console.groupCollapsed("Ejemplos de texto en la consola");
console.log("Primer ejemplo de texto");
console.log("Segundo ejemplo de texto");
console.log("Tercer ejemplo de texto");
console.log("Cuarto ejemplo de texto");
console.log("Quinto ejemplo de texto");

console.groupEnd();


console.clear();
console.log(console);



//Mostrar elementos en una tabla con console.table:


console.table(Object.entries(console).sort());


const numeros = [1, 2, 3, 4, 5],
    vocales = ["a", "e", "i", "o", "u"];

console.table(numeros);
console.table(vocales);

const perro = {
    nombre: "Bruno",
    raza: "Boxer",
    color: "cafe"
}

console.table(perro);
console.clear();

// Cómo calcular el tiempo de ejecución de un pedazo de código. Hay que ponerlo entre el console.time y el console.timeEnd: 

console.time("Tiempo de ejecución");

const arreglo = Array(1000000);

for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}

console.timeEnd("Tiempo de ejecución")

console.clear();

// Para controlar cuántas veces se ejecuta un pedazo de código:

for (let i = 0; i <= 100; i++) {
    console.count("ejecución del bucle for");
    console.log(i);
}

console.clear();


//Cómo comprobar si se cumple una condición:

let x = 1,
    y = 2,

    pruebaXY = "Se espera que X sea siempre menor que Y. En caso contrario, dará error";

console.assert(x < y), { x, y, pruebaXY }