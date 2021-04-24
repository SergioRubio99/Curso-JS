// try {
//     console.log("En el try se agrega el código a evaluar");
//     console.log("Segundo mensaje en el try");
//     variableInexistente;
// } catch (error) {
//     console.log("Catch captura cualquier error surgido en el try")
//     console.log(error);
// } finally {
//     console.log("El bloque finally se ejecutará al final de un bloque try-catch");
// }


try {
    let numero = "y";

    if (isNaN(numero)) {
        throw new Error("El carácter introducido no es un número, inténtelo de nuevo");
    }

    console.log(numero * numero);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}