let a = 2;
let b = new Number;
let c = 7.19;
let d = "5.67";

console.log(a, b);
console.log(c.toFixed(1)); //El número en tl toFixed nos dice cuántos decimales va a tener el número redondeado.
console.log(c.toFixed(5));

//parseInt, en este caso, nos devuelve la parte entera ("parseInteger"):
console.log(parseInt(c));


//parseFloat, en este caso, nos devuelve el nº como un nº de punto de coma flotante:

console.log(parseFloat(c));



//parseInt, en este caso, hace lo mismo, convirtiendo el String en nº:
console.log(parseInt(d));

//parseFloat también hace lo mismo, convirtiendo el String en nº:
console.log(parseFloat(d));



console.log(typeof(d));
console.log(typeof(c));
console.log(a + b);
console.log(c + d); //<-- produce concatenación. Hay que hacer un casting (cambio de tipo de dato) al string, para sumarlo. Así:

console.log(c + parseInt(d));
console.log(c + parseFloat(d));