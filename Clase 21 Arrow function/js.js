const saludar = nombre => console.log(`Hola, ${nombre}`);


saludar('John');

// const sumar = function(a, b) {
//     return a + b;
// }


const sumar = (a, b) => a + b;


console.log(sumar(8, 9));

const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

funcionDeVariasLineas();

const numeros = [1, 2, 3, 4, 5]
    //forEach syntax: https://mzl.la/3zMwHXQ
numeros.forEach(
    function(el, index) {
        console.log(`El elemento ${el} está en la posición ${index}`);
    }
);

//Versión en arrow function: 

numeros.forEach((el, index) => {
    console.log(`${el} está en la posición ${index}`);
});

//Arrow function en una línea de código:


numeros.forEach((el, index) => console.log(`Vemos que el elemento ${el} está en la posición ${index}`));


// function Perro() {
//     console.log(this);
// }

// Perro();

const perro = {
    nombre: "ryan",
    ladrar: function() {
        console.log(this);
    }
}

perro.ladrar();

//En arrow function: 

const perro1 = {
    nombre: "ryan",
    ladrar: () => {
        console.log(this);
    }
}

perro1.ladrar();

// Al llamar el THIS en la arrow function, vemos que el navegador nos muestra las características y elementos de Window. ¿Por qué, si esa función se encuentra dentro de un objeto? Esto es así debido a que las arrow function reconocen al elemento padre. Sobrepasan el contenedor en el que se encuentran. Por ello, es mejor prescindir de ellas cuando trabajemos dentro de objetos o funciones.


const perro2 = {
    nombre: "ryan",
    ladrar: function() {
        console.log(this);
    }
}

perro2.ladrar();