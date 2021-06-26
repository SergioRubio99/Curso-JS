//A generator let us convert a function into an iterable object. 

function* iterable() {
    yield 'hola';
    console.log('Hola consola');
    yield 'hola 2';
    console.log('Seguimos con más instrucciones de nuestro código');
    yield 'hola 3';
    yield 'hola 4';
}

let iterator = iterable();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (let y of iterator) {
    console.log(y);
}

//How to store all the values of iterable() into an array:

let array = [...iterable()];
console.log(array);

//The yield method is pretty useful for storing values returned by a function.


function square(value) {
    setTimeout(() => {

        return console.log({ value, result: value * value });
    }, 800);


}

function* generator() {
        console.log('The generator starts');
        yield square(1);
        yield square(2);
        yield square(3);
        yield square(4);
        yield square(5);
        console.log('The generator finishes');

    }
    //Here we iterate over the element of the function, but the asynchronous code made with yield doesn't block the execution of the following code. 


let gen = generator();

for (let y of gen) {
    console.log(y);
}

//Another explanation: https://bit.ly/2UuJHkC.

function* createSquaredNumbersGenerator(max) {
    let n = 0;

    while (n < max) {
        n++;
        yield n * n;
    }
}

for (const n of createSquaredNumbersGenerator(10)) {
    console.log(n);
}

console.clear()

function* createUniqueRandomGenerator(array) {
    const available = array;

    while (available.length !== 0) {
        const randomIndex = Math.floor(Math.random() * available.length);
        // console.log(available.length)
        // console.log(randomIndex)

        const value = available[randomIndex];

        //Remove the used value from the list of available values. 
        available.splice(randomIndex, 1);

        yield value;
    }
}

const names = ['Dom', 'Shelly', 'Timmy', 'Marie'];
const uniqueNames = createUniqueRandomGenerator(names);

for (const name of uniqueNames) {
    console.log(name);
}