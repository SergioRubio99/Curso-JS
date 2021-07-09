console.log(Date());

let fecha = new Date();
console.log(fecha);

// Día del mes:
console.log(fecha.getDate());

// Día de la semana: D L M X J V S -> 0 1 2 3 4 5 6
console.log(fecha.getDay());

// Mes: Jaan Feb Mar Apr May Jun Jul Aug Sep Oct Nov -> 0 1 2 3 4 5 6 7 8 9 10 11

console.log(fecha.getMonth());

// Obtener qué año es desde 1900:

console.log(fecha.getYear());

// Obtener el año exacto: 

console.log(fecha.getFullYear());

// Hora, minutos y segundos:

console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());

// Segundos:

console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());

// pasar a strings (igual que en un array):

console.log(fecha.toString());
console.log(fecha.toDateString());

// A strings acorde al formato local de tu país:

console.log(fecha.toDateString());
console.log(fecha.toLocaleDateString());

//Más:

console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());

console.log(fecha.getUTCHours());


//Cuántos segundos han pasado desde el 1 de Enero de 1970:
console.log(Date.now());


//¿Cómo creamos una variable a partir del objeto Date?
let birthDay = new Date(1999, 9, 16);


console.log(birthDay);
//Recuerda que los meses están almacenados en un array. Por eso para octubre (mes 10), ponemos 9.

var seconds = new Date().getTime() / 1000;
console.log(seconds)