// Source: https://mzl.la/38PCi3z

let map = new Map();

//Ojo, podría poner const map = new Map();, ya que aunque estemos ante una constante, los maps son tipos de dato complejos, y el poner const significa que no va a cambiar de tipo de dato. Ahora bien, su contenido sí puede varar. Es por ello por lo que podemos usar let y const en este caso, con iguales resultados. 

map.set("name", "Sergio");
map.set("surname", "Rubio");
map.set("age", "21");
map.set("country", "Spain");

console.log(map); //It is an iterable object.
console.log(map.size);
console.log(map.has("e-mail"));
console.log(map.has("name"));
console.log(map.get("name"));
console.log(map.set("name", "Sebastian"));
console.log(map.get("name"));
map.delete("surname");
console.log(map);
map.set("Gender", "Male");
console.log(map);

for (let [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
}

map.set(19, "nineteen");
map.set(false, "false");
console.log(map);

const map2 = new Map([
    ["name", "Ryan"],
    ["age", 30],
    ["fav_pet", "dog"],
    [null, "nulo"]
]);

console.log(map2);

const keysMap2 = [...map2.keys()];
const valuesMap2 = [...map2.values()];

console.log(keysMap2);
console.log(valuesMap2);