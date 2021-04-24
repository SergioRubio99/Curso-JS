// //EJERCICIOS:


// /*
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
// */



































// //1er ejercicio:


// let chain = prompt("Introduce a set of characters");
// let arrayChain = chain.split('');
// console.log(arrayChain);
// alert(`´The set you've introduced has ${arrayChain.length} characters`);


// //2do ejercicio:

// let whatToCut = prompt("What set of characters do you want to cut?").split('');
// let whereToCut = prompt("Where do you want to start cutting from?");
// console.log(whatToCut);

// if (whereToCut = NaN) {
//     let cut1stHalf = whatToCut.splice(0, whereToCut);
//     console.log(cut1stHalf);

// } else {
//     alert("You have to input a number!")
//     location.reload();
// }

// //3er ejercicio:


// let input = prompt('Input a string');
// let inputSep = " "

// function hasNumber(myString) {
//     return /\d/.test(myString);
// }


// if (hasNumber(input) == true) {
//     alert('Input only characters!')
//     location.reload();

// } else {

//     function splitFunct(myString, separator) {
//         console.log(myString.split(separator));
//     }
// }

// splitFunct(input, inputSep)


//Solución más legible, a través de array:

// const cadenaAArreglo = (cadena = "", separador = undefined) =>
//     (!cadena) ?
//     console.warm("No ingresaste una cadena de texto") :
//     (separador === undefined) ?
//     console.warn("No ingresaste el carácter separador") :
//     console.info(cadena.split(separador));

// cadenaAArreglo((prompt("Input text.")), " ")


//4to ejercicio:




// const repetirTexto = (texto = "", veces = undefined) => {

//     if (!texto) return console.warn("No ingresaste un texto");

//     if (veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto");

//     if (veces === 0) return console.error("El número de veces no puede ser 0");

//     if (Math.sign(veces) === -1) return console.error("El número de veces no puede ser negativo");

//     for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
// }

// repetirTexto("Hola mundo", 3);
// repetirTexto("Hola mundo", 0);
// repetirTexto("Hola mundo", -20);
// repetirTexto("", 20);