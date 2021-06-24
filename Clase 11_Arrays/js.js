const a = ["C"]
const b = [1, true, "Hola", ["A", "B", `${a}`]];
console.log(a)
console.log(b)
console.log(b.length)
console.log(b[2]);
console.log(b[0]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][2][0]);


const c = Array.of("X", "Y", "Z", 9, 8, 7);
//Array.of creates an array from a certain amount of arguments.

console.log(c);

const d = Array(100).fill(1);
console.log("Array.fill: ", d);

//With this syntax, we can create an array from scratch, filled with a certain value. Nonetheless, it's commonly used like this: https://mzl.la/2TO1GCl

const e = new Array();
console.log(e);

const f = new Array(1, 2, 3, true, false);
console.log(f);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro");
console.log(colores);
//The push() method inputs an element to the bottom of the array.
colores.pop();
console.log(colores);
//The pop() method extracts an element from the bottom of the array.


//The forEach() method executes a provided function once for each array element.: https://mzl.la/3gNc3Os

colores.forEach(function(el, index, array) {
    console.log(`<li id="${index}">${el}</li>`);
    // console.log(array)
});