const numeros = [1, 2, 3];

//Sin destructuring:

let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno, dos, tres)

//Con destructuring:

const [one, two, three] = numeros;
console.log(one, two, three);

const persona = {
    nombre: "Sergio",
    apellido: "Rubio",
    edad: 21
}

let { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad);