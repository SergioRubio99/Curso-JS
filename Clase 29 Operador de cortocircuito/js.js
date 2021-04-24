/*

Cortocircuito OR: Cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto.

Cortocircuito AND: Cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto.

*/



//Al meter un valor nombre, indicamos qué deberá mostrar el programa en lugar de undefined:


function saludar(nombre) {
    nombre = nombre || "Hola, no introduciste ningún nombre"
    console.log(`Hola ${nombre}`);
}
console.log();

saludar("Ryan");
saludar();


//OPERADOR OR:

//Probamos con diferentes tipos de datos booleanos positivos:

console.log("cadena" || "Valor de la derecha")
console.log(19 || "Valor de la derecha")
console.log(true || "Valor de la derecha")
console.log([] || "Valor de la derecha")
console.log({} || "Valor de la derecha")

//Probamos con diferentes tipos de datos booleanos negativos:
console.log(0 || "Valor de la derecha")
console.log(NaN || "Valor de la derecha")
console.log("" || "Valor de la derecha")
console.log(undefined || "Valor de la derecha")



//OPERADOR AND (Al revés que OR)

//Probamos con diferentes tipos de datos booleanos positivos:

console.log("cadena" && "Valor de la derecha")
console.log(19 && "Valor de la derecha")
console.log(true && "Valor de la derecha")
console.log([] && "Valor de la derecha")
console.log({} && "Valor de la derecha")

//Probamos con diferentes tipos de datos booleanos negativos:
console.log(0 && "Valor de la derecha")
console.log(NaN && "Valor de la derecha")
console.log("" && "Valor de la derecha")
console.log(undefined && "Valor de la derecha")