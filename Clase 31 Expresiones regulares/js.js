/*
Expresiones Regulares:

Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres. 
https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular#:~:text=En%20c%C3%B3mputo%20te%C3%B3rico%20y%20teor%C3%ADa,conforma%20un%20patr%C3%B3n%20de%20b%C3%BAsqueda.

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
*/

let cadena = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur, odio tincidunt fringilla pulvinar, sem purus tristique erat, eget euismod ante diam eget purus. Maecenas neque ante, facilisis vel lorem ac, elementum hendrerit purus. Sed neque diam, porttitor sit amet erat quis, vulputate bibendum odio. Vestibulum et semper diam, ultricies lobortis elit. Duis elit dolor, varius quis ligula eget, tempor pulvinar odio. Morbi porta ligula a venenatis vestibulum. Aliquam vestibulum mi felis, a elementum augue faucibus quis. Etiam et velit sit amet metus malesuada tempus. Fusce libero turpis, ultrices in neque in, dictum pellentesque augue. Nulla id lorem et dolor sollicitudin commodo. Cras rutrum sit amet lorem nec tincidunt. 23";



let expReg = new RegExp("lorem", "ig"); // "i" e "ig" son flags, es decir, pequeñas modificaciones aplicables a las expresiones regulares.

//Aquí usamos la bandera ig, que sirve para que una vez encontrada la coincidencia, no se pare buscando:

let expReg2 = /lorem/ig;


console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));


//Para comprobar si hay un número dentro del string:

let expReg3 = /\d/ig;
// podemos usar directamente console.log(/\d/ig.exec(cadena)); sin declarar la variable

console.log(expReg3.exec(cadena));


//Para que busque la palabra lorem un número de veces comprendido entre 1 y 7. Es decir, como mínimo tiene que encontrarme 1 lorem, y una vez encontrados 7 para de buscar. Si el primer nº es más alto que los lorem que hay, devuelve false.

let expReg4 = /lorem{1,7}/ig;
console.log(expReg4.exec(cadena))