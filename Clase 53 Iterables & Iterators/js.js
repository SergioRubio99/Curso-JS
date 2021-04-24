const iterable = new Set([1, 2, 3, 4, 5, 5, 2]);
const iterable2 = "Hola mundo";
const iterable3 = new Map([
    ["nombre", "Cristian", ["edad", 35]]
]);

//Accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();
const iterador2 = iterable2[Symbol.iterator]();
const iterador3 = iterable3[Symbol.iterator]();

console.log(iterable);
console.log(iterable2);
console.log(iterable3);
console.log(iterador);
console.log(iterador2);
console.log(iterador3);

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next = iterador.next();
console.log(next)
while (!next.done) {
    console.log(next.value);
    next = iterador.next();
}

let next2 = iterador2.next();
console.log(next)
while (!next2.done) {
    console.log(next2.value);
    next2 = iterador2.next();
}


let next3 = iterador3.next();
console.log(next3)
while (!next3.done) {
    console.log(next3.value);
    next3 = iterador3.next();
}


function* generador(nombre) {
    yield `Hola ${name}`;
    yield 'Esta línea saldrá en la segunda ejecución';
    yield 'Esta otra, en la tercera';
    if (nombre === 'Jonathan') {
        yield 'Esta otra, saldrá en la cuarta solo si te llamas Jonathan';
    }
}

let gen = generador('Jonathan');
console.log(gen.next()); //Imprime Object {value: "Hola Jonathan", done: false}
console.log(gen.next().value); //Imprime Esta línea saldrá la segunda ejecución
console.log(gen.next().value); //Imprime Esta otra, en la tercera
console.log(gen.next().value); //Imprime Esta otra, saldrá en la cuarta solo si te llamas Jonathan
console.log(gen.next()); //Imprime Object {value: undefined, done: true}