//Reference: https://youtu.be/d1XijkyZRvM?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA

//The following kinds of characters are the only ones accepted by the Javascript Object Notation.
const json = {
    string: "Sergio",
    number: 35,
    boolean: true,
    array: ['run', 'jump', 'swim', 'lift weights'],
    object: {
        twitter: '@netcoder',
        email: 'legacyentertainmentyt@gmail.com'
    },
    nulo: null
}

console.log(json);
console.log(JSON);
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("19"));
console.log(JSON.parse("null"));
// console.log(JSON.parse("undefined"));

console.log(JSON.stringify({}));
console.log(JSON.stringify({ 'x': 2, 'y': 3 })); //It transforms double quotes into single quotes.
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(19));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));

//With stringify we turn something into a string:
console.log(JSON.stringify(json))

//We can apply the JSON.parse method to do the opposite: 

console.log(JSON.parse('{"string":"Sergio","number":35,"boolean":true,"array":["run","jump","swim","lift weights"],"object":{"twitter":"@netcoder","email":"legacyentertainmentyt@gmail.com"},"nulo":null}'))