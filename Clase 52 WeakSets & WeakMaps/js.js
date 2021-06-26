//https://youtu.be/nfMEnCrBL-0?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA


//WeakSets: 



//Ya no podemos usar la función constructora new como con los Set();.


//const ws = new WeakSet([1, 2, 3, 4, 5, true, false, true, {}, {}, "hola", "HOla"]);



const ws = new WeakSet();

let value1 = { "value1": 1 };
let value2 = { "value2": 2 };
let value3 = { "value3": 3 };

ws.add(value1);
ws.add(value2);
console.log(ws.has(value1));
console.log(ws.has(value2));
console.log(ws.has(value3));

console.log(ws);


console.log((value1));
console.log((value2));

ws.delete(value2);
console.log(ws);

ws.add(value2);
ws.add(value3);
console.log(ws);

setInterval(() => console.log(ws), 1000);

setTimeout(() => {
    value1 = null;
    value2 = null;
    value3 = null;
}, 3000);


//Tienes que tener activada la opción "garbage collector" en la pestaña de Memoria, en el navegador, para que esto funcione. Al haberse declarado nulas las variables, no tiene sentido que sigan en memoria. Esto sirve para evitar el Memory Leak, cuando tienes que añadir y quitar elementos



//Weaksets:


//Ya no podemos usar la función constructora new como con los Map();.


//const ws = new WeakMap([["name", "Cristóbal"],["age", 30],["fav_pet", "dog"],[null, "nulo"]]); const wm = new WeakMap([["name", "Cristóbal"],["age", 30],["fav_pet", "dog"],[null, "nulo"]]);

const wm = new WeakMap();
let key1 = {};
let key2 = {};
let key3 = {};

wm.set(key1, 1);
wm.set(key2, 2);
console.log(wm);
console.log(wm.has(key1))
console.log(wm.has(key2))
console.log(wm.has(key3))

console.log(wm.get(key1))
console.log(wm.get(key2))
console.log(wm.get(key3))
wm.delete(key2);
console.log(wm);

wm.set(key2, 2);
wm.set(key3, 3);
console.log(wm);

// setInterval(() => console.log(wm), 1000)