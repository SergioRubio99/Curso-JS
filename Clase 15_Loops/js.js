let contador = 0;

// while (contador < 10) {
//     console.log(contador);
//     contador++;

// }

do {
    console.log(contador)
    contador++

} while (contador <= 10)


// for (inicializacion de variable; condición; decremento o incremento){
//     sentencias que ejecuta el for
//     sentencias que ejecuta el for
//     sentencias que ejecuta el for
// }

for (let i = 0; i < 10; i++) {
    console.log(`for + ${i}`)
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numeros.length; i++) {
    document.write(`${numeros[i]} </br>`)
}

//"for of" y "for in"


//for in:
const sergio = {
    nombre: "Sergio",
    apellido: "Rubio",
    tlf: "+34 623 71 72 71"
}

// Modelo:
// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key]
//         console.log(element)
//     }
// }

//Iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties. https://mzl.la/35GJnBT

console.clear()
for (const propiedad in sergio) {
    console.log(`key: ${propiedad}, Value: ${sergio[propiedad]}`)
}

//for of:

for (const elemento of numeros) {
    console.log(elemento)
}

let cadena = "Hola mundo";

for (const caracter of cadena) {
    console.log(caracter)
}

//for of sirve para recorrer cualquier objeto iterable en JS. For in para recorrer las propiedades de un objeto.