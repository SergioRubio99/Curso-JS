let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id, id2);
console.log(typeof id, typeof id2);

const NAME = Symbol();
const SALUDAR = Symbol();

const PERSON = {
    [NAME]: "Sergio",
    edad: 21
}


console.log(PERSON);

PERSON.NAME = "Sergio Rubio"
console.log(PERSON)
console.log(PERSON.NAME)
console.log(PERSON[NAME])

PERSON[SALUDAR] = function() {
    console.log(`Hi, my name is ${PERSON.NAME}, and I am a Web Developer`);
}
console.log(PERSON)
PERSON[SALUDAR]();

for (let PROPERTY in PERSON) {
    console.log(PROPERTY);
    console.log(PERSON[PROPERTY]);
}

console.log(Object.getOwnPropertySymbols(PERSON));